import React, { useState } from 'react';
import Button from '@mui/joy/Button'
import swal from 'sweetalert';
import { getDatabase, ref, onValue } from "firebase/database";
import 'firebase/compat/auth';
import '../../../firebase/firebase';
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AltaImagen from '@/components/admin/imagenes/AltaImagen';

const adm = import.meta.env.VITE_ADMIN

export default function MyLoginAdmins() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value.toLowerCase());
  };


  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    localStorage.clear();
    correccion(formJson);
  }

  const correccion = async (event) => {
    let usrname = event.name;

    try {
      let userCredential = await signInWithEmailAndPassword(auth, usrname, event.password);
      if (userCredential.user.photoURL === adm && userCredential.user.email === usrname) {
        swal("¡Acceso correcto!", "Nombre: " + userCredential.user.displayName, "success", {
          timer: 3000
        }).then(() => {
          setIsButtonVisible(true);
          ocultar('grupo1')
        });
      }
    } catch (error) {
      swal("¡Advertencia!", 'Usuario y/o contraseña incorrecta', "error", {
        timer: 2000
      });
    }
  }


  return (
    <>
      <div className="tracking-tight text-gray-900 dark:text-gray-100 lg:flex-row-reverse">
        <br></br>
        {isButtonVisible && (
          <AltaImagen />
        )}
      </div>
      <div className="style-session justify-center">
        <div id="grupo1">
          <div className="container tracking-tight flex-wrap items-center pb-6 pt-3" style={{ maxWidth: 320, maxHeight: 380 }}>
            <h1 className="text-center text-4xl font-bold mt-12">Iniciar Sesión</h1>
            <p className="pb-5 text-center">Acceso exclusivo para funcionarios</p>
            <form method="post" onSubmit={handleSubmit} >
              <div className="sm:col-span-4 mt-1">
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Usuario" value={name} onChange={handleInputChange}
                  className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 border-gray-500 dark:bg-black/50" />
              </div>
              <div className="sm:col-span-4 my-2">
                <input id="password" name="password" type="password" autoComplete="password" placeholder="Contraseña"
                  className="w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600/50 border-gray-500 dark:bg-black/50" />
              </div>

              <Button size="sm" type="submit" sx={{ mb: 4, border: 0.01 }} className="text-base mt-3 flex w-full justify-center rounded-md hover:bg-[#4338ca]/50 bg-[#4338ca]/80 font-normal leading-4 border-blue-600 dark:border-[#4338ca] focus:outline-none focus:ring-2 focus:ring-blue-600/50">
                Inicia sesión
              </Button>
            </form>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

// function mostrar(id) {
//  elemento = document.getElementById(id);
// }

function ocultar(id) {
  const elemento = document.getElementById(id);
  elemento.style.display = "none";
}

export function GetAlumnos(id, nombre) {
  if (typeof window !== 'undefined') {
    localStorage.setItem("initUser", id);
    localStorage.setItem("initName", nombre);
  }
  const db = getDatabase();
  const starCountRef = ref(db, 'testonline/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const largo = data.length;
    if (typeof window !== 'undefined') {
      localStorage.setItem("sigId", largo);
    }
  });
}