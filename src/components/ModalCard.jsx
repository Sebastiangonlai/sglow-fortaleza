"use client";
import ImageComponent from "./ImageComponent";
import { Modal, ModalBody, ModalContent, ModalTrigger, ModalFooter } from "@/lib/animated-modal";


function ModalCard({ card, showCard = "Novedades" }) {
	return (
		<section className="w-screen min-h-screen flex flex-col justify-center items-center">
			<div className="container flex flex-wrap">
				{card.map((d) => (
					<ModalAnimatedCard
						imageSrc={d.src}
						title={d.title}
						description={d.description}
						checkText={d.checkText !== "" ? d.checkText : ""}
						btnHref={d.href}
						showCard={showCard}
						category={d.category}
						className="block md:hidden text-ellipsis"
					/>
				))}
			</div>
		</section>
	);
};

function ModalImage({ card }) {
	return (
		<section className="container grid min-h-full min-w-full grid-cols-4 mx-auto justify-center items-center">
			{card.map((d) => (
				<ModalAnimatedImage
					imageSrc={d.src}
					title={d.title}
					className="block md:hidden text-ellipsis"
				/>
			))}
		</section>
	);
};

export { ModalImage, ModalCard }


const ModalAnimatedCard = ({ imageSrc, title, description, checkText, btnHref, showCard = "Novedades", category = "Nosotros" }) => {
	return (
		<>
			<Modal className='lg:w-[100px] inset-0'>
				<div className={`mx-auto w-1/1 md:w-1/2 xl:w-1/4 ${showCard === "Novedades" || showCard === category ? "block" : "hidden"}`}>
					<ModalTrigger className="relative mb-4">
						<div className="w-full" key={title}>
							<div className="mb-2 overflow-hidden rounded-[5px] shadow-[0_8px_16px_rgb(0_0_0/0.2)] bg-black">
								<div className="block">
									<ImageComponent iSrc={imageSrc} iAlt="image" iClassName="h-full w-full rounded-[5px] transition group-hover:rotate-6deg group-hover:scale-125" iWidth={500} iHeight={500} />
								</div>
							</div>
							<div className="mb-0.5 inline-block text-base font-semibold text-[#111928] hover:text-primary dark:text-white dark:hover:text-indigo-400 sm:text-2xl lg:text-base xl:text-base leading-tight tracking-tight">
								{title}
							</div>
						</div>
					</ModalTrigger>
				</div>

				<ModalBody>
					<ModalContent>
						<>
							<h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-1 mt-4 lg:mb-6 lg:mt-2 z-150">
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
													<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-[#334a61] text-blue-500 dark:bg-blue-600/40 dark:text-blue-300">
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
						<a href={btnHref} className="px-3 py-1.5 bg-gray-200 text-black dark:bg-black/80 dark:border-black dark:hover:bg-black dark:text-white border border-gray-300 rounded-md text-sm font-medium w-38" aria-label="Mas informacion">
							Más información
						</a>
					</ModalFooter>
				</ModalBody>
			</Modal>
		</>
	);
};


const ModalAnimatedImage = ({ imageSrc, title }) => {
	return (
		<>
			<Modal className='lg:w-[100px] inset-0 z-100'>
				<ModalTrigger className="relative mb-4 ">
					<div className="mb-2 overflow-hidden rounded-[5px] shadow-[0_8px_16px_rgb(0_0_0/0.3)] ">
						<ImageComponent iSrc={imageSrc} iAlt={title} iClassName="h-full w-full rounded-[5px] transition group-hover:rotate-6deg group-hover:scale-125" iWidth={500} iHeight={500} />
					</div>
				</ModalTrigger>

				<ModalBody className="overflow-hidden dark:bg-transparent dark:border-none min-w-fit min-h-fit mx-auto justify-center items-center">
					<ModalContent>
						<div className="mb-2 overflow-hidden rounded-xl">
							<ImageComponent iSrc={imageSrc} iAlt="image" iClassName=" rounded-[5px] transition group-hover:rotate-6deg group-hover:scale-125" iWidth={600} iHeight={600} />
						</div>
					</ModalContent>
				</ModalBody>
			</Modal>
		</>
	);
};

export { ModalAnimatedImage }