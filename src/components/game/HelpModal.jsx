
import ImageComponent from '../ImageComponent';

export function HelpModal({ onClose }) {
  return (


    <div className="absolute inset-0 flex items-center justify-center bg-[#111928] bg-opacity-50 z-10">
      {/* <div className="bg-[#111928] p-4 rounded-lg max-w-sm w-full text-center"> */}
      <div className="bg-[#111928] p-4 rounded-lg max-w-sm w-full text-center relative">
        <button className="absolute top-2 right-2 scale-90 flex"
          onClick={onClose}>✖️</button>
        <h2 className="text-xl font-bold mb-3">Cómo Jugar</h2>
        <div class="flex grid-cols-2 justify-center items-center">
          <p className="mb-4 text-sm font-medium tracking-tight leading-tight text-left">Usa las flechas del teclado o desliza en la pantalla para mover el coche.</p>
          <ImageComponent iSrc="/static/images/game/tactil.png" iAlt="Juego Academia Fortaleza" loading="lazy"
            iWidth={100} iHeight={100} iClassName="mx-auto w-12 mb-3]" />
        </div>
        {/* <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors text-base" onClick={onClose}>
          Cerrar
        </button> */}
      </div>
    </div>
  )
}

