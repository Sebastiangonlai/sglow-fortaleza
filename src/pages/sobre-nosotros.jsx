import React from 'react';
import ImageComponent from "@/components/ImageComponent";
import Breadcrumb from '@/components/Breadcrumb';
import SectionTeam from '@/components/section/SectionTeam';
// import { SocialIcon } from '@/components/social-icons'


const IMGlogo = {
  width: 200,
  height: 170
}

const ERROR = {
  DISPONIBLE: 'Lo siento, este contenido no está disponible',
  ELIMINADO: 'Lo siento, se ha eliminado el contenido',
  DENEGADO: 'Acceso denegado',
  PROGRAMADO: 'Mantenimiento programado',
}

const SobreNosotrosIndex = () => {

  return (
    <>
      <Breadcrumb
        title="Sobre Nosotros"
        subtitle="Conoce más sobre nosotros."
        nameUri="Sobre Nosotros"
        href="home" />

      <div className="container items-center w-[90%] space-y-4 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:space-y-0 pt-[60px] pb-20" >
        <div className="flex flex-col items-center pt-4">
          <ImageComponent
            iSrc={'/static/favicons/favicon.svg'}
            iAlt={ERROR.DISPONIBLE}
            iWidth={IMGlogo.width}
            iHeight={IMGlogo.height}
            iClassName="h-98 w-46 rounded-full"
            iLayout="intrinsic" />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-4 tracking-tight text-gray-900 dark:text-gray-100">
            {'Academia Fortaleza'}
          </h3>
          <div className="text-center text-gray-500 dark:text-gray-400">
            {'Formando Conductores'}
          </div>
          <div className="text-gray-500 dark:text-gray-400">{'Responsables'}</div>
          <div className="flex space-x-3 pt-6">
            {/* <SocialIcon kind="email" href={`mailto:${'info@academiafortaleza.com.uy'}`} />
            <SocialIcon kind="instagram" href={import.meta.env.VITE_INSTAGRAM} />
            <SocialIcon kind="facebook" aria-label="Facebook" href={import.meta.env.VITE_FACEBOOK} />
            <SocialIcon kind="whatsapp" href={import.meta.env.VITE_API_WHATSAPP} /> */}
          </div>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-[#111928] xl:col-span-2">
          <h3 className="text-2xl leading-tight">Nuestra Misión</h3>
          <p className="text-base leading-tight">Academia Fortaleza crece día a día con el objetivo de formar nuevos conductores
            responsables y seguros. Nos comprometemos a educar a quienes realizan el curso,
            para que puedan ser usuarios responsables en el tránsito, respetando las normas
            vigentes en la región.
          </p>
          <h3 className="text-2xl leading-tight">Nuestra Visión </h3>
          <p className="text-base leading-tight">Academia Fortaleza se compromete a brindar un servicio profesional, cuidando todos
            los detalles, para que cada persona que obtenga su licencia de conducir inicie una
            nueva etapa feliz, responsable y satisfecha con el trato recibido de nuestra
            parte.
          </p>
        </div>
      </div>
      <SectionTeam />
    </>
  )
}

export default SobreNosotrosIndex;