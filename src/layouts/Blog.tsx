/* import { AiOutlineUsergroupAdd } from 'react-icons/ai'
 */
import img1 from '/img/cat.jpg'
import img2 from '/img/soldador.jpeg'
import img4 from '/img/2.jpg'
import img5 from '/img/nueva.jpg'
import styles from '../styles/style'
import Test from './Test'
/* import { Button } from '../components/Button'
 */

const Blog = () => {
	/* 	const sayHello = () => {
		return alert('Hello')
	} */

	return (
		<>
<Test name='sera posible mj' id={1}/>
			<div className={`${styles.divSection}`}>
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className={`${styles.titleSection}`}>
						Nuestros <span className="text-orange-500">proyectos</span>
					</h2>
					<p className="mt-1 text-gray-600 ">
						{/* A lo largo de los años hemos adquirido expericiencia y realizado una
						diversidad de proyectos */}
						Conoce de cerca el trabajo que realizamos desde 2010
					</p>
					{/* <Button
						message="Aceptar"
						classCss="bg-sky-500 hover:bg-sky-700 text-white rounded-full w-36"
						action={sayHello}
						icon={AiOutlineUsergroupAdd}
					>
					</Button> */}
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
								11/03/2017
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Studio by Preline
							</h3>
							<p className="mt-3 text-gray-800 ">
								Produce professional, reliable streams easily leveraging
								innovative broadcast studio
							</p>
							<p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Leer más
								<svg
									className="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
									/>
								</svg>
							</p>
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
								11/03/2017
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Onsite
							</h3>
							<p className="mt-3 text-gray-800 ">
								Optimize your in-person experience with best-in-className
								capabilities like badge printing and lead retrieval
							</p>
							<p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Read more
								<svg
									className="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
									/>
								</svg>
							</p>
						</div>
					</a>

					<a
						className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://i.ibb.co/tY0m4YM/chispas2.jpg')]"
						href="#"
					>
						<div className="flex-auto p-4 md:p-6">
							<h3 className="text-xl text-white group-hover:text-white">
								<span className="font-bold">Preline</span> Press publishes books
								about economic and technological advancement.
							</h3>
						</div>
						<div className="pt-0 p-4 md:p-6">
							<div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
								Visit the site
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
								<span className="font-bold">Preline</span> Press publishes books
								about economic and technological advancement.
							</h3>
						</div>
						<div className="pt-0 p-4 md:p-6">
							<div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
								Visit the site
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
								11/03/2017
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Studio by Preline
							</h3>
							<p className="mt-3 text-gray-800 ">
								Produce professional, reliable streams easily leveraging
								innovative broadcast studio
							</p>
							<p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Leer más
								<svg
									className="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
									/>
								</svg>
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
								11/03/2017
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
								Onsite
							</h3>
							<p className="mt-3 text-gray-800 ">
								Optimize your in-person experience with best-in-className
								capabilities like badge printing and lead retrieval
							</p>
							<p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
								Read more
								<svg
									className="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
										stroke="currentColor"
									/>
								</svg>
							</p>
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default Blog
