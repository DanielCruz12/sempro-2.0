import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

const Sidebar: FC = () => {
	return (
		<div className="fixed top-[30vh] left-5 z-50 ">
			<ul className="list-none flex flex-col p-0 m-0 gap-3">
				<li>
					<SocialIcon
						url="https://www.facebook.com"
						network="facebook"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
				</li>

				<li>
					<SocialIcon
						url="https://www.instagram.com"
						network="instagram"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
				</li>

				<li>
					<SocialIcon
						url="https://www.twitter.com"
						network="twitter"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
				</li>

				<li>
					<SocialIcon
						url="https://www.youtube.com"
						network="youtube"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
