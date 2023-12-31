import { FC, useState } from 'react'
import video1 from '../assets/videos/welding.mp4'
import { TypeAnimation } from 'react-type-animation'
import ReactPlayer from 'react-player/youtube'

const Hero: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false)

	return (
		<>
			<div className="relative overflow-hidden">
				<div className="w-full mx-auto px-4 sm:px-6">
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
					<>
						{showModal ? (
							<>
								<div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
									<div className="mx-auto text-end rounded-xl overflow-hidden">
										<button
											onClick={() => setShowModal(false)}
											className="text-white pb-4 text-[1.1rem]"
										>
											Cerrar
										</button>
										<ReactPlayer
											width="90vw"
											url="https://www.youtube.com/watch?v=wQrN_JNxBDQ"
											controls
										/>
									</div>
								</div>
							</>
						) : (
							<></>
						)}
					</>
					<div className="mt-10 relative mx-auto">
						<div className="w-full object-cover bg-no-repeat bg-center bg-cover">
							<video autoPlay muted loop className="rounded-2xl mx-auto">
								<source src={video1} type="video/mp4" />
							</video>
						</div>
						<div className="absolute inset-0 w-full h-full">
							<div className="flex flex-col justify-center items-center w-full h-full">
								<button
									className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
									onClick={() => setShowModal(true)}
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
									¡Mira nuestros proyectos!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
