"use client"

import { useRef, useEffect } from "react"

export default function GameCanvas({ carPosition, isMovingForward, width, height, stop }) {
  const canvasRef = useRef(null)
  const backgroundOffsetRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || width === 0 || height === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    const carImage = new Image()
    const backgroundImage = new Image()

    carImage.src = "/static/images/game/cargame.png"
    backgroundImage.src = "/static/images/game/b.png"

    const drawBackground = () => {
      const aspectRatio = backgroundImage.width / backgroundImage.height
      const canvasAspectRatio = width / height

      let drawWidth, drawHeight, offsetY

      if (canvasAspectRatio > aspectRatio) {
        drawWidth = width
        drawHeight = width / aspectRatio
        offsetY = (height - drawHeight) / 2
      } else {
        drawHeight = height
        drawWidth = height * aspectRatio
        offsetY = 0
      }

      // Ajustamos el offset para que sea siempre positivo
      const adjustedOffset = backgroundOffsetRef.current % drawWidth

      // Dibujamos tres copias del fondo para asegurar una transición suave
      ctx.drawImage(backgroundImage, -adjustedOffset, offsetY, drawWidth, drawHeight)
      ctx.drawImage(backgroundImage, drawWidth - adjustedOffset, offsetY, drawWidth, drawHeight)
      ctx.drawImage(backgroundImage, drawWidth - adjustedOffset, offsetY, drawWidth, drawHeight)
    }

    const drawCar = () => {
      const carWidth = width * 0.15
      const carHeight = carWidth * (carImage.height / carImage.width)
      const carY = height * 0.75 - carHeight / 2

      ctx.drawImage(carImage, carPosition.x, carY + 15, 145, 70)
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      drawBackground()
      drawCar()

      if (isMovingForward) {
        // Ajustamos la velocidad de desplazamiento para que sea más suave
        backgroundOffsetRef.current += 0.1
      } else if (stop == 0) {
        backgroundOffsetRef.current = 0
      }
      requestAnimationFrame(animate)
    }

    Promise.all([
      new Promise((resolve) => {
        backgroundImage.onload = resolve
      }),
      new Promise((resolve) => {
        carImage.onload = resolve
      }),
    ]).then(() => {
      animate()
    })
  }, [carPosition, isMovingForward, width, height])

  return <canvas ref={canvasRef} className="gameCanvas rounded-lg border " />
}