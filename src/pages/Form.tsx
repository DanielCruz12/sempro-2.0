import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect, useRef } from 'react'
import InformationSchema from '../schemas'

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
		<>
			<Formik
				initialValues={{ name: '', description: '' }}
				onSubmit={sendInformation}
				validationSchema={InformationSchema.saveRequestSchema}
			>
				<Form>
					<Field
						type="text"
						name="name"
						placeholder="Ingrese su nombre"
						innerRef={(el: HTMLInputElement | null) => {
							inputRefs.current[0] = el
						}}
					/>
					<ErrorMessage name="name" component="div" />
					<Field
						type="text"
						name="description"
						placeholder="Ingrese sus datos y que rol desempeña"
						innerRef={(el: HTMLInputElement | null) => {
							inputRefs.current[0] = el
						}}
					/>
					<ErrorMessage name="description" component="div" />
					<button type="submit">Enviar</button>
				</Form>
			</Formik>
		</>
	)
}
