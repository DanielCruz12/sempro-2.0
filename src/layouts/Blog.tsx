import img1 from '/img/cat.jpg'
import img2 from '/img/soldador.jpeg'
import img4 from '/img/2.jpg'
import img5 from '/img/nueva.jpg'
import styles from '../styles/style'

const Blog = () => {
	return (
		<>
			<div className={`${styles.divSection}`}>
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className={`${styles.titleSection}`}>
						Nuestros <span className="text-orange-500">proyectos</span>
					</h2>
					<p className="mt-1 text-gray-600 ">
						Conoce de cerca el trabajo que realizamos desde 2010
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src={img1}
								alt="Image Description"
							/>
							<span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
								02/12/2022
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Mantenimiento de maquinaria industrial.
							</h3>
							<p className="mt-3 text-gray-800 ">
								Servicio de mantenimiento a grandes empresas para una mejor
								calidad y desempeño en sus servicios.
							</p>
							{/* <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Leer más
								<span aria-hidden="true">→</span>
							</p> */}
						</div>
					</a>

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src={img2}
								alt="Image Description"
							/>
							<span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
								11/03/2023
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Mantenimiento y Reparación de Estructuras Metálicas Soldadas
							</h3>
							<p className="mt-3 text-gray-800 ">
								El mantenimiento preventivo y las reparaciones oportunas
								prolongan la vida útil de las estructuras metálicas soldadas y
								previenen fallas.
							</p>
							{/* <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Leer más
								<span aria-hidden="true">→</span>
							</p> */}
						</div>
					</a>

					<a
						className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://i.ibb.co/tY0m4YM/chispas2.jpg')]"
						href="#"
					>
						<div className="flex-auto p-4 md:p-6">
							<h3 className="text-xl text-white group-hover:text-white">
								<span className="font-bold">Acero Inoxidable</span> Técnicas y
								consideraciones especiales para trabajar con este material
								resistente a la corrosión.
							</h3>
						</div>
						<div className="pt-0 p-4 md:p-6 z-10">
							<div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
								<a
									href="https://forjaferreatienda.com/tecnicas-de-soldadura-descripcion-general/"
									target="_blank" rel="noreferrer"
								>
									Visitar sitio...
								</a>
							</div>
						</div>
					</a>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
					<a
						className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://i.ibb.co/hHqPV1C/escalera.jpg')]"
						href="#"
					>
						<div className="flex-auto p-4 md:p-6">
							<h3 className="text-xl text-white group-hover:text-white">
								Construccion de estructuras metálicas Soldadas con TIC.
							</h3>
						</div>
						<div className="pt-0 p-4 md:p-6 z-10">
							<div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
								<p>
									Se enfatiza la necesidad de una inspección rigurosa para
									evitar fallas potenciales.
								</p>
							</div>
						</div>
					</a>
					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src={img4}
								alt="Image Description"
							/>
							<span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
								10/06/2020
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Protección en alturas
							</h3>
							<p className="mt-3 text-gray-800 ">
								Sistemas de líneas de vida para prevenir caídas de trabajos en
								alturas mediante cables o bandas resistentes.
							</p>
						</div>
					</a>

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src={img5}
								alt="Image Description"
							/>
							<span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
								11/09/2022
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Diseño y Cálculo de Uniones Soldadas
							</h3>
							<p className="mt-3 text-gray-800 ">
								El diseño adecuado y el cálculo preciso son fundamentales para
								asegurar la seguridad y eficiencia de las uniones soldadas en
								estructuras metálicas.
							</p>
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default Blog
