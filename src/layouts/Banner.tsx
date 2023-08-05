import { Link } from 'react-router-dom'
import logo from '/img/logo-sempro.png'

const Banner = () => {
	return (
		<section className="py-8">
			<div className="container">
				<div className="px-7 py-6 bg-gradient-to-r from-orange-50 via-orange-100 to-white rounded">
					<div className="flex flex-wrap">
						<div className="w-full flex-col text-center md:w-1/2 pt-6 mb-10 md:mb-0 md:px-10">
							<h3 className="mb-1 text-2xl font-bold text-white">
								<span className="text-orange-600">
									Calidad y <span className="text-orange-900">precisión</span>{' '}
									en cada soldadura
								</span>
							</h3>
							<p className="mb-8 md:mb-16 text-sm font-medium text-orange-500">
								Soldadura Profesional para Proyectos Exitosos
							</p>
							<Link
								to="/form"
								className="content-center text-center  rounded-full bg-orange-500  px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
							>
								Únete ahora<span aria-hidden="true">&rarr;</span>
							</Link>
						</div>

						<div className="w-full md:w-1/2 flex items-center">
							<img className="mx-auto h-20 md:h-28" src={logo} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
