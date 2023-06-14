import { FC, useState } from 'react'
import { Iuser, TestProps } from '../types'

const Test: FC<TestProps> = ({ name, id }) => {
	const [user, setUser] = useState<Iuser[]>([])
	setUser([{ name: 'pepe', id: 1 }])

	const userI: Array<string | number> = ['hiss', 'hello', 1]
	console.log(userI)

	return <div>{name + user + id}</div>
}

export default Test
