"use client"

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/lib/use-outside-click";
import { ListImagesSupabase } from '@/api/ImagenService.jsx'
import { Modal } from "../../lib/animated-modal";
import Modals from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import TitleHeader from "@/components/TitleHeader";
import ImageComponent from "@/components/ImageComponent";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import ButtonSection from "@/components/ButtonSection";

const IMG = {
	width: 80,
	height: 80
}

const SectionLicenciaConducir = () => {
	const features = [
		{
			title: "Nuestros Alumnos",
			className: "col-span-1 lg:col-span-2 lg:w-[640px] ",
			skeleton: <ModalCardAlumnos />,
		}, {
			title: "Obten tu licencia",
			className: "col-span-1 lg:col-span-2 w-[350px] lg:w-[400px] mt-10 mx-auto justify-center items-center",
			skeleton: <CardLicencia />,
		},
	];

	return (
		<section className="pt-20 pb-14 lg:pt-[80px] lg:pb-[30px] dark:bg-transparent bg-gray-200">
			<div className="container mx-auto">
				<TitleHeader
					title="Últimos Graduados"
					subtitle="Ellos lograron su objetivo: obtener la libreta."
					uri="galeria-media" />

				<div className="relative h-full" >
					<div className="grid grid-cols-1 lg:grid-cols-4 -mt-6 rounded-md">
						{features.map((feature) => (
							<FeatureCard key={feature.title} className={feature.className}>
								<div className="min-h-full min-w-full">{feature.skeleton}</div>
							</FeatureCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionLicenciaConducir;


const FeatureCard = ({ children, className }) => {
	return (
		<div className={cn(`p-2 sm:p-10 relative overflow-hidden`, className)}>
			{children}
		</div>
	);
};


export const CardLicencia = () => {
	const [showCard] = useState("novedades");
	return (
		<Modal>
			<ScrollAnimation
				description={
					<div className="flex flex-wrap -mx-6" aria-label="Más información sobre cómo obtener tu licencia de conducir">
						<PortfolioCard
							ImageHref="/static/images/card/servicio_18hd.webp"
							category=""
							title="¿Querés aprender a manejar de verdad?"
							button="Obtén tu licencia"
							buttonHref="/licencia-de-conducir"
							showCard={showCard} />
					</div>
				}
				duration={1}
				delay={0.5}
				rootMargin="0px 0px -10px 0px"
				effect={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
				transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
			/>
		</Modal>
	);
};


const PortfolioCard = ({ showCard, category, ImageHref, title, button, buttonHref }) => {
	return (
		<>
			<div className={`w-full h-full justify-center px-4 ${showCard === "novedades" || showCard === category.toLowerCase() ? "block" : "hidden"}`}>
				<div className="mb-1">
					<div className="overflow-hidden rounded-[10px]">
						<ImageComponent
							iSrc={ImageHref}
							iAlt="portfolio"
							iWidth={IMG.width}
							iHeight={IMG.height}
							iClassName="aspect-square object-cover object-center blur-none group-hover/img:blur-sm transition-all duration-200 rounded-xl" />
					</div>
					<div className="relative mx-7 -mt-20 rounded-[10px] bg-white dark:bg-[#1F2A37] py-[20px] px-3 text-center shadow-portfolio dark:shadow-box-[#111928]">
						<span className="text-primary mb-2 block text-sm font-medium">
							{category}
						</span>
						<h4 className="text-[#111928] dark:text-white mb-3 text-xl font-medium tracking-tight leading-tight">{title}</h4>
						<ButtonSection namebtn={button} uri={buttonHref} />
					</div>
				</div>
			</div>
		</>
	);
};


const ModalCardAlumnos = () => {
	const [active, setActive] = useState(null);
	const [open, setOpen] = useState(false);
	const [imgSrc, setImgSrc] = useState('');
	const ref = useRef(null);

	const auxList = ListImagesSupabase({ imgFirst: 0, imgLimit: 170 });
	const aux = auxList.slice(0, 6);

	let imagesFirst = [{ src: aux[0] }, { src: aux[1] }, { src: aux[2] }];
	let imagesSecond = [{ src: aux[3] }, { src: aux[4] }, { src: aux[5] }];

	const imageVariants = {
		whileHover: { scale: 1.2, rotate: 0, zIndex: 100, },
		whileTap: { scale: 1, rotate: 0, zIndex: 100, },
		whileFocus: { scale: 1, rotate: 0, zIndex: 100, },
	};

	useEffect(() => {
		function onKeyDown(event) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}
		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	const handleOpen = (src) => {
		setImgSrc(src);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div>
				<Modals id="myModal" open={open} onClose={handleClose} className="flex justify-center self-center px-2">
					<Sheet className="w-fit h-fit rounded-xl flex " >
						<ModalClose className="close right-3 z-100" aria-label="Close" color="none"
							sx={{ backgroundColor: "rgba(0, 0, 0, 0.70)", color: "#ffff", }}>&times;</ModalClose>
						<ImageComponent iSrc={imgSrc.src} iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos Academia de manejo" id="myImg" loading="lazy" iClassName="w-full max-h-[640px] object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-900 select-none dark:rounded-lg dark:border dark:border-zinc-600/90 justify-center" />
					</Sheet>
				</Modals>
			</div>

			<div className="relative flex flex-col p-2 gap-10 w-full overflow-hidden cursor-pointer mx-auto items-center justify-center">
				<ScrollAnimation
					description={
						<div className="flex flex-row">
							{imagesFirst.map((img, idx) => (
								<motion.div
									key={"images-first" + idx}
									style={{ rotate: Math.random() * 20 - 10, }}
									whileHover="whileHover"
									whileTap="whileTap"
									// onClick={() => setActive(img)}
									onClick={() => handleOpen(img)}
									variants={imageVariants}
									className="rounded-xl mt-7 p-0.5 bg-white dark:bg-blue-600/40 dark:border-blue-500/40 border border-neutral-100 flex-shrink-0 overflow-hidden">
									{img.src != undefined &&
										<ImageComponent
											iSrc={img.src}
											iAlt="Alumnos Academia Fortaleza"
											iWidth={IMG.width}
											iHeight={IMG.height}
											iClassName="rounded-lg max-h-[110px] xl:max-w-[160px] xl:max-h-[160px] max-w-[110px] md:h-52 md:w-52 object-cover flex-shrink-0" />}
								</motion.div>
							))}
						</div>
					}
					duration={1}
					delay={0.5}
					rootMargin="0px 0px -10px 0px"
					effect={{ initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }}
					transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
				/>

				<ScrollAnimation
					description={
						<div className="flex flex-row">
							{imagesSecond.map((img, idx) => (
								<motion.div
									key={"images-second" + idx}
									style={{ rotate: Math.random() * 20 - 10, }}
									whileHover="whileHover"
									whileTap="whileTap"
									// onClick={() => setActive(img)}
									onClick={() => handleOpen(img)}
									variants={imageVariants}
									className="rounded-xl mb-6 p-0.5 bg-white dark:bg-blue-600/40 dark:border-blue-500/40 border border-neutral-100 flex-shrink-0 overflow-hidden">
									{img.src != undefined &&
										<ImageComponent
											iSrc={img.src}
											iAlt="Licencia de conducir - Alumnos Graduados"
											iWidth={IMG.width}
											iHeight={IMG.height}
											iClassName="rounded-lg max-h-[110px] xl:max-w-[160px] xl:max-h-[160px] max-w-[110px] md:h-52 md:w-52 object-cover flex-shrink-0" />}
								</motion.div>
							))}
						</div>
					}
					duration={1}
					delay={0.5}
					rootMargin="0px 0px -10px 0px"
					effect={{ initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }}
					transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
				/>
			</div>
		</>
	);
}
export { ModalCardAlumnos };