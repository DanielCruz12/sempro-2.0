import { FC } from 'react'
import { CardTeam } from '../components/CardTeam'

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

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<CardTeam />
				<CardTeam />
				<CardTeam />
			</div>
		</div>
	)
}

export default Team
