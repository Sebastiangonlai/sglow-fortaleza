import ImageComponent from "@/components/ImageComponent";
import Breadcrumb from '@/components/ui/Breadcrumb';
import LayoutSection from '@/components/LayoutSection';
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

      <LayoutSection size="half" className="items-center space-y-4 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:px-60 lg:space-y-0 pt-[40px] pb-10" >


        <div className="flex flex-col items-center pt-4">
          <ImageComponent
            iSrc={'/logoHd.webp'}
            iAlt={ERROR.DISPONIBLE}
            iWidth={IMGlogo.width}
            iHeight={IMGlogo.height}
            iClassName="max-w-60 rounded-full"
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
        <div className="prose max-w-none pt-4 pb-8 dark:prose-[#111928] xl:col-span-2 px-6">
          <h3 className="text-2xl/10 font-semibold">Nuestra Misión</h3>
          <p className="text-base leading-tight ">Academia Fortaleza crece día a día con el objetivo de formar nuevos conductores responsables y seguros. Nos comprometemos a educar a quienes realizan el curso, para que puedan ser usuarios responsables en el tránsito, respetando las normas vigentes en la región.
          </p>
          <h3 className="pt-6 text-2xl/10 font-semibold">Nuestra Visión </h3>
          <p className="text-base leading-tight">Academia Fortaleza se compromete a brindar un servicio profesional, cuidando todos los detalles, para que cada persona que obtenga su licencia de conducir inicie una nueva etapa feliz, responsable y satisfecha con el trato recibido de nuestra parte.
          </p>
        </div>
      </LayoutSection>
      <SectionTeam />
    </>
  )
}

export default SobreNosotrosIndex;