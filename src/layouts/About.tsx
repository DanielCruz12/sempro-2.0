import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/style'

const About: FC = () => {
	return (
		<div>
			<div className={`${styles.boxWidth}`}>
				<h3 className={`${styles.titleSection}`}>About</h3>
				<motion.div
					initial={{ x: 200 }}
					transition={{ duration: 1.5 }}
					whileInView={{
						x: 0
					}}
					viewport={{ once: false }}
					className="space-y-10 px-0 md:px-10"
				>
					<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
							<div className="lg:col-span-3">
								<h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
									Build Better Products
								</h1>
								<p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
									Introducing a new way for your brand to reach the creative
									community.
								</p>

								<div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
									<div className="w-full sm:w-auto">
										<label className="sr-only">Search</label>
										<input
											type="text"
											id="hero-input"
											name="hero-input"
											className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
											placeholder="Enter work email"
										/>
									</div>
									<a
										className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
										href="#"
									>
										Request demo
									</a>
								</div>

								<div className="mt-6 lg:mt-12">
									<span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
										Trusted by:
									</span>

									<div className="mt-4 flex gap-x-8"></div>
								</div>
							</div>

							<div className="lg:col-span-4 mt-10 lg:mt-0">
								<img
									className="w-full rounded-xl"
									src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
									alt="Image Description"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default About
