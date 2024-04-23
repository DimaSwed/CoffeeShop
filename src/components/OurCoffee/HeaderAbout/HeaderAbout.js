import React, { Component } from 'react'
import NavPanel from '../../UI/NavPanel'

import './HeaderAbout.sass'

class HeaderAboutInner extends Component {
	render() {
		const { pageName } = this.props
		return (
			<div className="header__about_content">
				<h1>{pageName}</h1>
			</div>
		)
	}
}

const HeaderAbout = ({ pageName }) => {
	return (
		<header className="header__about">
			<div className="container">
				<div className="header__about_inner">
					<NavPanel
						textColor="white"
						style={{ marginBottom: '60px' }}
					/>
					<HeaderAboutInner pageName={pageName} />
				</div>
			</div>
		</header>
	)
}

export default HeaderAbout
