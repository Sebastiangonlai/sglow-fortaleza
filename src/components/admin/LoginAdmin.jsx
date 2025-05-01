"use client"
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/api/supabase';
import AltaImagen from '@/components/admin/imagenes/AltaImagen';
import swal from 'sweetalert';


function MyLoginAdmins() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { session } = useAuth();

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Revisá tu correo para confirmar.');
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      swal("¡Advertencia!", 'Usuario y/o contraseña incorrecta', "error", { timer: 2000 });
    } else {
      swal({
        title: "¡Acceso correcto!\n\n",
        text: "Email: " + email,
        icon: "success",
        dangerMode: false,
        position: "center",
        timer: 4000
      })
    }
  };

  return (
    <div style={{ padding: '12rem' }}>
      {!session ? (
        <>
          <div className="style-session justify-center">
            <div id="grupo1">
              <div className="container tracking-tight flex-wrap items-center pb-6 pt-3" style={{ maxWidth: 320, maxHeight: 380 }}>
                <h1 className="text-center text-4xl font-bold mt-12">Iniciar Sesión</h1>
                <p className="pb-5 text-center">Acceso exclusivo para funcionarios</p>

                <div className="sm:col-span-4 mt-1">
                  <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}
                    className="w-full rounded-md px-4 focus:outline-hidden focus:ring-2 focus:ring-violet-400/50 border-gray-500 dark:bg-black/50" />
                </div>
                <div className="sm:col-span-4 my-2">
                  <input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} value={password}
                    className="w-full rounded-md px-4 focus:outline-hidden focus:ring-2 focus:ring-violet-400/50 border-gray-500 dark:bg-black/50" />
                </div>

                <button onClick={signIn} className="text-base py-1 flex w-full justify-center rounded-md hover:bg-[#4338ca]/80 bg-[#4338ca]/90 font-medium border-blue-400 dark:border-[#4338ca] focus:outline-hidden">
                  Inicia sesión
                </button>
                {/* <button onClick={signUp}>Registrarse</button> */}
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </>
      ) : (
        <>
          <AltaImagen />
        </>
      )}
    </div>
  );
}

export default MyLoginAdmins;
