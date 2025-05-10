'use client'

import TitleHeader from "@/components/ui/TitleHeader";
import { contarImagesSupabase } from '@/api/ImagenService.jsx'
import { useEffect, useState } from "react";
import LayoutSection from "@/components/LayoutSection";
import { Flip } from '@/components/motion/Flip';


const SectionElegirnos = () => {
	const [recibidos, setRecibidos] = useState(0);

	useEffect(() => {
		const fetchDatas = async () => {
			const resp = await contarImagesSupabase() + 204;
			setRecibidos(resp);
		};
		fetchDatas();
	}, []);


	const itemData = [{
		desc: "100%",
		title: 'Calificaciones positivas',
		iconSvg: "M22 11.08V12a10 10 0 11-5.93-9.14 M22 4L12 14.01l-3-3",
		href: import.meta.env.VITE_GOOGLE_REVIEW
	}, {
		desc: `${recibidos}`,
		title: 'Alumnos recibidos',
		iconSvg: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M5 7 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75",
		href: "/galeria-media"
	}, {
		desc: "3",
		title: 'Convenios vigentes',
		iconSvg: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
		href: "/medios-de-pago"
	}, {
		desc: 'IMM',
		title: 'Academia habilitada',
		iconSvg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
		href: "/medios-de-pago"
	},
	]

	return (
		<LayoutSection id="elegirnos" size="half" color="bg-(--color-section-3)" className=" overflow-hidden py-14 px-4">
			<div className="min-w-screen">
				<img src="/static/images/svg/shape-1.svg" alt="Shape" className="absolute opacity-5" />
			</div>
			<TitleHeader
				title="Por qué Elegirnos"
				subtitle="Formando conductores responsables y seguros."
				uri="nuestros-servicios" />

			<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center my-6">
				{itemData.map((card, i) => (
					<div key={i} className="perspective w-full h-full">
						<Flip duration={0.5} delay={i * 0.1} >
							<a href={card.href} aria-label={`Más sobre ${card.title}`}>
								<div className="group rounded-xl bg-[#0d1117]/20 p-6 shadow-testimonial dark:bg-(--color-border-1)">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="text-(--color-blue-2) w-16 h-16 mx-auto"
										viewBox="0 0 25 26">
										<path d={card.iconSvg} />
									</svg>
									<p className="text-3xl font-bold text-white mt-4">{card.desc}</p>
									<p className="text-base font-medium text-gray-200">{card.title}</p>
								</div>
							</a>
						</Flip>
					</div>
				))
				}
			</div>
		</LayoutSection>
	);
};

export default SectionElegirnos;