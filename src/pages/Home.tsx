import { FC } from 'react'
import {
	Hero,
	About,
	Navbar,
	Blog,
	Team,
	Footer,
	Sidebar,
	Banner
} from '../layouts'


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

				<section id="banner">
					<Banner />
				</section>

				{/* <section id="pricing">
					<Pricing />
				</section>
 */}
				<section id="footer">
					<Footer />
				</section>
			</div>
		</div>
	)
}

export default Home
