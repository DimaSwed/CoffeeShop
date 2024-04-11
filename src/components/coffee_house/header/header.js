import './header.sass'
import ButtonMore from '../../UI/ButtonMore'
import NavPanel from '../../UI/NavPanel'

const SeparatorWhite = () => {
	return (
		<div className="separator_white">
			<img src="/assets/icons/Beans logo.svg" alt="beans-icon" />
		</div>
	)
}

const HeaderInner = () => {
	return (
		<div className="header__start_content">
			<h1>Everything You Love About Coffee</h1>
			<SeparatorWhite />
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<ButtonMore />
		</div>
	)
}

const Header = () => {
	return (
		<header className="header__start">
			<div className="container">
				<div className="header__start_inner">
					<NavPanel
						textColor="white"
						style={{ marginBottom: '111px' }}
					/>
					<HeaderInner />
				</div>
			</div>
		</header>
	)
}

export default Header
export { SeparatorWhite }
