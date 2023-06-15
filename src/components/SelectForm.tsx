/* eslint-disable no-unused-vars */
import { useField } from 'formik'
import Select from 'react-select'
type OptionType = {
	email: string
	password: string
}
interface ValuesType {
	email: string
	password: string
}

type FormSelectProps = {
	name: string
	placeH?: string
	options: OptionType[]
	classCss: string
	isMultiSelect?: boolean
	onSelectedChange: (values: ValuesType) => void
}

const SelectForm = ({
	name,
	placeH,
	options,
	classCss,
	onSelectedChange
}: FormSelectProps) => {
	const [field, meta, helpers] = useField(name)

	return (
		<Select
			options={options}
			className={classCss}
			{...meta}
			name={name}
			onChange={onSelectedChange}
			value={field.value}
			placeholder={placeH}
		/>
	)
}

export default SelectForm
