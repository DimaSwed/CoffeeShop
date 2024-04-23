import NavPanel from '../../UI/NavPanel'
import { SeparatorBlack } from '../../UI/Separators'

import './Footer.sass'

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer__inner">
					<NavPanel
						textColor="black"
						style={{ marginBottom: '30px' }}
					/>
					<SeparatorBlack />
				</div>
			</div>
		</footer>
	)
}

export { Footer }
