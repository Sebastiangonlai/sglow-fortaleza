"use client";

import SectionPricing from '@/components/section/SectionPricing';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionPasos from '@/components/section/SectionPasos';


export default function CursosPersonalizados() {
  return (
    <>
      {/* <PageSEO title="Cursos Personalizados - Academia Fortaleza" description="Clases teóricas y prácticas para principiantes y avanzados. Aprende a conducir con seguridad." /> */}
      <Breadcrumb
        title="Nuestros Cursos"
        subtitle="Cursos personalizados y adaptados a las distintas necesidades."
        nameUri="Cursos" />
      <section className="bg-(--color-section-3)">
        <SectionPricing />

        <SectionPasos />
      </section>
      {/* <video
        muted
        autoPlay
        loop
        className="w-screen h-full max-h-full object-cover pt-12 pb-2"
        poster="/static/videos/videopic.webp">
        <source src="/static/videos/0.mp4" type="video/mp4" />
      </video> */}
    </>
  )
}