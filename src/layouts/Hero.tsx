import { FC } from 'react'
import video1 from '../assets/videos/welding.mp4'
import { TypeAnimation } from 'react-type-animation'

const Hero: FC = () => {

	return (
		<>
			<div className="relative overflow-hidden">
				<div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
					<div className="max-w-4xl text-center mx-auto h-32">
						<TypeAnimation
							preRenderFirstString={true}
							sequence={[
								'Servicios especiales y montajes profesionales',
								1000,
								'Servicios especiales ',
								2000
							]}
							className="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl"
							speed={40}
							repeat={Infinity}
							/>
						<p className="mt-3 text-lg text-gray-600 ">
							Bienvenido, puedes ver los diferentes trabajos realizados
						</p>
					</div>

					<div className="mt-10 relative w-7xl mx-auto">
						<div className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover">
							<video autoPlay muted loop className="rounded-2xl">
								<source src={video1} type="video/mp4" />
							</video>
						</div>
						<div className="absolute inset-0 w-full h-full">
							<div className="flex flex-col justify-center items-center w-full h-full">
								<a
									className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
									href="#"
								>
									<svg
										className="w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
									</svg>
									Play the overview
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
