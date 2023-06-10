import { FC } from 'react'

const Blog: FC = () => {
	return (
		<div>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
						Insights
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Stay in the know with insights from industry experts.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
								alt="Image Description"
							/>
							<span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
								Sponsored
							</span>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
								Studio by Preline
							</h3>
							<p className="mt-3 text-gray-800 dark:text-gray-200">
								Produce professional, reliable streams easily leveraging
								innovative broadcast studio
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

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
							<img
								className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
								src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
								alt="Image Description"
							/>
						</div>

						<div className="mt-7">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
								Onsite
							</h3>
							<p className="mt-3 text-gray-800 dark:text-gray-200">
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
						className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]"
						href="#"
					>
						<div className="flex-auto p-4 md:p-6">
							<h3 className="text-xl text-white/[.9] group-hover:text-white">
								<span className="font-bold">Preline</span> Press publishes books
								about economic and technological advancement.
							</h3>
						</div>
						<div className="pt-0 p-4 md:p-6">
							<div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
								Visit the site
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
							</div>
						</div>
					</a>
				</div>
			</div>

			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="sm:flex">
							<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
								<img
									className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
									alt="Image Description"
								/>
							</div>

							<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
								<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
									Studio by Preline
								</h3>
								<p className="mt-3 text-gray-600 dark:text-gray-400">
									Produce professional, reliable streams easily leveraging
									innovative broadcast studio
								</p>
								<p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
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
						</div>
					</a>

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="sm:flex">
							<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
								<img
									className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
									alt="Image Description"
								/>
							</div>

							<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
								<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
									Onsite
								</h3>
								<p className="mt-3 text-gray-600 dark:text-gray-400">
									Optimize your in-person experience with best-in-className
									capabilities like badge printing and lead retrieval
								</p>
								<p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
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
						</div>
					</a>

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="sm:flex">
							<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
								<img
									className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
									alt="Image Description"
								/>
							</div>

							<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
								<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
									The complete guide to OKRs
								</h3>
								<p className="mt-3 text-gray-600 dark:text-gray-400">
									How to make objectives and key results work for your company
								</p>
								<p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
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
						</div>
					</a>

					<a className="group rounded-xl overflow-hidden" href="#">
						<div className="sm:flex">
							<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
								<img
									className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
									alt="Image Description"
								/>
							</div>

							<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
								<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
									People program models
								</h3>
								<p className="mt-3 text-gray-600 dark:text-gray-400">
									Six approaches to bringing your People strategy to life
								</p>
								<p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
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
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Blog
