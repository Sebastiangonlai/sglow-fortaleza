'use client'

import EmblaCarouselVideos from "../embla-carousel/EmblaCarouselVideos";


const TabVideos = () => {
	const OPTIONS = { dragFree: true }
	const SLIDE_COUNT = 3
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

	return (
		<>
			<div className="pt-8">
				<div className=" overflow-hidden">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4">
							<div className="text-center">
								<h1 className="mb-1 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[35px] md:leading-[1.2]">
									Videos
								</h1>
								<p className="mb-2 text-base text-[#637381] dark:text-[#9CA3AF] mx-auto max-w-[650px]">
									Intro Academia Fortaleza.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white py-6 dark:bg-transparent">
				<EmblaCarouselVideos slides={SLIDES} options={OPTIONS} />
			</div>
		</>
	);
};

export default TabVideos;