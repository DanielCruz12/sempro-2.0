import { FC } from 'react'
import Hero from '../layouts/Hero'
import About from '../layouts/About'
import Pricing from '../layouts/Pricing'
import Navbar from '../layouts/Navbar'
import Blog from '../layouts/Blog'
import Team from '../layouts/Team'
import Footer from '../layouts/Footer'
import Sidebar from '../layouts/Sidebar'

const Home: FC = () => {
	return (
		<div>
			<Sidebar />
			<div className="bg-white text-black h-screen overflow-auto z-0 scroll-smooth">
				<section id="navbar">
					<Navbar />
				</section>

				<section id="hero">
					<Hero />
				</section>

				<section id="about">
					<About />
				</section>
				
				<section id="team">
					<Team />
				</section>

					<section id="blog">
						<Blog />
					</section>

				<section id="pricing">
					<Pricing />
				</section>

				<section id="footer">
					<Footer />
				</section>
			</div>
		</div>
	)
}

export default Home
