import React from "react";
import { RiUserStarLine, RiCarLine, RiSteering2Fill, RiIdCardLine } from "react-icons/ri";
import TitleHeader from "@/components/TitleHeader";
import PropTypes from 'prop-types';
import { ScrollAnimation } from "@/components/ScrollAnimation";


const services = [
	{
		icon: RiIdCardLine,
		title: "Clases teóricas y prácticas",
		description: "Combinamos ambos enfoques para que adquieras todas las habilidades necesarias y manejes con seguridad y confianza.",
		href: "/clases-practicas",
		animation: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }
	}, {
		icon: RiUserStarLine,
		title: "Instructores calificados",
		description: "Instructores altamente capacitados para brindarte una enseñanza de calidad, adaptada a tus necesidades y ritmo de aprendizaje.",
		href: "/sobre-nosotros",
		animation: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }
	}, {
		icon: RiSteering2Fill,
		title: "Clases personalizadas",
		description: "Diseñada para conductores principiantes, intermedios y avanzados. Nos adaptamos a tu nivel para garantizar un aprendizaje eficiente.",
		href: "/cursos-personalizados",
		animation: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } }
	}, {
		icon: RiCarLine,
		title: "Vehículos Modernos",
		description: "Contamos con vehículos 0km en perfecto estado y con las habilitaciones exigidas por la ley.",
		href: "/coche-escuela",
		animation: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } }
	}
];

const SectionOfrecemosFortaleza = () => {
	return (
		<>
			<section className="bg-white relative z-20 overflow-hidden dark:bg-transparent pt-[60px] lg:pt-[70px] pb-[30px] lg:pb-[30px] select-none">
				<div>
					<span className="absolute left-0 bottom-0">
						<svg width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="55" cy="442" r="138" stroke="white" strokeOpacity="0.04" strokeWidth="50" />
							<circle cx="446" cy="180" r="39" stroke="white" strokeOpacity="0.04" strokeWidth="20" />
							<path d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z" stroke="white" strokeOpacity="0.06" strokeWidth="12" />
							<circle stroke="white" cx="192.188" cy="249.638" r="36.033" strokeOpacity="0.04" strokeWidth="20" />
						</svg>
					</span>
					<span className="absolute top-0 right-0">
						<svg width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="462" cy="5" r="138" stroke="white" strokeOpacity="0.04" strokeWidth="50" />
							<circle cx="49" cy="270" r="39" stroke="white" strokeOpacity="0.04" strokeWidth="20" />
							<path d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z" stroke="white" strokeOpacity="0.06" strokeWidth="13" />
						</svg>
					</span>
				</div>

				<div className="container mx-auto">
					<TitleHeader
						title="Qué Ofrecemos"
						subtitle="Ofrecemos una formación completa para conductores, sin importar su nivel de experiencia."
						uri="licencia-de-conducir" />

					<div className="flex flex-wrap lg:flex-row max-w-[1100px] mx-auto">
						{services.map((service, index) => (
							<div key={index} className="w-full px-4 lg:w-1/2">
								<ScrollAnimation
									description={
										<ServiceCard
											icon={service.icon}
											title={service.title}
											description={service.description}
											href={service.href}
										/>
									}
									duration={1}
									delay={0.5}
									rootMargin="0px 0px -10px 0px"
									effect={service.animation}
									transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default SectionOfrecemosFortaleza;


const ServiceCard = ({ icon: Icon, title, description, href }) => {
	return (
		<div className=" mb-11 flex lg:mb-[50px]">
			<div className="group mb-16">
				<a className="relative z-10 mb-4 flex h-[60px] w-[60px] lg:h-[60px] lg:w-[60px] sm:h-[60px] sm:w-[60px] items-center justify-center rounded-[14px] bg-[#3758f9]" href={href} aria-label={`Ir a ${title}`}>
					<span className="absolute left-0 top-0 -z-[1] mb-6 flex h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] sm:h-[60px] sm:w-[60px] rotate-[25deg] items-center justify-center rounded-[14px] bg-[#3758f9] bg-opacity-20 duration-300 group-hover:rotate-45">
					</span>
					<Icon size='36px' />
				</a>
			</div>
			<div className="w-full px-4">
				<h3 className="mb-2 text-xl font-bold text-[#111928] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl leading-tight tracking-tight">
					{title}
				</h3>
				<p className="text-base text-[#637381] dark:text-[#9CA3AF] leading-tight tracking-tight">
					{description}
				</p>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	icon: PropTypes.elementType.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export { ServiceCard };