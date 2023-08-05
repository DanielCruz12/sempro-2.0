import { useEffect, useState } from 'react'
import Home from './pages/Home'
/* import videoanimation from './assets/videos/welderanimation.mp4'
 */
const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 200)
	}, [])

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				{/* <video autoPlay muted loop className="rounded-2xl w-72">
					<source src={videoanimation} type="video/mp4" />
				</video> */}
				cargando...
			</div>
		)
	}
	return <Home />
}

export default App
