import Breadcrumb from "@/components/Breadcrumb";
import ContactBlock from '@/components/section/SectionContactBlock';


export default function Contacto() {
  return (
    <>
      {/* <PageSEO title="Contacto - Academia Fortaleza" description="WhatsApp: 099 391 844 · Email: info@academiafortaleza.com.uy · Horarios: lunes a sábado de 7 a 21 hs · Comunícate con nosotros para más información." /> */}
      <Breadcrumb
        title="Comunícate con nosotros"
        subtitle="Envíanos tus comentarios, dudas o sugerencias."
        nameUri="Contacto"
        uri="contacto" />
      <section className='pt-10'>
        <ContactBlock />
      </section>
    </>
  )
}
