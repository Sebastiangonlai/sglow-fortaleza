import TitleHeader from "@/components/ui/TitleHeader";
import LayoutSection from "@/components/LayoutSection";
import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";


const teamData = [
	{
		name: "Adrián",
		role: "Instructor y responsable de formación",
		image: "/static/images/team/testimonial.webp",
		socialLinks: [
			{ href: "/contacto", icon: "instagram" },
			{ href: "/contacto", icon: "facebook" },
			{ href: "/contacto", icon: "whatsapp" },
		],
	}, {
		name: "Juan",
		role: "Instructor de manejo",
		image: "/static/images/team/team-02.webp",
		socialLinks: [
			{ href: "/contacto", icon: "instagram" },
			{ href: "/contacto", icon: "facebook" },
			{ href: "/contacto", icon: "whatsapp" },
		],
	},
];

const SectionTeam = () => {
	return (
		<LayoutSection id="team" size="half" color="bg-(--color-section-2)" className="relative overflow-hidden">
			<TitleHeader
				title="Instructores"
				subtitle="Con paciencia y profesionalismo, te brindamos una experiencia de aprendizaje segura, ajustada a tu ritmo y necesidades."
				uri="nuestros-servicios" />

			<div className="flex flex-wrap justify-center mx-auto items-center">
				{teamData.map((member, index) => (
					<TeamCard key={index} member={member} />
				))}
			</div>

		</LayoutSection>
	);
};

const TeamCard = ({ member }) => {
	return (
		<div className="lg:min-w-[400px] min-w-sw sm:min-w-sw w-2/2 sm:w-2/2 lg:w-1/2 xl:w-1/2 px-4">
			<div className="max-w-[22rem] group mb-8 rounded-xl bg-white pb-10 pt-12 shadow-testimonial dark:bg-[#111928] mx-auto justify-center items-center ">
				<div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
					<img
						src={member.image}
						alt={`Imagen de ${member.name}`}
						className="h-[120px] w-[120px] rounded-full"
						width={120}
						height={120} />
				</div>
				<div className="text-center">
					<h4 className="mb-1 text-lg font-semibold text-[#111928] dark:text-white">
						{member.name}
					</h4>
					<p className="mb-5 text-sm text-[#637381] dark:text-[#9CA3AF]">
						{member.role}
					</p>
					<div className="flex items-center justify-center gap-3">
						{member.socialLinks.map((link, index) => (
							<a key={index} href={link.href} className="text-[#9CA3AF] hover:text-primary">
								<SocialIcon icon={link.icon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const SocialIcon = ({ icon }) => {
	const icons = {
		instagram: <IoLogoInstagram />,
		facebook: <IoLogoFacebook />,
		whatsapp: <IoLogoWhatsapp />,
	};
	return icons[icon] || null;
};

export default SectionTeam;