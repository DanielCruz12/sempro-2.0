import { FC } from 'react'
import Hero from '../layouts/Hero'
import About from '../layouts/About'
import Pricing from '../layouts/Pricing'
import Navbar from '../layouts/Navbar'
import Blog from '../layouts/Blog'
import Team from '../layouts/Team'
import Footer from '../layouts/Footer'

const Home: FC = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen overflow-auto z-0 scroll-smooth">
			<section id="navbar">
				<Navbar />
			</section>

			<section id="hero">
				<Hero />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="blog">
				<Blog />
			</section>

			<section id="team">
				<Team />
			</section>

			<section id="pricing">
				<Pricing />
			</section>

			<section id="footer">
				<Footer />
			</section>
		</div>
	)
}

export default Home
