"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/game/card"
// import PageSEO from '@/components/SEO';
import GameCanvas from "./components/game/GameCanvas"
import QuestionModal from "./components/game/QuestionModal"
import questions from "./data/questions"
import { HelpModal, HelpModals } from "./components/game/HelpModal"
import ImageComponent from "./components/ImageComponent"
import Timer from "./components/game/Timer";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalCircleIcon, QuestionMarkCircleIcon, ArrowPathIcon, TrophyIcon, XMarkIcon, CheckIcon } from '@heroicons/react/16/solid'
import { PARAMETERS } from "./data/constants";


export default function DrivingGame() {
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 })
  const [showQuestion, setShowQuestion] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("Necesitas estudiar más. ¡No te rindas!")
  const [showInitModel, setShowInitModel] = useState(true)
  const [isGameActive, setIsGameActive] = useState(true)
  const [isMovingForward, setIsMovingForward] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 700, height: 800 })
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showRankingModal, setShowRankingModal] = useState(false)
  const [rankAcademia, setUsuarios] = useState([])
  const [showOptionActive, setShowOptionActive] = useState(false)
  const [showNewScoreModal, setShowNewScoreModal] = useState(false)
  const [stopCar, setStopCar] = useState(1)
  const touchStartX = useRef(null)
  const timerRef = useRef(null)


  const moveCarPosition = useCallback(
    (dx) => {
      setCarPosition((prev) => ({
        x: Math.max(0, Math.min(prev.x + dx, canvasSize.width - 100)),
        y: prev.y,
      }))
      setIsMovingForward(dx > 0)
    },
    [canvasSize],
  )


  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = 9 / 16
      const maxWidth = window.innerWidth
      const maxHeight = window.innerHeight
      let width = maxWidth
      let height = width / aspectRatio

      if (height > maxHeight) {
        height = maxHeight
        width = height * aspectRatio
      }
      setCanvasSize({ width, height })
      setCarPosition((prev) => ({ ...prev, y: height * 0.75 }))
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGameActive || gameOver) return
      switch (e.key) {
        case "ArrowUp":
          moveCarPosition(0, -1)
          break
        case "ArrowDown":
          moveCarPosition(0, 1)
          break
        case "ArrowLeft":
          moveCarPosition(-1, 0)
          setIsMovingForward(true)
          break
        case "ArrowRight":
          moveCarPosition(1, 0)
          setIsMovingForward(true)
          break
      }
    }

    const handleKeyUp = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        setIsMovingForward(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [isGameActive, moveCarPosition, gameOver])



  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
      if (!touchStartX.current || !isGameActive || gameOver) return
      const touchEndX = e.touches[0].clientX
      const diff = touchEndX - touchStartX.current
      const sensitivity = 5
      if (Math.abs(diff) > sensitivity) {
        moveCarPosition(diff > 0 ? 1 : -1)
      }
    }

    const handleTouchEnd = () => {
      touchStartX.current = null
      setIsMovingForward(false)
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isGameActive, gameOver, moveCarPosition])

  function esMultiploDe30(numero) {
    return numero % 20 === 0
  }

  if (esMultiploDe30(carPosition.x) && carPosition.x !== 0 && !showQuestion && !gameOver) {
    setShowQuestion(true)
    setIsGameActive(false)
    setCarPosition({ x: carPosition.x + 1, y: carPosition.y })
  }
  const handleAnswer = async (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
      if (score >= 8) {
        setMessage("🎉 ¡Felicidades! Has aprobado el test.")
      } else if (score >= 6) {
        setMessage("Buen trabajo, pero aún puedes mejorar.")
      } else {
        setMessage("Necesitas estudiar más. ¡No te rindas!")
      }
    }
    setShowQuestion(false)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setIsGameActive(true)
    } else {
      if (timerRef.current) {
        timerRef.current.pauseTimer()
      }
      if (score + 1 == 10) {
        const usuarios = await obtenerUsuarios();
        setUsuarios(usuarios);
        if (parseFloat(timerRef.current.getActualTime(), 10) < parseFloat(usuarios[3].score, 10)) {
          setShowNewScoreModal(true);
        }
      }
      setGameOver(true)
    }
  }

  const restartGame = () => {
    setCarPosition({ x: 0, y: canvasSize.height * 0.75 })
    setShowQuestion(false)
    setCurrentQuestion(0)
    setStopCar(0)
    setScore(0)
    setIsGameActive(true)
    setIsMovingForward(false)
    setGameOver(false)
    setShowInitModel(true)
    if (timerRef.current) {
      timerRef.current.pauseTimer()
    }
    timerRef.current.clearTimer()
  }

  const startGame = async (res) => {
    setStopCar(1)
    setShowOptionActive(true)
    setShowInitModel(false)
    setIsGameActive(true)
    setIsMovingForward(false)

    if (timerRef.current) {
      timerRef.current.initTimer()
    }
  }


  // rankingGame
  const getRankingGame = async (res) => {
    let listRanking = [];
    try {
      const response = await fetch(`${PARAMETERS.apiRest}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${PARAMETERS.tokenBearer}`
        },
      });

      const json = await response.json();
      listRanking = json.data.rows;
      if (!json.data || !json.data.rows) {
        return res.status(500).json({ error: "Formato de respuesta inesperado" });
      }
      res.status(200).json(json.data.rows);
    } catch (error) {
      console.log("error: ", error.message);
    }

    setGameOver(false)
    setShowRankingModal(true);
    setUsuarios(listRanking);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let nombre = data.get('name');
    const usuarios = await obtenerUsuarios();
    setUsuarios(usuarios);
    if (nombre) {
      actualizarRanking(usuarios[4].rank, parseFloat(timerRef.current.getActualTime(), 10), nombre);
    }
    setShowNewScoreModal(false);
  }


  async function agregarUsuario(score, name) {
    const response = await fetch(`${PARAMETERS.apiRest}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${PARAMETERS.tokenBearer}`
      },
      body: JSON.stringify({ score: score, name: name }),
    });

    const data = await response.json();
    console.log(data);
  }

  const actualizarRanking = async (rank, newScore, newName) => {
    const res = await fetch(`${PARAMETERS.apiRest}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${PARAMETERS.tokenBearer}`
      },
      body: JSON.stringify({ rank, score: newScore, name: newName }),
    });
    console.log(await res.json());
  };


  async function obtenerUsuarios() {
    const response = await fetch(`${PARAMETERS.tokenBearer}`);
    const listScore = await response.json();

    const usuarios = listScore.map(user => ({
      rank: user.rank,
      score: user.score.toFixed(1),
      name: user.name
    }));

    return usuarios;
  }


  const RankingModal = () => {
    let sliceScore = "";
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#111928] bg-opacity-50 z-10">
        <div className="bg-[#111928] p-4 rounded-lg max-w-sm w-full text-center relative">
          <button className="absolute top-2 right-2 scale-90 flex"
            onClick={() => setShowRankingModal(false)}>✖️</button>
          <h2 className="text-2xl font-semibold my-1">Ranking</h2>
          <div className="py-2">
            <table className="table-auto w-full font-medium text-center ">
              <thead>
                <tr className="bg-sky-400">
                  <th className="border-b border-l border-t text-dark font-bold px-4 py-1">🏆</th>
                  <th className="border-b border-t font-bold text-dark px-4 py-1">Nombre</th>
                  <th className="border-b border-t font-bold text-dark px-4 py-1">Tiempo</th>
                  <th className="border-b border-r border-t font-bold text-dark px-4 py-1">Puntos</th>

                </tr>
              </thead>
              <tbody>
                {rankAcademia.map((user, index) => (
                  // sliceScore = user.score.toString().slice(0, 4),
                  sliceScore = (user.score / 60).toString().slice(0, 4),
                  <tr key={index}>
                    <td className="border-b border-l px-4 py-2">{index + 1}</td>
                    <td className="border-b px-4 py-2">{user.name}</td>
                    <td className="border-b px-4 py-2">{sliceScore}</td>
                    <td className="border-b border-r px-4 py-2">{user.points}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    )
  }

  const NewScoreModal = () => {
    return (
      <form className="absolute inset-0 flex items-center justify-center bg-[#111928] bg-opacity-50 z-10" onSubmit={handleSubmit} >
        <div className="bg-[#111928] p-4 rounded-lg max-w-xs w-full text-center relative">
          <button className="absolute top-2 right-2 scale-90 flex"
            onClick={() => setShowNewScoreModal(false)}>✖️</button>
          <div className="group text-2xl flex w-full items-center justify-center font-semibold px-3 data-[focus]:bg-rose-400/10">
            Nuevo Record <TrophyIcon className=" mx-2 -mt-1 size-7 fill-yellow-400" />
          </div>
          <p className="pt-1.5 text-sm font-medium">¡Felicidades! Has ingresado al ranking.</p>
          <p className="text-sm font-medium">Por favor, ingresa tu nombre:</p>
          <input type="text" id="name" name="name" className="text-dark bg-white py-1 mt-2 w-full rounded-md" />
          <button type="submite" className="group mt-2 text-sm flex w-full items-center justify-center gap-2 rounded-md py-1.5 px-3 bg-blue/80 data-[focus]:bg-blue/10">Confirmar
            <CheckIcon className="size-4 fill-white/80" />
          </button>
        </div>
      </form>
    )
  }

  const StartModal = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#111928] bg-opacity-50 z-10">
        <div className="bg-[#111928] p-6 rounded-lg max-w-xs w-full text-center">
          <ImageComponent iSrc="/static/images/game/faviconAcademia.ico" iAlt="Juego Academia Fortaleza" loading="lazy"
            iWidth={100} iHeight={100} iClassName="mx-auto w-22 mb-3" />
          <h1 className="text-xl font-bold mb-4">Academia Fortaleza</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-base"
            onClick={startGame}>Iniciar Juego</button>
        </div>
      </div>
    )
  }

  const RestartModal = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#111928] bg-opacity-50 z-10">
        <div className="bg-[#111928] p-6 rounded-lg max-w-xs w-full text-center">
          <h2 className="text-xl font-bold mb-4">¡Juego terminado!</h2>
          <p className="text-sm font-medium">Calificación: {score}/{questions.length}</p>
          <p className="text-sm font-medium">Tiempo: {timerRef.current.state.actualTime.toFixed(1)} seg</p>
          <p className="text-sm font-medium">Correctas: {(score / questions.length * 100).toFixed(1)}%</p>
          <p className="text-sm font-medium">Incorrectas: {((questions.length - score) / questions.length * 100).toFixed(1)}%</p>
          <p className="text-base m-4">{message}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-base"
            onClick={restartGame}>Reiniciar juego</button>
        </div>
      </div>
    )
  }

  const optionAndScore = () => {
    return (
      <>
        <div className="absolute top-1 right-1 p-1 rounded text-sm font-medium">
          <Menu>
            <MenuButton className=" inline-flex items-center gap-1 rounded-md bg-transparent bg-opacity-80 py-1 px-0 font-normal text-white data-[focus]:bg-blue/10">
              <EllipsisHorizontalCircleIcon className="size-8 fill-[#1f2a37]/90 hover:fill-[#111928]" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-37origin-top-right rounded-xl border border-white/5 bg-[#111928] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
              <MenuItem>
                <button className="group text-sm flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-blue/10" onClick={() => setShowHelpModal(true)}>
                  <QuestionMarkCircleIcon className="size-4 fill-white/20" />
                  Ayuda
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group text-sm flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-blue/10" onClick={getRankingGame}>
                  <TrophyIcon className="size-4 fill-white/20" />
                  Ver Ranking
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
              <MenuItem>
                <button className="group text-sm flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-blue/10" onClick={restartGame}>
                  <ArrowPathIcon className="size-4 fill-white/20" />
                  Reiniciar
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group text-sm flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-rose-400/10"
                  onClick={() => window.location.href = '/test-online'} >
                  <XMarkIcon className="size-4 fill-white/20" />
                  Salir
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div className="absolute top-2 left-2 bg-[#111928] bg-opacity-80 p-1.5 rounded text-sm font-medium">
          <Timer ref={timerRef} />
          Puntuación: {score}/{questions.length}
        </div>
        {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}
      </>
    )
  }


  return (
    <>
      {/* <PageSEO title="Juego Preguntas - Academia Fortaleza" description="Juego de preguntas de manejo para practicar y aprender las normas de tránsito." /> */}
      <div className="bg-transparent flex items-center justify-center overflow-hidden z-[1000]">
        <Card className="max-w-full max-h-screen">
          <CardContent>
            <div className="game relative w-full h-full lg:w-full lg:h-full">
              {optionAndScore()}

              <GameCanvas carPosition={carPosition} isMovingForward={isMovingForward} width={canvasSize.width} height={canvasSize.height} stop={stopCar} />

              {showQuestion && !gameOver && (
                <QuestionModal question={questions[currentQuestion]} onAnswer={handleAnswer} />
              )}

              {showInitModel && !showNewScoreModal &&
                <StartModal />
              }

              {showNewScoreModal && (
                <NewScoreModal />
              )}

              {showRankingModal && !showNewScoreModal && (
                <RankingModal />
              )}

              {gameOver && !showNewScoreModal && (
                <RestartModal />
              )}

            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

