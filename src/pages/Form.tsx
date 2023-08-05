import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect, useRef } from 'react'
import InformationSchema from '../schemas'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import logo from '/img/logo-sempro.png'

type UserInformation = {
	name: string
	description: string
}

export const FormComponent = () => {
	const sendInformation = (values: UserInformation) => {
		alert(values.name)
	}

	const inputRefs = useRef<Array<HTMLInputElement | null>>([])
	useEffect(() => {
		if (inputRefs.current.length > 0) {
			inputRefs.current[0]?.focus()
		}
	}, [])
	return (
		<div>
			<div className="min-h-screen bg-gray-100  flex flex-col justify-center ">
				<div className="relative py-3 ">
					<Link
						className=" text-gray-500 md:ml-28  shadow-lg w-36 my-10 py-2 px-5 mx-3 rounded"
						to="/"
					>
						<BsArrowLeft /> Regresar
					</Link>
					<div className="relative px-4 py-10 bg-white rounded-3xl">
						<div className="max-w-md mx-auto px-4">
							<div className="flex items-center space-x-5">
								<div className="block pl-2 font-semibold text-xl self-start text-gray-700">
									<h2 className="leading-relaxed">Enviar información</h2>
									<p className="text-sm text-gray-500 font-normal leading-relaxed">
										Ingresa tus datos para hacer un mejor proceso de eleccción.{' '}
									</p>
								</div>
							</div>
							<div className="divide-y divide-gray-200">
								<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
									<Formik
										initialValues={{ name: '', description: '' }}
										onSubmit={sendInformation}
										validationSchema={InformationSchema.saveRequestSchema}
									>
										<Form>
											<div className="flex flex-col py-5">
												<label className="block text-gray-700 text-sm font-light mb-2">
													Nombre completo
												</label>{' '}
												<Field
													id="name"
													type="text"
													name="name"
													className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													placeholder="Ingrese su nombre"
													innerRef={(el: HTMLInputElement | null) => {
														inputRefs.current[0] = el
													}}
												/>
												<ErrorMessage
													name="name"
													component="div"
													className="text-red-400"
												/>
											</div>

											<div className="flex flex-col">
												<label className="block text-gray-700 text-sm font-light mb-2">
													Datos de puestos anteriores
												</label>{' '}
												<Field
													type="text"
													name="description"
													className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
													placeholder="Ingrese sus datos"
												/>
												<ErrorMessage
													name="description"
													component="div"
													className="text-red-400"
												/>
											</div>

											<div className="pt-4 flex items-center">
												<button
													type="submit"
													className="bg-orange-500 flex justify-center items-center w-full text-white px-4 py-2 rounded-md focus:outline-none"
												>
													Enviar
												</button>
											</div>
										</Form>
									</Formik>
									<div className="pt-5 mt-5  border-gray-200 dark:border-gray-700">
										<div className="sm:flex sm:justify-center sm:items-center">
											<div className=" items-center text-center">
												<div className=" text-sm ml-4">
													<p className="mt-1 text-xs sm:text-sm text-gray-600 ">
														©2023 Sempro S.A de C.V. <br /> Términos y
														condiciones
													</p>
												</div>
											</div>
										</div>
										<div className=" flex justify-center text-center items-center">
											<img className="w-36" src={logo} alt="sempro" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
