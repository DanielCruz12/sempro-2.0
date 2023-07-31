import { FC } from 'react'
import { CardTeam } from '../components/CardTeam'
import photo1 from '/img/pa.jpg'
import photo2 from '/img/ma.jpg'
import photo3 from '/img/jon.jpg'

const Team: FC = () => {
	return (
		<div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className=" mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
					<span className="text-orange-500">Nuestro</span> equipo
				</h2>
				<p className="mt-1 text-gray-600">
					Conoce las personas detrás de cada proyecto
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				<CardTeam
					name={'Edwin Cruz'}
					role={'Director ejecutivo de proyectos '}
					description={
						'Como profesional comprometido, mi enfoque orientado a resultados y mi capacidad para trabajar en equipo me permiten abordar proyectos complejos con eficiencia y generar soluciones innovadoras.'
					}
					image={photo1}
				/>
				<CardTeam
					name={'Delmy Yaneth '}
					role={'Encargada de seguridad industrial'}
					description={
						'Mi experiencia en evaluación de riesgos me permite implementar protocolos de seguridad adaptados a las necesidades de cada área, asegurando el cumplimiento de normativas de seguridad vigentes.'
					}
					image={photo2}
				/>
				<CardTeam
					name={'Jonathan Cruz'}
					role={'Administrador financiero'}
					description={
						'Con sólidos antecedentes en análisis financiero y toma de decisiones estratégicas, busco implementar prácticas financieras sólidas que impulsen el crecimiento sostenible y la rentabilidad de la empresa.'
					}
					image={photo3}
				/>
			</div>
		</div>
	)
}

export default Team
