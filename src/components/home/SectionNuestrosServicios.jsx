'use client'

import serviceData from '@/data/serviceDataIndex'
import TitleHeader from "@/components/TitleHeader";
import { FiChevronRight } from "react-icons/fi";
import ImageComponent from '@/components/ImageComponent';
import { cn } from "@/lib/utils";
import { SlideIn } from "@/components/motion/SlideIn";
import { motion } from "framer-motion";
import ButtonTailwind from '@/components/ui/ButtonTailwind';


const SectionNuestrosServicios = () => {
	return (
		<section className="pt-12 lg:pb-[1px]">
			<div className="max-w-[1200px] justify-center mx-auto relative overflow-hidden bg-transparent dark:bg-transparent pt-[10px] lg:pt-[40px] pb-[40px] lg:pb-[52px]">

				<TitleHeader
					title="Nuestros Servicios"
					subtitle="Descubre todos los servicios que ofrecemos para ayudarte a obtener tu licencia de conducir."
					uri="nuestros-servicios" />

				<div className="flex flex-wrap -my-4 pb-6 mx-auto" >
					{serviceData.map((d) => (
						<div className="w-full lg:px-4 px-8 md:w-1/2 lg:w-1/3" key={d.title}>
							<SlideIn duration={400} delay={100} once={true}>
								<div className="mb-8">
									<div className="mb-2 overflow-hidden rounded-[12px] shadow-[0_6px_8px_rgb(0_0_0/0.2)] ">
										<div href={d.href} className="block cursor-pointer" aria-label="Academia Fortaleza" >
											<motion.div
												initial={{ opacity: 1, scale: 1 }}
												whileTap={{ scale: 1.25, rotate: 6 }}
												whileHover={{ scale: 1.25, rotate: 6 }}
												transition={{ duration: 0.2 }}>
												<ImageComponent iSrc={d.imgSrc} iAlt={d.alt} iWidth={400} iHeight={400} iClassName="h-full w-full rounded-[5px] " />
											</motion.div>
										</div>
									</div>
									<div className="flex flex-row justify-between items-center">
										<a aria-label="Nuestros servicios" href={d.href} className="inline-block text-xl font-bold text-[#111928] hover:text-primary dark:text-white dark:hover:text-blue-300 sm:text-xl lg:text-xl xl:text-xl leading-tight tracking-tight">
											{d.title}
										</a>
										<a href={d.href} aria-label="Mas informacion" className="text-[12px] dark:text-blue-300 dark:hover:text-blue-300 rounded-xl cursor-pointer flex px-1 pt-1 justify-center items-center">Ver más{` `}<FiChevronRight size='14px' />
										</a>
									</div>
									<div className="mx-auto flex flex-col">
										<div className="flex justify-between items-end">
											<DescriptionCard className="max-w-[400px] text-base text-[#637381] dark:text-[#9CA3AF] leading-tight tracking-tight">
												{d.description}
											</DescriptionCard>
										</div>
									</div>
								</div>
							</SlideIn>
						</div>
					))}
					<ButtonTailwind name="Ver todos los servicios" uri="./nuestros-servicios" />
				</div>
			</div>
		</section>
	);
};

export default SectionNuestrosServicios;


export const DescriptionCard = ({ className, children }) => {
	return (
		<p className={cn("text-base text-white max-w-[16rem]", className)}>
			{children}
		</p>
	);
};