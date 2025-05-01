import React from 'react';
import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListDivider from '@mui/joy/ListDivider'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import test1Data from '@/data/test1Data'
import swal from 'sweetalert';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Modal from '@mui/joy/Modal';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';


const o = [];
const a = [];
const p = [];
let opnes;
opnes = false
let msj = ' ';
let msjOpCorrect = ' ';


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (mode === 'dark');
}


export default function TestUnoForm() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* <addTests /> */}
      <CssVarsProvider>
        <React.Fragment>
          <div className="flex flex-col mt-2 items-start justify-start md:mt-8 md:flex-row md:items-center md:justify-center md:space-x-8 text-gray-900 dark:text-gray-300">
            <form method="post" onSubmit={handleSubmit}>
              <div className="tracking-tight text-4xl font-bold text-gray-800 dark:text-gray-100">Test de Evaluación
                <div className="tracking-tight px-1 text-base font-bold text-gray-600 dark:text-gray-400">Versión 1</div>
              </div>

              {/* PREGUNTA FORMULARIO */}
              <br></br>
              <div className="flex flex-wrap">
                <Box sx={{ minWidth: 240, maxWidth: 760 }}>

                  <List component="div" variant="plain" size="sm" sx={{ borderRadius: 'none', boxShadow: 'base' }}>
                    {test1Data.map((jsonPreg, index) => (
                      <div className="px-3 py-1 border-gray-900/10 dark:border-gray-100/20 text-black dark:text-gray-100" key={jsonPreg}>

                        {/* Pregunta form */}
                        <div className="pt-2 tracking-wides text-base font-sans font-bold text-sky-500">Pregunta {index + 1} </div>
                        <div className="tracking-wides py-1 leading-5 text-base font-sans font-normal text-black dark:text-white">
                          {jsonPreg.PREG}
                        </div>

                        {/* Opciones form */}
                        <RadioGroup aria-labelledby="example-payment-channel-label" overlay name={`preg${index + 1}`}>
                          {[jsonPreg.OP1, jsonPreg.OP2, jsonPreg.OP3, jsonPreg.OP4, jsonPreg.OP5].map((value, index) => (
                            value && (
                              <React.Fragment key={value}>
                                {index !== 0 && <ListDivider />}
                                <ListItem>
                                  <label>
                                    <Radio className="cursor-pointer leading-5 text-base font-normal text-black dark:text-gray-100 dark:hover:text-primary-500"
                                      id={value}
                                      value={value}
                                      label={value} />
                                  </label>
                                </ListItem>
                              </React.Fragment>
                            )))}
                        </RadioGroup>
                      </div>
                    ))}
                  </List>
                </Box>
              </div>
              {/* FIN PREGUNTA */}

              <div>
                <div className="flex-col h-26 items-center space-x-2 py-4">
                  <div className="d-grid gap-2">
                    {isButtonVisible && (
                      <Button className="w-full rounded-md dark:bg-rose-900 px-12 py-2 text-base font-semibold leading-6 text-white" onClick={() => setOpen(true)}>
                        Corrección
                      </Button>
                    )}
                    <div id="grupo1">
                      <Button className="w-full rounded-md dark:bg-primary-700 px-12 py-2 text-base font-semibold leading-6 text-white" type="submit"
                        onClick={() => { setIsButtonVisible(true); ocultar('grupo1') }}>
                        Finalizar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <br></br>
          {/* <Link href="/test-online" className="font-semibold hover:text-indigo-500 text-primary-700">
            &larr; Atrás
          </Link> */}

          <ModeToggle />
          <Modal open={open} onClose={() => setOpen(false)} className="tracking-wides py-1 leading-5 text-base font-sans dark:bg-[#0d1117]">
            <Sheet sx={{ maxWidth: '99%', maxHeight: '96%', overflowY: 'scroll', mx: 2, my: 2, py: 4, px: 2, display: 'flex', flexDirection: 'column', gap: 1, borderRadius: 'sm', boxShadow: 'md' }}
              className="tracking-wides py-1 leading-5 text-base font-sans dark:bg-[#0d1117]" variant="outlined">
              <div className="text-3xl font-bold text-gray-100 py-2 text-center">
                <span className="box-decoration-clone from-indigo-900 to-slate-800 text-white">Corrección</span>
              </div>

              {p.map((item, i) => (
                a[i] === o[i] ? (
                  <FormControl key={i}>
                    <div className="py-2"></div>
                    <label className="tracking-wides leading-5 text-base font-sans font-semibold text-gray-200">Pregunta {i + 1} </label>
                    <label className="tracking-wides leading-5 text-base font-sans font-normal text-gray-300">{item}</label>
                    <label className="tracking-wides leading-5 text-base font-sans font-semibold text-primary-600">{a[i]}</label>
                  </FormControl>
                ) : a[i] === 'Pregunta sin respuesta' ? (
                  <FormControl key={i}>
                    <div className="py-2"></div>
                    <label className="tracking-wides leading-5 text-base font-sans font-semibold text-gray-200">Pregunta {i + 1} </label>
                    <label className="tracking-wides leading-5 text-base font-sans font-normal text-gray-300">{item}</label>
                    <label className="tracking-wides leading-5 text-base font-sans font-semibold text-orange-500">{a[i]}</label>
                  </FormControl>
                ) : (
                  <>
                    <FormControl key={i}>
                      <div className="py-2"></div>
                      <label className="tracking-wides leading-5 text-base font-sans font-semibold text-gray-200">Pregunta {i + 1} </label>
                      <label className="tracking-wides leading-5 text-base font-sans font-normal text-gray-300">{item}</label>
                      <label className="tracking-wides leading-5 text-base font-sans font-semibold text-red-500">{a[i]}</label>
                    </FormControl>
                  </>
                )
              ))}

              <Button className="rounded-md dark:bg-primary-800 px-4 text-base font-semibold text-white shadow dark:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => window.location.href = '/pruebas/prueba-teorico'}>
                Reintentar
              </Button>
              <Button className="py-2 my-2 rounded-md dark:bg-rose-900 px-4 text-base font-semibold text-white shadow dark:hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => window.location.href = '/test-online'}>
                Finalizar
              </Button>
            </Sheet>
          </Modal>
        </React.Fragment>
      </CssVarsProvider>
    </>
  )
}

// onClick={() => mostrar(('grupo1'))}
function ocultar(id) {
  var elemento = document.getElementById(id);
  elemento.style.display = "none";
}
// function mostrar(id) {
//   var elemento = document.getElementById(id);
//   elemento.style.display = "block";
// }

function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)
  // fetch('/some-api', { method: form.method, body: formData })
  let formJson = Object.fromEntries(formData.entries())
  datosPrueba(formJson)
}


function datosPrueba(frm) {
  let contar = 0;
  let tam = 30;
  const ops = [
    'OP3', 'OP4', 'OP1', 'OP1', 'OP1', 'OP2', 'OP1', 'OP1', 'OP2', 'OP1',
    'OP4', 'OP2', 'OP1', 'OP3', 'OP2',
    'OP1', 'OP2', 'OP2', 'OP2', 'OP3',
    'OP1', 'OP1', 'OP1', 'OP2', 'OP1',
    'OP1', 'OP3', 'OP4', 'OP4', 'OP1'
  ];

  for (let i = 0; i < tam; i++) {
    const names2 = `preg${i + 1}`
    if (frm[names2] == undefined) {
      a.push("Pregunta sin respuesta");
    } else {
      a.push(frm[names2]);
    }
  }

  // const db = getDatabase();
  // const starCountRef = ref(db, 'testonline/');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   const largo = data.length;
  //   if (typeof window !== 'undefined')
  //     localStorage.setItem("sigId", largo);
  // });

  const userLogin = localStorage.getItem('initUser')
  const nameLogin = localStorage.getItem('initName')
  const nextId = localStorage.getItem('sigId')

  if (userLogin === null) {
    // return window.location.href = '/test-online';
  }


  for (let i = 0; i < ops.length; i++) {
    o.push(test1Data[i][ops[i]]);
    p.push(test1Data[i].PREG);
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] != undefined) {
      if (a[i] == o[i]) {
        contar++
        msjOpCorrect = '\n' + o[i];
        msj += '\n' + (i + 1) + ') ✓ Respuesta correcta\n' + p[i] + msjOpCorrect + '.\n'
      } else {
        msjOpCorrect = '\n' + o[i];
        msj += '\n' + (i + 1) + ') ✘ Respuesta incorrecta\n' + p[i] + msjOpCorrect + '.\n'
      }
    }
  }


  if (!opnes) {
    if (contar > 24) {
      // addTest(nextId, a, userLogin, nameLogin, "APRUEBA");
      swal({
        title: "¡Aprobado!",
        text: "Tu puntaje es: " + contar + "/30",
        icon: "success",
        dangerMode: false,
        timer: 3000,
      })
    } else {
      // addTest(nextId, a, userLogin, nameLogin, "REPRUEBA");
      swal({
        title: "¡Reprobado!",
        text: "Tu puntaje es: " + contar + "/30",
        icon: "warning",
        dangerMode: false,
        timer: 3000,
      })
    }
  } else {
    swal("¡Advertencia!", 'Para continuar es necesario responder todas las preguntas.', "error");
  }
}

// function addTest(sigId, resp, userLogin, nameLogin, strnota) { // S67
//   const db = getDatabase();
//   set(ref(db, 'testonline/' + sigId), {
//     id: sigId,
//     iduser: userLogin,
//     name: nameLogin,
//     nrotest: '1',
//     responde: resp,
//     resultado: strnota
//   });
// }


const handleAtras = () => {
  //  return window.location.href = '/pruebas/prueba-teorico';
}