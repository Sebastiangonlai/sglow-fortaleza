"use client";
import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import { Modal, ModalBody, ModalContent, ModalTrigger, ModalFooter } from "@/lib/animated-modal";


const ExpandableCard = () => {
	const [showCard, setShowCard] = useState("Novedades");
	const handleProject = (category) => {
		setShowCard(category);
	};

	return (
		<>
			<section className="dark:bg-[#111928]">
				<div className="container">
					<div className="flex flex-wrap ">
						{cards.map((d) => (
							<>
								<PortfolioCard
									imageSrc={d.src}
									category={d.category}
									title={d.title}
									description={d.content()}
									checkText={""}
									buttonHref={d.cardLink}
									className="block md:hidden text-ellipsis"
									showCard={showCard} />
							</>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ExpandableCard;


const PortfolioCard = ({ imageSrc, category, title, description, checkText, buttonHref, showCard }) => {
	return (
		<>
			<Modal className='lg:w-[100px]'>
				<div className={`mx-auto w-1/1 md:w-1/2 xl:w-1/4 ${showCard === "Novedades" || showCard === category ? "block" : "hidden"}`}>
					<ModalTrigger className="relative mb-4">
						<div className="w-full" key={title}>
							<div className="mb-2">
								<div className="mb-2 overflow-hidden rounded-[5px] shadow-[0_8px_16px_rgb(0_0_0/0.2)] bg-black">
									<a aria-label="servicios" className="block">
										<ImageComponent iSrc={imageSrc} iAlt="image" iClassName="h-full w-full rounded-[5px] transition group-hover:rotate-6deg group-hover:scale-125" iWidth={500} iHeight={500} />
									</a>
								</div>
								<a aria-label="nuestros servicios" className="mb-0.5 inline-block text-base font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-indigo-400 sm:text-2xl lg:text-base xl:text-base leading-tight tracking-tight">
									{title}
								</a>
							</div>
						</div>
					</ModalTrigger>
				</div>

				<ModalBody>
					<ModalContent>
						<>
							<h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-1 mt-4 lg:mb-6 lg:mt-2">
								<span className="px-2 py-1.5 rounded-md bg-gray-100 dark:bg-neutral-500/30 dark:border-neutral-700 border border-gray-200">
									{title}
								</span>
							</h4>
						</>
						<div className="mt-4 sm:mt-10 lg:mt-2">
							<div className="space-y-3 sm:space-y-3">
								<div className="space-y-2 md:space-y-3">
									<p className="text-gray-500 font-base dark:text-neutral-200 px-1 leading-tight">
										{description}
									</p>
								</div>
								<ul className="space-y-1 sm:space-y-1 px-1">
									{checkText !== "" && (
										checkText.map((itemText, index) => (
											<>
												<li key={index} className="flex gap-x-3">
													<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-500 dark:bg-blue-600/40 dark:text-blue-300">
														<svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
															<polyline points="20 6 9 17 4 12" />
														</svg>
													</span>
													<div className="grow">
														<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-300">
															<span className="font-normal">
																{itemText}
															</span>
														</span>
													</div>
												</li>
											</>
										))
									)}
								</ul>
							</div>
						</div>
					</ModalContent>
					<ModalFooter className="gap-4">
						<a href={buttonHref} className="px-3 py-1.5 bg-gray-200 text-black dark:bg-black/80 dark:border-black dark:hover:bg-black dark:text-white border border-gray-300 rounded-md text-sm font-medium w-38" aria-label="mas informacion">
							Más información
						</a>
					</ModalFooter>
				</ModalBody>
			</Modal>
		</>
	);
};


const cards = [
	{
		description: "Academia habilitada",
		title: "Academia habilitada",
		src: "/static/images/card/servicio_7.webp",
		textBtn: "",
		cardLink: "#",
		content: () => {
			return (
				<p>Estamos habilitados por la Intendencia de Montevideo, cumpliendo con todas las normativas y requisitos necesarios para ofrecer cursos de manejo de alta calidad.</p>
			);
		},
	}, {
		description: "Auto para examen",
		title: "Auto para examen",
		src: "/static/images/card/servicio_11.webp",
		textBtn: "Ver más",
		cardLink: "/coche-escuela",
		content: () => {
			return (
				<p>Utilizarás el mismo vehículo en el que practicas para presentarte al examen práctico, garantizando familiaridad y confianza.</p>
			);
		},
	}, {
		description: "Flexibilidad horaria",
		title: "Flexibilidad horaria",
		src: "/static/images/card/servicio_6.webp",
		textBtn: "",
		cardLink: "#",
		content: () => {
			return (
				<p>Nuestros horarios se adaptan a tu disponibilidad, incluyendo opciones los fines de semana. Disponibles de lunes a sábado de 7 a 21 hs.</p>
			);
		},
	}, {
		description: "Cursos para todas las edades",
		title: "Cursos para todas las edades",
		src: "/static/images/card/servicio_16.webp",
		textBtn: "Ver más",
		cardLink: "/nuetros-cursos",
		content: () => {
			return (
				<p>Adaptados a diferentes niveles de experiencia, garantizando un aprendizaje efectivo en cada etapa de la vida.</p>
			);
		},
	}, {
		description: "Material y test online",
		title: "Material y test online",
		src: "/static/images/card/servicio_3.webp",
		textBtn: "Ver más",
		cardLink: "/test-online",
		content: () => {
			return (
				<p>Accede a contenido teórico digital y realiza exámenes desde cualquier dispositivo, en el momento y lugar que prefieras.</p>
			);
		},
	}, {
		description: "Apoyo en trámites",
		title: "Apoyo en trámites",
		src: "/static/images/card/servicio_14.webp",
		textBtn: "",
		cardLink: "#",
		content: () => {
			return (
				<p>Nos encargamos de gestionar tus trámites ante la IMM para que el proceso sea más sencillo.</p>
			);
		},
	}, {
		description: "Instructores calificados",
		title: "Instructores calificados",
		src: "/static/images/card/servicio_12.webp",
		textBtn: "Ver más",
		cardLink: "#",
		content: () => {
			return (
				<p>Contamos con profesionales altamente capacitados y con amplia experiencia en la enseñanza de conducción.</p>
			);
		},
	}, {
		description: "Flota moderna y segura",
		title: "Flota moderna y segura",
		src: "/static/images/card/servicio_13.webp",
		textBtn: "Ver más",
		cardLink: "/coche-escuela",
		content: () => {
			return (
				<p>Nuestros vehículos están equipados con tecnología de seguridad avanzada para garantizar tu bienestar.</p>
			);
		},
	},
];
