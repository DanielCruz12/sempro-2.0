export const CardPricing = () => {
  return (
    <div className="flex flex-col border border-gray-500 text-center rounded-xl p-8 ">
						<h4 className="font-medium text-lg text-gray-800 ">Free</h4>
						<span className="mt-7 font-bold text-5xl text-gray-800 ">Free</span>
						<p className="mt-2 text-sm text-gray-500">Forever free</p>

						<ul className="mt-7 space-y-2.5 text-sm">
							<li className="flex space-x-2">
								<svg
									className="flex-shrink-0 h-5 w-5 text-blue-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
										fill="currentColor"
									/>
								</svg>
								<span className="text-gray-800 ">1 user</span>
							</li>

							<li className="flex space-x-2">
								<svg
									className="flex-shrink-0 h-5 w-5 text-blue-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
										fill="currentColor"
									/>
								</svg>
								<span className="text-gray-800 ">Plan features</span>
							</li>

							<li className="flex space-x-2">
								<svg
									className="flex-shrink-0 h-5 w-5 text-blue-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
										fill="currentColor"
									/>
								</svg>
								<span className="text-gray-800 ">Product support</span>
							</li>
						</ul>
						<a
							className="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
							href="#"
						>
							Sign up
						</a>
					</div>
  )
}
