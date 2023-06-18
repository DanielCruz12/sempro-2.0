export interface TestProps {
	name: string
	id: number
}

export interface Iuser {
	name: string
    id: number
}

export type OptionType = {
	value: string
	label: string
}

export type ValuesToSend = {
	password: string
	email: string
	docs: OptionType[]
}