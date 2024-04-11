import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavPanel.module.sass'

const NavPanel = ({ textColor, style, ...rest }) => {
	const textClass = textColor === 'white' ? classes.white : classes.black
	const iconColor = textColor === 'white' ? 'white' : 'black'

	return (
		<nav className={classes.nav_links} style={style} {...rest}>
			<NavLink to="/" className={`${classes.nav_link} ${textClass}`}>
				<img
					src={`/assets/icons/coffee-icon-${iconColor}.svg`}
					alt="coffee-icon"
				/>
				Coffee house
			</NavLink>
			<NavLink
				to="/our-coffee"
				className={`${classes.nav_link} ${textClass}`}
			>
				Our coffee
			</NavLink>
			<NavLink
				to="/for-your-pleasure"
				className={`${classes.nav_link} ${textClass}`}
			>
				For your pleasure
			</NavLink>
		</nav>
	)
}

export default NavPanel
