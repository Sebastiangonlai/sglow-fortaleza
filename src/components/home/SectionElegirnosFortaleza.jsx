'use client'

import TitleHeader from "@/components/TitleHeader";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { contarImagesSupabase } from '@/api/ImagenService.jsx'
import { useEffect, useState } from "react";


const SectionElegirnosFortaleza = () => {
	const [recibidos, setRecibidos] = useState(0);

	useEffect(() => {
		const fetchDatas = async () => {
			const resp = await contarImagesSupabase() + 204;
			setRecibidos(resp);
		};
		fetchDatas();
	}, []);


	const itemData = [{
		desc: "100%", title: 'Calificaciones positivas',
		iconSvg: "M22 11.08V12a10 10 0 11-5.93-9.14 M22 4L12 14.01l-3-3", estHref: import.meta.env.VITE_GOOGLE_REVIEW
	}, {
		desc: `${recibidos}`, title: 'Alumnos recibidos',
		iconSvg: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M5 7 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75", estHref: "/galeria-media"
	}, {
		desc: "3", title: 'Convenios vigentes',
		iconSvg: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7", estHref: "/medios-de-pago"
	}, {
		desc: 'IMM', title: 'Academia habilitada',
		iconSvg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", estHref: "/medios-de-pago"
	},
	]

	const [ref3, inView3] = useInView({
		threshold: 0.1,
		triggerOnce: true,
		initialInView: true,
		scale: [1, 1.5, 1],
		rootMargin: '100px 100px 30px 100px'
	});


	return (
		<section className="container overflow-hidden bg-[#F9FAFB] dark:bg-[#1F2A37]  lg:rounded-2xl select-none">
			<TitleHeader
				title="Por qué Elegirnos"
				subtitle="Formando conductores responsables y seguros."
				uri="nuestros-servicios" />

			<span className="absolute opacity-15 right-0 -mt-[160px]">
				<svg fill="none" height="556" viewBox="0 0 450 556" width="450" xmlns="http://www.w3.org/2000/svg">
					<linearGradient id="a"><stop offset="0" stopColor="#4a6cf7" stopOpacity="0.31" />
						<stop offset="1" stopColor="#4a6cf7" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-54.5003" x2="222" href="#a" y1="-178" y2="288" />
					<linearGradient id="c"><stop offset=".145833" stopColor="#4a6cf7" stopOpacity="0" /><stop offset="1" stopColor="#4a6cf7" stopOpacity=".08" />
					</linearGradient>
					<radialGradient id="d" cx="0" cy="0" gradientTransform="matrix(0 18 -18 0 17.9997 182)" gradientUnits="userSpaceOnUse" r="1" href="#c" />
					<radialGradient id="e" cx="0" cy="0" gradientTransform="matrix(0 34 -34 0 76.9997 288)" gradientUnits="userSpaceOnUse" r="1" href="#c" />
					<linearGradient id="f" gradientUnits="userSpaceOnUse" x1="226.775" x2="292.157" href="#a" y1="-66.1548" y2="351.421" />
					<linearGradient id="g"><stop offset="0" stopColor="#4a6cf7" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="h" gradientUnits="userSpaceOnUse" x1="184.521" x2="184.521" href="#g" y1="182.159" y2="448.882" />
					<linearGradient id="i" gradientUnits="userSpaceOnUse" x1="356" x2="356" href="#g" y1="110" y2="470" />
					<linearGradient id="j" gradientUnits="userSpaceOnUse" x1="118.524" x2="166.965" href="#a" y1="29.2497" y2="338.63" />
					<circle cx="325.486" cy="302.87" fill="url(#f)" r="90" transform="matrix(.79138147 -.61132264 .61132264 .79138147 -117.248877 262.161255)" /><circle cx="184.521" cy="315.521" opacity=".8" r="132.862" stroke="url(#h)" transform="matrix(-.42062417 .90723498 -.90723498 -.42062417 548.38668 280.832852)" /><circle cx="356" cy="290" opacity=".8" r="179.5" stroke="url(#i)" transform="matrix(.8660254 -.5 .5 .8660254 -97.305044 216.852633)" /><circle cx="191.659" cy="302.659" fill="url(#j)" opacity=".8" r="133.362" transform="matrix(-.68605965 .72754529 -.72754529 -.68605965 543.346638 370.860526)" />
				</svg>
			</span>

			<div className="-mx-4 flex flex-wrap justify-center">
				<div className="select-none py-1 my-1">
					<div className="cursor-pointer py-2 px-1 tracking-tight dark:text-gray-100 text-gray-900">
						<div className="gap-x-1 gap-y-1 text-center items-center grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
							{itemData.map((d) => (
								<motion.div key={d.title}
									ref={ref3}
									initial="hidden"
									animate={inView3 ? "visible" : "hidden"}
									whileInView={{ scale: 0.95 }}
									whileHover={{ scale: 1 }}
									whileTap={{ scale: 1 }}
									transition={{ type: 'keyframes', times: [0, 0.5, 1], duration: 0.5 }}
									variants={{ hidden: { opacity: 1, y: 10, scale: 0.7 }, visible: { opacity: 1, y: 0, scale: 0.95 } }}
									className="select-none flex flex-col">
									<a href={d.estHref} aria-label={d.title}>
										<div className="group mb-1 rounded-xl bg-[#0d1117]/20 px-[50px] pb-[22px] pt-[22px] shadow-testimonial dark:bg-[#111928] dark:shadow-none">
											<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-[#0b76b7] w-20 h-20 inline-block" viewBox="0 0 25 26">
												<path d={d.iconSvg}></path>
											</svg>
											<p className="text-4xl font-bold dark:text-white text-gray-800 pt-2">{d.desc}</p>
											<p className="text-[14px] font-medium text-gray-800 dark:text-gray-300">{d.title}</p>
										</div>
									</a>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionElegirnosFortaleza;