import { FC } from 'react'
import { CardPricing } from '../components/CardPricing'

const Pricing: FC = () => {
	return (
		<div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="max-w-7xl mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
					Precios
				</h2>
				<p className="mt-1 text-gray-600 ">
					Whatever your status, our offers evolve according to your needs.
				</p>
			</div>

			<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:items-center">
				<CardPricing />
				<CardPricing />
				<CardPricing />
			</div>
		</div>
	)
}

export default Pricing
