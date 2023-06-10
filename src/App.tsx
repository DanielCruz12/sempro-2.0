import { useEffect } from 'react'

const App = () => {
	useEffect(() => {
		console.log(import.meta.env.VITE_URL_REACT)
	}, [])

	return (
		<h1 className="text-3xl font-bold underline text-red-400">
			Hello sssworld!
		</h1>
	)
}

export default App
