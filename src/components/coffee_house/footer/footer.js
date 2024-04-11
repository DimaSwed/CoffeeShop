import './footer.sass'
import NavPanel from '../../UI/NavPanel'
import { SeparatorBlack } from '../about/aboutus'

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

export default Footer
