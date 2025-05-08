import Breadcrumb from '@/components/ui/Breadcrumb';
import { useState } from 'react';
import ImageComponent from '@/components/ImageComponent';
import LayoutSection from '@/components/LayoutSection';
import { ModalCard } from '@/components/ModalCard';
import Modal from '@mui/joy/Modal';
import ButtonTailwind from '@/components/ui/ButtonTailwind';


const cards = [
  {
    src: "/static/images/card/servicio_7.webp",
    title: "Academia habilitada",
    description: "Estamos habilitados por la Intendencia de Montevideo, cumpliendo con todas las normativas y requisitos necesarios para ofrecer cursos de manejo de alta calidad",
    checkText: '',
    href: "/sobre-nosotros",
  }, {
    src: "/static/images/card/servicio_11.webp",
    title: "Auto para examen",
    description: "Utilizarás el mismo vehículo en el que practicas para presentarte al examen práctico, garantizando familiaridad y confianza.",
    checkText: '',
    href: "/coche-escuela",
  }, {
    src: "/static/images/card/servicio_6.webp",
    title: "Flexibilidad horaria",
    description: "Nuestros horarios se adaptan a tu disponibilidad, incluyendo opciones los fines de semana. Disponibles de lunes a sábado de 7 a 21 hs.",
    checkText: "",
    href: "/coche-escuela",
  }, {
    src: "/static/images/card/servicio_16.webp",
    title: "Cursos para todas las edades",
    description: "Adaptados a diferentes niveles de experiencia, garantizando un aprendizaje efectivo en cada etapa de la vida.",
    checkText: "",
    href: "/nuestros-cursos",
  }, {
    src: "/static/images/card/servicio_3.webp",
    title: "Material y test online",
    description: "Accede a contenido teórico digital y realiza exámenes desde cualquier dispositivo, en el momento y lugar que prefieras.",
    checkText: "",
    href: "/test-online",
  }, {
    src: "/static/images/card/servicio_14.webp",
    title: "Apoyo en trámites",
    description: "Nos encargamos de gestionar tus trámites ante la IMM para que el proceso sea más sencillo.",
    checkText: "",
    href: "/licencia-de-conducir",
  }, {
    src: "/static/images/card/servicio_12.webp",
    title: "Instructores calificados",
    description: "Contamos con profesionales altamente capacitados y con amplia experiencia en la enseñanza de conducción.",
    checkText: "",
    href: "/sobre-nosotros",
  }, {
    src: "/static/images/card/servicio_13.webp",
    title: "Flota moderna y segura",
    description: "Nuestros vehículos están equipados con tecnología de seguridad avanzada para garantizar tu bienestar.",
    checkText: "",
    href: "/coche-escuela",
  },
];



export default function ClasesPracticas() {

  const [openPdf, setOpenPdf] = useState(false);
  const [activa, setActiva] = useState(false);
  const handleOpen = () => {
    setActiva(true);
  };
  return (
    <>
      {/* <PageSEO title="Clases Prácticas - Academia Fortaleza" description="Mejora tu técnica de conducción con nuestras clases prácticas, impartidas por instructores certificados." /> */}

      <Breadcrumb
        title="Clases Prácticas"
        subtitle="Practica en condiciones similares al examen real."
        nameUri="Clases Prácticas" />
      <LayoutSection size="auto">

        <div className="overflow-hidden">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto max-w-7xl w-full px-4 text-left">
              <h4 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1]">
                Caracteristicas
              </h4>
              <p className="text-left text-base text-[#637381] dark:text-[#9CA3AF] max-w-[650px]">
                Descubre las ventajas de nuestros cursos.
              </p>
            </div>
          </div>
          <ModalCard card={cards} />
        </div>


        <div className="flex mx-auto justify-center gap-x-2 bg-(--color-section-3) pb-10">
          <div className="text-center pt-6 pb-8 overflow-hidden space-x-3 inline-block" >
            <ButtonTailwind name="Todos los Servicios" uri="/nuestros-servicios" />
          </div>

          <div className="text-center pt-6 pb-8 overflow-hidden space-x-3 inline-block" >
            <ButtonTailwind name="Medios de Pago" uri="/medios-de-pago" />
          </div>
        </div>


      </LayoutSection>
      <Modal open={activa} onClose={() => setActiva(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <iframe src={openPdf} style={{ width: '90%', maxWidth: '85vw', height: '100%', maxHeight: '95vh', border: 'none' }}
          frameBorder="0" title="PDF Viewer" />
      </Modal>
    </>
  )
}
