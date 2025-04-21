import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';
import { getDatabase,ref} from "../../../firebase/database";


const options = [];
let datosTabla = [];
let objiduser = [];
let objid = [];

let realizado = 0;
let aprobado = 0;
let reprobado = 0;
let promedio = 0;

const InfoAlumno = ({ imgSrc }) => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [refGid, inViewGid] = useInView({
    threshold: 0,
    triggerOnce: true,
    initialInView: true,
    scale: [1, 1.5, 1],
    rootMargin: '100px 100px 30px 100px'
  });

  useEffect(() => {
    initAlumnos();
  }, []);


  return (
    <>
      <section className="text-gray-300 body-font text-center space-y-2 justify-center">
        <h2 className="text-xl text-primary-400 font-medium leading-tight py-1">Alumnos</h2>
        <Stack className="mx-auto justify-center" direction={{ xs: 'column', sm: 'row' }}   >
          <div>
            <FormControl id="controllable-states-demo" className='mx-auto'>
              <Autocomplete
                placeholder="Seleccione un alumno..."
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}

                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                options={listarUsuarios}
                sx={{ width: 300, mx: 'auto' }}
              />
            </FormControl>
            <br></br>

            <Typography level="body-sm">
              <code>Usuario: </code>
              <Typography color="warning" sx={{ py: 0 }}>
                <code>
                  {/* <strong>{`${value !== null ? `${value.label}` : ''}`}</strong> */}
                  <strong>{`${inputValue}`}</strong>
                </code>
              </Typography>
            </Typography>

            <Typography level="body-sm">
              <code>Nombre: </code>
              <Typography color="warning">
                <code>
                  {/* <strong>{`${value !== null ? `${value.label2}` : ''}`}</strong> */}
                </code>
              </Typography>
            </Typography>

            <Typography level="body-sm">
              <code>Realizado: </code>
              <Typography color="warning" sx={{ py: 0 }}>
                <code>
                  {/* <strong>{`${value !== null ? estadisticas(value.label2) : ''}`}</strong> */}
                </code>
              </Typography>
            </Typography>

            <Typography level="body-sm">
              <code>Aprobado: </code>
              <Typography color="warning" sx={{ py: 0 }}>
                <code>
                  <strong>{`${value !== null ? aprobado : 'aprobado'}`}</strong>
                </code>
              </Typography>
            </Typography>

            <Typography level="body-sm">
              <code>Reprobado: </code>
              <Typography color="warning" sx={{ py: 0 }}>
                <code>
                  <strong>{`${value !== null ? reprobado : 'reprobado'}`}</strong>
                </code>
              </Typography>
            </Typography>

            <Typography level="body-sm">
              <Typography color="warning" sx={{ py: 0 }}>
                <code>
                  {/* <strong>{`${value !== null ? `${value.label}` : ''}`}</strong> */}
                  {/* <strong>{`${inputValue}`}</strong> */}
                </code>
              </Typography>
            </Typography>
          </div>
        </Stack>
      </section>

      <br></br>
      <br></br>

      <section className="text-gray-400 body-font">
        <div className="lg:w-2/2 md:w-1/1 h-full px-4">

        </div>
      </section>
    </>
  )
}
const listarUsuarios = [
  // { label: '', idusuario: '' },
]
// const listaRespuestas = [
//   // { label: 's' },
// ];

const initAlumnos = () => {
  const db = getDatabase();
  const starCountRefss = ref(db, 'calificaciones/');
  onValue(starCountRefss, (snapshots) => {
    const listUser = snapshots.val();
    if (listUser) {
      if (datosTabla.length === 0) {
        Object.values(listUser).forEach(elemuser => {
          datosTabla.push(elemuser);
          listarUsuarios.push({ label: elemuser.name, label2: elemuser.id });
        });
      }
    }
  });

}

export function estadisticas(idUser) { // S67
  reprobado = 0;
  aprobado = 0;
  promedio = 0;
  realizado = 0;
  const db = getDatabase();
  const starCountRef = ref(db, 'testonline/');
  onValue(starCountRef, (snapshot) => {
    const listAs = snapshot.val();
    listAs.forEach(e => {
      if (e.iduser === idUser) {
        realizado = realizado + 1;
        if (e.resultado === 'APRUEBA') {
          aprobado = aprobado + 1;
        }
      }
    });
  });
  if (realizado) {
    promedio = (aprobado / realizado) * 100;
    promedio = promedio.toFixed(0);
  } else {
    // promedio = 0;
  }
  reprobado = realizado - aprobado;
  return realizado;
}
export default InfoAlumno
