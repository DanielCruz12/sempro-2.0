import axios from 'axios'
export const config = axios.create({
	baseURL: import.meta.env.VITE_URL_REACT
})
