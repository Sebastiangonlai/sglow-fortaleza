import React, { useState } from 'react';
import siteMetadata from '@/data/siteMetadata'
import * as Dialog from "@radix-ui/react-dialog";

export default function ListaEnlaces() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			{/* <PageSEO title="Redes Sociales - Academia Fortaleza" description="Síguenos en redes, visita nuestra web o contáctanos al instante por WhatsApp." /> */}
			<Dialog.Root className="mx-auto justify-center container pt-2" open={isOpen}>
				<Dialog.Portal>
					<Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 w-full h-full bg-[#0d1117] opacity-100" />
					<Dialog.Content className="fixed w-full  mx-auto px-4">
						<div className="mx-auto">
							<div className="lista-enl relative container m-auto py-4 px-6 text-gray-800 md:px-12 xl:px-40">
								<div className="m-auto md:w-8/12 lg:w-6/10 xl:w-10/12">
									<div className="rounded-xl bg-zinc-100 shadow-sm shadow-zinc-900 border border-cyan-900">
										<div className="p-4 sm:p-8">
											<div className="flex flex-col text-center w-full">
												<img className="col-span-2 mb-3 max-h-20 w-full object-contain lg:col-span-4"
													src="/static/favicons/logo.webp" alt="Academia Fortaleza" width={128} height={48} />
												<h2 className="text-3xl text-cyan-900 font-bold" >Academia Fortaleza</h2>
											</div>
											<div className="mt-8 grid space-y-2">
												<button aria-label="internet" className="group h-12 px-6 border border-zinc-600 rounded-full transition duration-300
  hover:bg-blue-100 active:bg-blue-100" onClick={() => window.location.href = 'https://academiafortaleza.com.uy'}>
													<div className="relative flex items-center space-x-4 justify-center">
														<img src="/static/images/svg/internet.png" className="absolute left-0 w-5" alt="sitio web logo" />
														<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-zinc-800 sm:text-base">Visita nuestro sitio web</span>
													</div>
												</button>

												<button aria-label="Whatsapp" className="group h-12 px-6 border border-zinc-600 rounded-full transition duration-300 
  hover:bg-blue-100 active:bg-blue-100" onClick={() => window.location.href = siteMetadata.whatsapp}>
													<div className="relative flex items-center space-x-4 justify-center" >
														<img src="/static/images/svg/whatsapp.svg" className="absolute left-0 w-5" alt="whatsapp logo" />
														<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-zinc-800 sm:text-base" >Contáctanos por WhatsApp</span>
													</div>
												</button>
												<button aria-label="Instagram" className="group h-12 px-6 border border-zinc-600 rounded-full transition duration-300 
  hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100" onClick={() => window.location.href = 'https://www.instagram.com/academiadechoferesfortaleza/'}>
													<div className="relative flex items-center space-x-4 justify-center" >
														<img src="/static/images/svg/instagram.svg" className="absolute left-0 w-5" alt="instagram logo" />
														<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-zinc-800 sm:text-base">Síguenos en Instagram</span>
													</div>
												</button>

												<button aria-label="Facebook" className="group h-12 px-6 border border-zinc-600 rounded-full transition duration-300 
  hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100" onClick={() => window.location.href = 'https://www.facebook.com/academiadechoferesfortaleza'}>
													<div className="relative flex items-center space-x-4 justify-center">
														<img src="/static/images/svg/facebook.svg" className="absolute left-0 w-5" alt="facebook logo" />
														<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-zinc-800 sm:text-base">Síguenos en Facebook</span>
													</div>
												</button>
											</div>
											<div className="mt-9 text-gray-600 text-center sm:-mb-8">
												<p className="flex flex-col leading-tight sm:mb-4 text-sm sm:text-sm dark:text-gray-600">Síguenos en redes, visita nuestra web y comunícate con nosotros al instante.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	)
}