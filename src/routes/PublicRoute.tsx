import App from '../App'
import { Route, Routes } from 'react-router-dom'
import { FormComponent } from '../pages/Form'

const PublicRoute = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/form" element={<FormComponent />} />
			</Routes>
		</>
	)
}

export default PublicRoute
