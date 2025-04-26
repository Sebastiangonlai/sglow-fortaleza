import React from "react";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Breadcrumb from "@/components/Breadcrumb";
import TabNovedades from '@/components/tab-galeria/NovedadesTab';
import { TabAlumnos } from '@/components/tab-galeria/AlumnosTab';
import TabVideos from '@/components/tab-galeria/VideosTab';
import TabHome from "@/components/tab-galeria/ImagenesTabHome";


export default function GaleriaMedia() {
	const [selectedTab, setSelectedTab] = useState("Novedades");

	const tabItems = [
		"Novedades",
		"Alumnos",
		"Imagenes",
		"Videos",
	];

	return (
		<>
			{/* <PageSEO title="Galería Multimedia - Academia Fortaleza" description="Mira imágenes y videos de nuestras clases prácticas, instructores y alumnos en acción." /> */}

			<section className="overflow-hidden dark:bg-[#111928]">
				<Breadcrumb
					title="Galería Multimedia"
					subtitle="Fotos y videos de nuestras actividades."
					nameUri="Galería Multimedia"
					href="nuestros-servicios" />

				<div className="wow fadeIn overflow-hidden pt-10 " data-wow-delay=".60s" data-wow-duration="3s">
					<Tabs.Root className="max-w-screen-2xl mt-2 mx-auto px-4 md:px-8" value={selectedTab} onValueChange={(val) => setSelectedTab(val)}>

						{/* desktop */}
						<Tabs.List className="hidden bg-gray-100 dark:bg-[#111928] border dark:border-gray-400/30 mx-auto items-center justify-center lg:w-fit py-2 px-3 rounded-lg gap-x-3 overflow-x-auto text-sm sm:flex text-white dark:text-white" aria-label="">
							{tabItems.map((item, idx) => (
								<Tabs.Trigger key={idx} className="data-[state=active]:bg-blue-800/40 data-[state=active]:text-white data-[state=active]:shadow-sm py-1.5 px-3 rounded-lg duration-150 text-white dark:text-white hover:bg-blue-800/40 active:bg-white/50 font-medium" value={item}>
									{item}
								</Tabs.Trigger>
							))}
						</Tabs.List>

						{/* mobile */}
						<div className="relative text-blue-100 dark:text-blue sm:hidden">
							<select value={selectedTab} className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg border-indigo-600 dark:border-[#111928]-4/70 dark:text-base text-base text-white dark:text-white dark:bg-[#111928]" onChange={(e) => setSelectedTab(e.target.value)}>
								{tabItems.map((item, idx) => (
									<option key={idx} id={idx} >
										{item}
									</option>
								))}
							</select>
						</div>

						{tabItems.map((item, idx) => (
							<Tabs.Content key={idx} className="py-2" value={item}>
								{item === "Novedades" ? (
									<TabNovedades cantidad={6} />
								) : item === "Alumnos" ? (
									<TabAlumnos />
								) : item === "Imagenes" ? (
									<TabHome />
								) :
									<TabVideos />
								}
							</Tabs.Content>
						))}
					</Tabs.Root>
				</div>
			</section>
		</>
	)
}