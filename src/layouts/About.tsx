import { FC } from 'react'
import img from '/img/foto5.jpg'
import styles from '../styles/style'

const About: FC = () => {
	return (
		<div className={`${styles.divSection} mt-20`}>
			<h3 className={`text-3xl md:text-4xl text-center font-bold`}>
				Acerca de <span className="text-orange-500">nosotros</span>
			</h3>
			<p className="mt-1 text-gray-600 text-center ">
				{/* A lo largo de los años hemos adquirido expericiencia y realizado una
						diversidad de proyectos */}
				Toda la trayectoria desde hace varios años
			</p>
			<div className="space-y-10 px-0 md:px-10">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
						<div className="lg:col-span-3">
							<h3 className="block font-medium pt-6 text-gray-800 sm:text-1xl md:text-2xl lg:text-2xl ">
								Conócenos...
							</h3>
							<p className="mt-3  text-gray-800 text-sm md:text-lg">
								SEMPRO, se ha caracterizado por la calidad de entrega en todos
								los proyectos que ha realizado. Trabaja con empresas privadas y
								públicas. Se especializa de manera integral en la fabricación,
								transportación e instalación de infraestructuras metálicas para
								la industria alimenticia e industria del plástico.
							</p>

							{/* <div className="mt-6 lg:mt-12">
								<span className="text-xs font-medium text-gray-800 uppercase 4">
									Trusted by:
								</span>

								<div className="w-full">
									<div className=" pt-8 rounded-xl bg-white mx-4 sm:mx-8 md:mx-auto">
										<div className="sm:py-6 px-8 flex flex-wrap items-center">
											<div className="flex justify-center gap-3 md:justify-start xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
												<img
													className="focus:outline-none w-12 sm:w-14 "
													src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png"
													alt="Adidas"
													role="img"
												/>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>

						<div className="lg:col-span-4 md:mt-10 p-8 lg:mt-0">
							<img
								className="w-full rounded-xl"
								src={img}
								alt="Image Description"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
