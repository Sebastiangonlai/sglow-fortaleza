import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useId, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/lib/use-outside-click";
import { GetUltimasImagenes } from "@/components/admin/imagenes/ImagenService";
import { Modal } from "../../lib/animated-modal";
import Modals from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { twMerge } from "tailwind-merge";
import TitleHeader from "@/components/TitleHeader";
import ImageComponent from "@/components/ImageComponent";
import { ScrollAnimation } from "@/components/ScrollAnimation";


const IMG = {
	width: 640,
	height: 480
}

const Block = ({ className, ...rest }) => {
	return (
		<motion.div
			variants={{
				initial: { scale: 0.5, y: 50, opacity: 0, },
				animate: { scale: 1, y: 0, opacity: 1, },
			}}
			transition={{ type: "spring", mass: 5, stiffness: 400, damping: 80, }}
			className={twMerge(
				"rounded-full bg-transparent p-2 w-fit mx-auto items-center justify-center align-center",
				className,
			)}
			{...rest}
		/>
	);
};


const SectionLicenciaConducir = () => {
	const features = [
		{
			title: "Nuestros Alumnos",
			description: "Cientos de licencias obtenidas",
			className: "col-span-1 lg:col-span-2 lg:w-[640px] ",
			skeleton: <ExpandableModalCard />,
		}, {
			title: "",
			description: "",
			className: "col-span-1 lg:col-span-2 w-[350px] lg:w-[400px] mt-10 mx-auto justify-center items-center",
			skeleton: <SkeletonThree />,
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
								<div className="min-h-full min-w-full ">{feature.skeleton}</div>
							</FeatureCard>
						))}
					</div>
				</div>
			</div>
			{/* <FeatureTitle>{feature.title}</FeatureTitle> */}
			{/* <Link href="">{feature.description}</Link> */}
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


export const SkeletonThree = () => {
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
				transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
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
						<a href={buttonHref} aria-label="Más información sobre cómo obtener tu licencia de conducir">
							<Block className="col-span-1 dark:bg-[#1f2937]bg-transparent md:col-span-1" whileHover={{ rotate: '-2.5deg', scale: 1.1 }}>
								<div className={`relative flex items-center z-10 cursor-pointer rounded-2xl text-sm text-normal bg-transparent hover:bg-[#4f46e5]/20 py-2 px-3 ring-1 ring-white/10`}>
									{button}
									<svg fill="none" height="20" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
									</svg>
								</div>
							</Block>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};


const ExpandableModalCard = () => {
	const [active, setActive] = useState(null);
	const [open, setOpen] = useState(false);
	const [imgSrc, setImgSrc] = useState('');
	const id = useId();
	const ref = useRef(null);
	let aux = GetUltimasImagenes(6);
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
				<Modals id="myModal" open={open} onClose={handleClose} className="flex flex-wrap justify-center self-center px-2">
					<Sheet className="w-fit h-fit rounded-xl flex" >
						<ModalClose className="close right-2 dark:bg-[#111928]/70 dark:hover:bg-[#111928]/70" variant='solid' color='neutral'>&times;</ModalClose>
						<ImageComponent iSrc={imgSrc.src} iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos Academia de manejo" id="myImg" loading="lazy" iClassName="w-full h-full object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-500 select-none dark:rounded-lg dark:border justify-center" />
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

export { ExpandableModalCard };