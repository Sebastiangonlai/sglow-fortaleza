import { useState, useEffect } from 'react';
import { supabase } from '@/api/supabase';
import AltaImagen from '@/components/admin/imagenes/AltaImagen';
import swal from 'sweetalert';
import { X } from "lucide-react";


function MyLoginAdmins() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

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

  const signOut = async () => {
    await supabase.auth.signOut();
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
                    className="w-full rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-violet-400/50 border-gray-500 dark:bg-black/50" />
                </div>
                <div className="sm:col-span-4 my-2">
                  <input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} value={password}
                    className="w-full rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-violet-400/50 border-gray-500 dark:bg-black/50" />
                </div>

                <button onClick={signIn} className="text-base py-1 flex w-full justify-center rounded-md hover:bg-[#4338ca]/80 bg-[#4338ca]/90 font-medium border-blue-400 dark:border-[#4338ca] focus:outline-none">
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
          {/* <h2>Sesión iniciada como {session.user.email}</h2> */}
          <button onClick={signOut} className="text-base p-1 right-5 top-20 fixed flex-col rounded-full ring-1 ring-red-400 "> <X size={18} color='red' /></button>
        </>
      )}
    </div>
  );
}

export default MyLoginAdmins;
