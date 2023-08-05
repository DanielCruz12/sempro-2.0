import { FC, useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineTeam } from 'react-icons/ai'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import { TfiPaintBucket } from 'react-icons/tfi'
import { MdOutlineSecurity } from 'react-icons/md'
import { CiHome, CiUser, CiShare1 } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
	const [open, setOpen] = useState(false)
	const [flyerTwo, setFlyerTwo] = useState(false)
	const [flyer, setFlyer] = useState(false)

	return (
		<>
			<div className="relative bg-white ">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<img
								src="/img/logo-sempro.png"
								alt="sempro"
								className="md:w-[14rem] w-[10rem] p-2"
							/>
						</div>
						<div className="mx-5 mb-3 md:hidden">
							<button
								type="button"
								className="bg-white rounded-md  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
								onClick={() => setOpen(!open)}
							>
								<RiMenu4Fill className="sizeIcon" />
							</button>
						</div>
						<nav className="hidden md:flex space-x-10">
							<div className="relative">
								<button
									type="button"
									className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
									onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
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
												className="flex items-start rounded-lg hover:bg-gray-50"
											>
												<IoHelpBuoyOutline
													className="  text-orange-500 "
													style={{ width: '2.2rem', height: '2.3rem' }}
												/>

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
												className=" flex items-start rounded-lg hover:bg-gray-50"
											>
												<MdOutlineSecurity className="sizeIconLg text-orange-500 " />
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
									</div>
								</div>
							</div>
							<button
								type="button"
								className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
								onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
							>
								<span>Proyectos</span>

								<svg
									className={
										flyer === true
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
								onMouseLeave={() => setFlyer(false)}
								className={
									flyer
										? ' opacity-100 mt-10 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
										: ' opacity-0 translate-y-1 absolute z-10 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
								}
							>
								<div className=" shadow-lg ring-1 ring-black glass ring-opacity-5 overflow-hidden">
									<div className="  sm:px-8 sm:py-6">
										<div>
											<h3 className="text-base font-medium text-gray-900">
												Proyectos recientes
											</h3>
											<ul className="mt-4 space-y-4">
												<li className="text-base truncate">
													<a
														href="#blog"
														className="mt-1 text-sm text-gray-500"
													>
														Instalación de bobinas en centro de aislamiento.
													</a>
												</li>
												<li className="text-base truncate">
													<a
														href="#blog"
														className="mt-1 text-sm text-gray-500"
													>
														Instalación de y montaje de estructura de vigas.
													</a>
												</li>
												<li className="text-base truncate">
													<a
														href="#blog"
														className="mt-1 text-sm text-gray-500"
													>
														Capacitación a los nuevos empleados para el buen
														desempeño de su trabajo.
													</a>
												</li>
											</ul>
										</div>
										<div className="mt-5 text-sm">
											<a
												href="#blog"
												className="font-medium text-orange-500 hover:text-orange-500"
											>
												Ver todos los proyectos
												<span aria-hidden="true">→</span>
											</a>
										</div>
									</div>
								</div>
							</div>

							<a
								href="#about"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Acerca de
							</a>
							<a
								href="#team"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Equipo
							</a>
						</nav>
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<Link to="/">Inicio</Link>
							<Link
								to="/form"
								className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-500"
							>
								¡Únete!
							</Link>
						</div>
					</div>
				</div>

				<div
					className={
						open
							? 'opacity-100 h-full scale-100 ease-out z-50 duration-200 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden'
							: 'opacity-0 scale-95 absolute top-0 inset-x-0 transition transform origin-top-right md:hidden'
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
										<CiHome className="sizeIcon text-orange-500" />
										<span className="ml-3 text-base font-medium text-gray-900">
											Inicio
										</span>
									</a>
									<a
										href="#about"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										<CiUser className="sizeIcon text-orange-500" />

										<span className="ml-3 text-base font-medium text-gray-900">
											Acerca de
										</span>
									</a>
									<a
										href="#team"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										<AiOutlineTeam className="sizeIcon text-orange-500" />

										<span className="ml-3 text-base font-medium text-gray-900">
											Equipo
										</span>
									</a>
									<a
										href="#blog"
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										<TfiPaintBucket className="sizeIcon text-orange-500" />

										<span className="ml-3 text-base font-medium text-gray-900">
											Proyectos
										</span>
									</a>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<Link
									to="/form"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-500"
								>
									¡Únete!
								</Link>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									¿Buscas empleo?{' '}
									<Link
										to="/form"
										className="text-orange-500 hover:text-orange-500"
									>
										Enviar solicitud <CiShare1 className="text-orange-500 " />
									</Link>
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
