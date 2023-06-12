import { FC } from 'react'
import img from '/img/foto5.jpg'
import styles from '../styles/style'

const About: FC = () => {
	return (
		<div className={`${styles.boxWidth} mt-20`}>
			<h3 className={`${styles.titleSection} absolute z-24 top-12 text-4xl `}>
				Acerca de <span className="text-orange-500">nosotros</span>
			</h3>

			<div className="space-y-10 px-0 md:px-10">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
						<div className="lg:col-span-3">
							<h3 className="block font-medium text-gray-800 sm:text-1xl md:text-2xl lg:text-3xl ">
								Conócenos...
							</h3>
							<p className="mt-3 text-lg text-gray-800 ">
								Sempro. Es una empresa que está caracterizado a través del
								tiempo por su seriedad en el cumplimiento de sus obligaciones en
								todas las obras que ha realizado. Ofrece sus servicios a la
								empresa privada, se especializa de una manera integral en la
								fabricación, transportación e instalación para la industria
								textil, industria alimenticia e industria del plástico.
							</p>

							<div className="mt-6 lg:mt-12">
								<span className="text-xs font-medium text-gray-800 uppercase 4">
									Trusted by:
								</span>

								<div className="mt-4 flex gap-x-8">hilasal</div>
							</div>
						</div>

						<div className="lg:col-span-4 mt-10 p-16 lg:mt-0">
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
