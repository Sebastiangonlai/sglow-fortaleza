'use client'

import serviceData from '@/data/serviceDataIndex'
import { GlowingStarsDescription } from "@/lib/glowing-stars";
import ButtonSection from "@/components/ButtonSection";
import TitleHeader from "@/components/TitleHeader";
import { FiChevronRight } from "react-icons/fi";
import ImageComponent from '@/components/ImageComponent';
import { ScrollAnimation } from "@/components/ScrollAnimation";


const SectionNuestrosServiciosFortaleza = () => {
	return (
		<section className="pt-16 pb-2 lg:pb-[1px] dark:bg-[#1f2a37]" >
			<div className="max-w-[1200px] justify-center mx-auto relative z-20 overflow-hidden bg-transparent dark:bg-transparent pt-[10px] lg:pt-[40px] pb-[42px] lg:pb-[52px] select-none">

				<TitleHeader
					title="Nuestros Servicios"
					subtitle="Descubre todos los servicios que ofrecemos para ayudarte a obtener tu licencia de conducir."
					uri="nuestros-servicios" />

				<div className="flex flex-wrap -my-4  mx-auto" >
					{serviceData.map((d) => (
						<div className="w-full lg:px-4 px-8 md:w-1/2 lg:w-1/3" key={d.title}>
							<ScrollAnimation
								description={
									<div className="mb-8">
										<div className="mb-2 overflow-hidden rounded-[5px] shadow-[0_8px_16px_rgb(0_0_0/0.2)] bg-black">
											<a href={d.href} className="block" aria-label="Academia Fortaleza" >
												<ImageComponent iSrc={d.imgSrc} iAlt={d.alt} iWidth={400} iHeight={400} iClassName="h-full w-full rounded-[5px] transition hover:rotate-6 hover:scale-125" />
											</a>
										</div>
										<div className="flex flex-row justify-between items-center">
											<a aria-label="Nuestros servicios" href={d.href} className="inline-block text-xl font-bold text-[#111928] hover:text-primary dark:text-white dark:hover:text-blue-300 sm:text-xl lg:text-xl xl:text-xl leading-tight tracking-tight">
												{d.title}
											</a>
											<a href={d.href} aria-label="Mas informacion" className="text-[12px] dark:text-blue-300 dark:hover:text-blue-300 rounded-xl cursor-pointer flex px-1 pt-1 justify-center items-center">
												Ver más{` `}<FiChevronRight size='14px' />
											</a>
										</div>
										<div className="mx-auto flex flex-col">
											<div className="flex justify-between items-end">
												<GlowingStarsDescription className="max-w-[400px] text-base text-[#637381] dark:text-[#9CA3AF] leading-tight tracking-tight">
													{d.description}
												</GlowingStarsDescription>
											</div>
										</div>
									</div>
								}
								duration={0.4}
								delay={0.1}
								rootMargin="0px 0px -10px 0px"
								effect={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
								transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
							/>
						</div>
					))}
				</div>
			</div>

			<ButtonSection
				namebtn="Ver todos los servicios"
				uri="./nuestros-servicios" />
		</section>
	);
};

export default SectionNuestrosServiciosFortaleza;
