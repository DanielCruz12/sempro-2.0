import * as Yup from 'yup'

const saveRequestSchema = Yup.object({
    name: Yup.string().required('Se requiere nombre del módulo'),
    description: Yup.string().required('Se requiere descripción del módulo')
})

const InformationSchema = {
    saveRequestSchema,
}

export default InformationSchema
