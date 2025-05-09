"use client"

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/lib/use-outside-click";
import { listImagesSupabase } from "@/api/ImagenService";
import Modals from '@mui/joy/Modal';
import ModalClose from "@mui/joy/ModalClose";
import ImageComponent from "@/components/ImageComponent";
import TitleHeader from "@/components/ui/TitleHeader";
import Sheet from '@mui/joy/Sheet';
import { SlideIn } from "@/components/motion/SlideIn";
import { BackgroundGradient } from "@/components/ui/cardGradiante/background-gradient.jsx";
import LayoutSection from "@/components/LayoutSection";
import ButtonTailwind from "@/components/ui/ButtonTailwind";


const IMG = {
	width: 180,
	height: 80
};

const SectionLicenciaConducir = () => {
	const features = [
		{
			title: "Nuestros Alumnos",
			className: "min-w-full",
			skeleton: <ModalCardAlumnos />,
		}, {
			title: "Obten tu licencia",
			className: "flex mx-6 my-6 justify-center items-center place-items-center max-w-sm mx-auto",
			skeleton: <CardLicencia />,
		},
	];
	return (
		<LayoutSection id="licencia-de-conducir" className="overflow-hidden lg:px-10 pt-18 pb-14 lg:pt-[70px] lg:pb-[30px]">
			<div className="mx-auto">
				<TitleHeader
					title="Últimos Graduados"
					subtitle="Ellos lograron su objetivo: obtener la libreta."
					uri="galeria-media" />
				<div className="relative h-full" >
					<div className="grid grid-cols-1 lg:grid-cols-2 -mt-6 gap-6 rounded-md">
						{features.map((feature) => (
							<FeatureCard key={feature.title} className={feature.className}>
								<div className="min-h-full min-w-full">{feature.skeleton}</div>
							</FeatureCard>
						))}
					</div>
				</div>
			</div>
		</LayoutSection>
	);
}

export default SectionLicenciaConducir;


const FeatureCard = ({ children, className }) => {
	return (
		<div className={cn(`p-2 sm:p-5 relative`, className)}>
			{children}
		</div>
	);
};


export const CardLicencia = () => {
	return (
		<SlideIn duration={0.5} delay={0.5} direction="up">
			<BackgroundGradient className="flex rounded-[22px] max-w-md p-2 sm:p-2 bg-white dark:bg-[#111827] inset-0 z-50 pb-2" >
				<ImageComponent
					iSrc="/static/images/card/servicio_18hd.webp"
					iAlt="portfolio"
					iWidth={IMG.width}
					iHeight={IMG.height}
					iClassName="w-full h-auto max-h-fit object-cover rounded-2xl transition-all duration-200 blur-none group-hover/img:blur-sm" />

				<div className="absolute bottom-4 left-8 right-8 rounded-[22px] bg-white/90 dark:bg-[rgba(17,24,39,0.85)] backdrop-blur-md px-2 py-3 text-center shadow-portfolio dark:shadow-box-[#111928] ring-1 dark:ring-gray-500/20 z-50">

					<h2 className="text-[#111928] dark:text-white text-base leading-tight pb-2.5 inset-0 z-500 blur-none">
						{"¿Querés aprender a manejar de verdad?"}
					</h2>
					<ButtonTailwind name="Obtén tu licencia" color="bg-(--color-section-3)/80" uri="./licencia-de-conducir" />
				</div>
			</BackgroundGradient>
		</SlideIn>
	);
};

const ModalCardAlumnos = () => {
	const [active, setActive] = useState(null);
	const [open, setOpen] = useState(false);
	const [imgSrc, setImgSrc] = useState('');
	const ref = useRef(null);
	const [recibidos, setRecibidos] = useState([]);

	useEffect(() => {
		const fetchDatas = async () => {
			const resp = await listImagesSupabase({ imgFirst: 0, imgLimit: 1000 });
			setRecibidos(resp);
		};
		fetchDatas();
	}, []);

	const aux = recibidos.slice(0, 6);

	const imageVariants = {
		whileHover: { scale: 1.2, rotate: 0, zIndex: 100, },
		whileTap: { scale: 1, rotate: 0, zIndex: 100, },
		whileFocus: { scale: 1, rotate: 0, zIndex: 100, },
	};

	const direction = [
		{
			animation: "right"
		}, {
			animation: "right"
		}, {
			animation: "right"
		}, {
			animation: "left"
		}, {
			animation: "left"
		}, {
			animation: "left"
		}
	];

	const imgClassName = "rounded-lg max-h-[110px] xl:max-w-[160px] xl:max-h-[160px] max-w-[110px] md:h-52 md:w-52 object-cover shrink-0 z-500"
	const motionClassName = "rounded-xl mt-5 p-0.5 bg-white dark:bg-blue-600/80 dark:border-blue-500/80 border border-neutral-100 shrink-0";

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
					<Sheet className="w-fit h-fit rounded-xl flex" >
						<ModalClose className="close right-3 z-100" aria-label="Close" color="none"
							sx={{ backgroundColor: "rgba(0, 0, 0, 0.70)", color: "#ffff", }}>&times;</ModalClose>
						<ImageComponent iSrc={imgSrc} iWidth={IMG.width} iHeight={IMG.height} iAlt="Alumnos Academia de manejo" id="myImg" loading="lazy" iClassName="w-full max-h-[640px] object-cover rounded-xl focus:touch-pan-x delay-200 border border-zinc-900 dark:rounded-lg dark:border dark:border-zinc-600/90 justify-center" />
					</Sheet>
				</Modals>
			</div>

			<div className="flex flex-col p-2 gap-8 w-full pb-8  mx-auto items-center justify-center">
				<div className="grid grid-cols-3 cursor-pointer">
					{aux.map((img, idx) => (
						<SlideIn key={"images" + idx} duration={0.5} delay={idx * 0.1} direction={direction[idx].animation} >
							<motion.div
								key={"images" + idx}
								style={{ rotate: Math.random() * 20 - 10, }}
								whileHover="whileHover"
								whileTap="whileTap"
								onClick={() => handleOpen(img)}
								variants={imageVariants}
								className={motionClassName}>
								{img != undefined &&
									<ImageComponent
										iSrc={img}
										iAlt="Alumnos Graduados Academia Fortaleza"
										iWidth={IMG.width}
										iHeight={IMG.height}
										iClassName={imgClassName} />}
							</motion.div>
						</SlideIn>
					))}
				</div>
			</div>
		</>
	);
}

export { ModalCardAlumnos };