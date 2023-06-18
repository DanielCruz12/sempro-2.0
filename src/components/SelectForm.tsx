/* eslint-disable no-unused-vars */
import { useField } from 'formik'
import Select from 'react-select'
import { OptionType } from '../types'

type FormSelectProps = {
	name: string
	placeH?: string
	options: OptionType[]
	classCss: string
	isMultiSelect?: boolean
	onSelectedChange: (values: Array<OptionType>) => void
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
			onChange={value => {
				helpers.setValue(value)
				if (onSelectedChange) onSelectedChange(value)
			}}
			value={field.value}
			placeholder={placeH}
			onBlur={() => helpers.setTouched(true)}
			classNamePrefix="react-select"
		/>
	)
}

export default SelectForm
