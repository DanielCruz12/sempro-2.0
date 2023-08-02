import { FC, useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar: FC = () => {
	const [open, setOpen] = useState(false)
	const [flyerTwo, setFlyerTwo] = useState(false)

	return (
		<>
			{/* <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 ">
				<nav
					className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="relative md:flex md:items-center md:justify-between">
						<div className="flex items-center justify-between">
							<img
								src="/img/logo-sempro.png"
								alt="sempro"
								className="md:w-[16rem] w-[6rem] p-2"
							/>
							<div className="md:hidden">
								<button
									type="button"
									className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm  dark:border-gray-700:focus:ring-offset-gray-800"
									data-hs-collapse="#navbar-collapse-with-animation"
									aria-controls="navbar-collapse-with-animation"
									aria-label="Toggle navigation"
								>
									<svg
										className="hs-collapse-open:hidden w-4 h-4"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
									</svg>
									<svg
										className="hs-collapse-open:block hidden w-4 h-4"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</div>
						</div>

						<div
							id="navbar-collapse-with-animation"
							className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
						>
							<div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
								<div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
									<a
										className="font-medium text-orange-500 py-3 md:py-6 "
										href="#"
										aria-current="page"
									>
										Inicio
									</a>

									<a
										className="font-normal text-gray-900 py-3 md:py-6"
										href="#"
									>
										Nosotros
									</a>
									<a
										className="font-normal text-gray-900 py-3 md:py-6"
										href="#"
									>
										Servicios
									</a>
									<a
										className="font-normal text-gray-900 py-3 md:py-6"
										href="#"
									>
										Nuestros proyectos
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header> */}

			<div className="relative bg-white ">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							{/* 		<img
									className="h-8 w-auto sm:h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/> */}
							<img
								src="/img/logo-sempro.png"
								alt="sempro"
								className="md:w-[14rem] w-[10rem] p-2"
							/>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<button
								type="button"
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
								onClick={() => setOpen(!open)}
							>
								<span className="sr-only">Open menu</span>
								<RiMenu4Fill className="sizeIcon" />
							</button>
						</div>
						<nav className="hidden md:flex space-x-10">
							{/* 	<div className="relative">
								<button
									type="button"
									className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 pb-8"
									onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
								>
									<span>Solutions</span>

									<svg
										className={
											flyer === true
												? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
												: 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
										}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>

								<div
									onMouseLeave={() => setFlyer(false)}
									className={
										flyer
											? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
											: ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
									}
								>
									<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
										<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
											<a
												href="#"
												className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
											>
												<svg
													className="flex-shrink-0 h-6 w-6 text-orange-500"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Automations
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Build strategic funnels that will drive your
														customers to convert
													</p>
												</div>
											</a>
										</div>
										<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
											<div className="flow-root">
												<a
													href="#"
													className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
												>
													<svg
														className="flex-shrink-0 h-6 w-6 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													<span className="ml-3">Watch Demo</span>
												</a>
											</div>
											<div className="flow-root">
												<a
													href="#"
													className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
												>
													<svg
														className="flex-shrink-0 h-6 w-6 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
														/>
													</svg>
													<span className="ml-3">Contact Sales</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							<div className="relative">
								<button
									type="button"
									className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
									onClick={() => setFlyerTwo(!flyerTwo)} /* , setFlyer(false) */
								>
									<span>Servicios</span>

									<svg
										className={
											flyerTwo === true
												? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
												: 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
										}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>

								<div
									onMouseLeave={() => setFlyerTwo(false)}
									className={
										flyerTwo
											? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
											: ' opacity-0 translate-y-1 absolute z-10 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
									}
								>
									<div className=" shadow-lg ring-1 ring-black glass ring-opacity-5 overflow-hidden">
										<div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
											<a
												href="#"
												className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/support */}
												<svg
													className="flex-shrink-0 h-6 w-6 text-orange-500"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Centro de ayuda
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Obtenga respuestas a todas sus preguntas en nuestros
														foros o soporte de contacto.
													</p>
												</div>
											</a>

											<a
												href="#"
												className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/shield-check */}
												<svg
													className="flex-shrink-0 h-6 w-6 text-orange-500"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Seguridad
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Comprenda cómo nos tomamos en serio su seguridad con
														el cumplimiento y entrega en cada uno de nuestros
														proyectos.
													</p>
												</div>
											</a>
										</div>
										<div className="  sm:px-8 sm:py-6">
											<div>
												<h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
													Proyectos recientes
												</h3>
												<ul className="mt-4 space-y-4">
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															Instalación de bobinas en centro de aislamiento.
														</a>
													</li>
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															Instalación de y montaje de estructura de vigas.
														</a>
													</li>
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															Capacitación a los nuevos empleados para el buen
															desempeño de su trabajo.
														</a>
													</li>
												</ul>
											</div>
											<div className="mt-5 text-sm">
												<a
													href="#"
													className="font-medium text-orange-500 hover:text-orange-500"
												>
													Ver todos los proyectos{' '}
													<span aria-hidden="true">→</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Proyectos
							</a>

							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Nosotros
							</a>
						</nav>
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<a
								href="#"
								className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-500"
							>
								¡Únete!
							</a>
						</div>
					</div>
				</div>

				<div
					className={
						open
							? 'opacity-100 h-full scale-100 ease-out z-50 duration-200 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden'
							: 'opacity-0 scale-95 h-full z-50 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden'
					}
				>
					<div className="rounded-lg shadow-lg px-3 ring-black ring-opacity-5 glass ">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between pb-6">
								<div>
									<img
										src="/img/logo-sempro.png"
										alt="sempro"
										className="md:w-[14rem] w-[10rem]"
									/>
								</div>
								<div className="-mr-2">
									<button
										type="button"
										className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
										onClick={() => setOpen(!open)}
									>
										<AiOutlineClose className="sizeIcon" />
									</button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									<a
										href="#"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/chart-bar */}
										<svg
											className="flex-shrink-0 h-6 w-6 text-orange-500"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Inicio
										</span>
									</a>
									<a
										href="#"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/cursor-click */}
										<svg
											className="flex-shrink-0 h-6 w-6 text-orange-500"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Nosotros
										</span>
									</a>
									<a
										href="#"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/shield-check */}
										<svg
											className="flex-shrink-0 h-6 w-6 text-orange-500"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Proyectos
										</span>
									</a>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<a
									href="#"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-500"
								>
									¡Únete!
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									¿Buscas empleo?{' '}
									<a href="#" className="text-orange-500 hover:text-orange-500">
										Enviar solicitud
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
