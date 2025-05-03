import  { useState, useRef, useEffect } from "react";
import { BsChatText } from "react-icons/bs";


const Pruebas = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const chatContainerRef = useRef(null); // Referencia para el contenedor de mensajes

  const [messages, setMessages] = useState([
    {
      text: ["¡Hola! Bienvenido/a a Academia Fortaleza 👋",
        "Gracias por visitarnos 🚘",
        "¿En qué te podemos ayudar?",
        "1️⃣ Información sobre cursos",
        "2️⃣ Horarios de atención",
        "3️⃣ Requisitos para inscribirte",
        "4️⃣ Promociones disponibles",
        "5️⃣ Contacto y consultas",
        "6️⃣ Otra pregunta"],
      sender: "F",
      uri: "#",
    },
  ]);
  const arrRespuesta = {
    texto: [
      "Ofrecemos cursos teóricos y prácticos para principiantes y avanzados, además de clases de perfeccionamiento.",
      "Nuestro horario de atención es de lunes a sbado, de 7:00 a 21:00 hrs.",
      "Requisitos licencia de conducir: documento de identidad vigente, pago del trámite y certificado médico",
      "Descuentos en cursos, clases de perfeccionamiento y promociones especiales",
      "Puedes comunicarte con nosotros al 099 391 844 o enviarnos un mensaje directo por WhatsApp.",
      "Si tienes alguna otra consulta o necesitas información sobre algún tema no mencionado aquí, ¡no dudes en preguntar! ",
    ],
    uri: ["cursos-personalizados", "/contacto", "licencia-de-conducir", "medios-de-pago", `${import.meta.env.VITE_API_WHATSAPP}`, "#"],
  };


  // Desplazamiento automático hacia el final cuando se actualizan los mensajes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessages = [...messages, { text: [inputText], sender: "U", uri: "Resp Usuario" }];
      setMessages(newMessages);
      setInputText("");

      if ("0" < inputText && inputText <= "6" && inputText.length === 1) {
        setTimeout(() => {
          const autoResponse = {
            text: [arrRespuesta.texto[inputText - 1]],
            sender: "F",
            uri: [arrRespuesta.uri[inputText - 1]],
          };
          setMessages([...newMessages, autoResponse]);
        }, 1000);

      } else {
        setTimeout(() => {
          const autoResponse = {
            text: ["Por favor, selecciona una opción válida de la lista:",
              "1️⃣ Información sobre cursos",
              "2️⃣ Horarios de atención",
              "3️⃣ Requisitos para inscribirte",
              "4️⃣ Promociones disponibles",
              "5️⃣ Contacto y consultas",
              "6️⃣ Otra pregunta"],
            sender: "F",
            uri: "#",
          };
          setMessages([...newMessages, autoResponse]);
        }, 1000);
      }
    }
  };


  return (
    <div className="relative z-[100] ">
      {isChatOpen && (
        <div className="fixed bottom-[7.9rem] right-[1.1rem] w-[330px] h-[430px] max-w-full flex dark:rounded-lg flex-col bg-gray-300 dark:ring-1 dark:ring-blue-400/50 z-[1000]">
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto bg-slate-200 p-0.5 text-sm leading-2 text-slate-900 dark:bg-slate-900 dark:rounded-t-lg dark:text-slate-300 sm:text-sm sm:leading-4">
            {messages.map((message, index) => (
              <>
                {message.sender === "U" && (
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-[#354ea1]/80 rounded-md">
                      {/* {message.text} */}
                      {message.text.map((texto, index) => (
                        <>
                          <p>{texto}</p>
                        </>
                      ))}
                    </div>
                    <div className="chat-footer opacity-50 text-[10px]">Invitado</div>
                  </div>
                )}

                {message.sender === "F" && (
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-[#1f2a37] leading-tight tracking-wides rounded-md">
                      {message.text.map((texto, index) => (
                        <>
                          {texto[0] === "1" ?
                            <>
                              <div className="pt-1.5">
                                <p>{texto}</p>
                              </div>
                            </>
                            : <p>{texto}</p>
                          }
                        </>
                      ))}

                      {message.uri[0] !== '#' &&
                        <div className="pt-1.5">
                          <a href={message.uri} className="flex relative text-[14px] text-slate-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300">
                            Más información ➞
                          </a>
                        </div>
                      }
                    </div>
                    <div className="chat-footer opacity-50 text-[10px] whitespace-nowrap">Asistente virtual</div>
                  </div>
                )}
              </>
            ))}
          </div>


          {/* Input Ingrese su mensaje*/}
          <form className="mt-0.5 p-2 bg-slate-200 dark:bg-slate-900 rounded-b-lg" onSubmit={handleSend}>
            <label htmlFor="chat-input" className="sr-only">
              Ingrese su mensaje
            </label>
            <div className="relative">
              <input
                id="chat-input"
                className="block w-full resize-none dark:border-none bg-slate-200 p-0.5 pl-2 pr-2 text-sm text-slate-900 dark:bg-slate-900 dark:text-slate-200 sm:text-base dark:focus:outline-hidden border-none focus:ring-0  dark:placeholder-slate-400 "
                placeholder="Ingrese su mensaje"
                rows="1"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required>
              </input>
              <button type="submit" className="absolute inset-y-0 right-3 flex items-center pl-1 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-500 gap-1">
                <span className="sr-only">Enviar un mensaje</span>
                Enviar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" id="Send-2--Streamline-Tabler" height="15" width="15">
                  <path d="M2.9362500000000002 2.5212499999999998 13.125 7.5 2.9362500000000002 12.478750000000002a0.314375 0.314375 0 0 1 -0.34125000000000005 -0.0775 0.34687500000000004 0.34687500000000004 0 0 1 -0.075 -0.355L4.0625 7.5 2.52 2.95375a0.34687500000000004 0.34687500000000004 0 0 1 0.075 -0.355 0.314375 0.314375 0 0 1 0.34125000000000005 -0.0775z" strokeWidth="1" >
                  </path>
                  <path d="M4.0625 7.5H13.125" strokeWidth="1"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <button onClick={() => setIsChatOpen(!isChatOpen)}
        className="text-base text-primary-800 hover:text-primary-600">
        <BsChatText className="h-[24px] w-[22px] -mt-1 -mx-0.5 text-neutral-500 dark:text-neutral-100" />
      </button>
    </div>
  );
};

export default Pruebas;