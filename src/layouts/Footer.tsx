import { FC } from 'react'
import logo from '/img/logo-sempro.png'
const Footer: FC = () => {
	return (
		<footer className="w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
				<div className="col-span-full hidden lg:col-span-1 lg:block">
					<img className="w-36" src={logo} alt="sempro" />
				</div>

				<div>
					<h4 className="text-xs font-semibold text-gray-900 uppercase ">
						Servicios
					</h4>

					<div className="mt-3 grid space-y-3 text-sm">
						<a
							className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  dark:hover:text-gray-200"
							href="#"
						>
							Soldadura en TIC
						</a>

						<a
							className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  dark:hover:text-gray-200"
							href="#"
						>
							Mantenimiento de maquinaria pesada
						</a>
					</div>
				</div>

				<div>
					<h4 className="text-xs font-semibold text-gray-900 uppercase ">
						Empresa
					</h4>

					<div className="mt-3 grid space-y-3 text-sm">
						<a
							className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  dark:hover:text-gray-200"
							href="#"
						>
							Acerca de nosotros
						</a>
					</div>
				</div>

				<div>
					<h4 className="text-xs font-semibold text-gray-900 uppercase ">
						Contáctanos
					</h4>

					<div className="mt-3 grid space-y-3 text-sm">
						<a
							className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  dark:hover:text-gray-200"
							href="#"
						>
							+503 7226-6676
						</a>
					</div>
				</div>

				<div>
					<h4 className="text-xs font-semibold text-gray-900 uppercase ">
						¿Quieres formar parte de nuestro equipo?
					</h4>

					<div className="mt-3 grid space-y-3 text-sm">
						<a
							className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  dark:hover:text-gray-200"
							href="#"
						>
							Envia tu solicitud o curriculum
						</a>
					</div>
				</div>
			</div>

			<div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
				<div className="sm:flex sm:justify-center sm:items-center">
					<div className=" items-center text-center">
						<div className=" text-sm ml-4">
							<p className="mt-1 text-xs sm:text-sm text-gray-600 ">
								©2023 Sempro S.A de C.V. <br /> Términos y condiciones
							</p>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<div className="mt-3 sm:hidden">
							<img className="w-36" src={logo} alt="sempro" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
