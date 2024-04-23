import React, { Component } from 'react'
// import { SeparatorBlack } from '../../CoffeeHouse/CofeeHouse'
import { SeparatorBlack } from '../../UI/Separators'

import './AboutInner.sass'

class AboutInner extends Component {
	render() {
		const { headName, goodImg } = this.props
		return (
			<>
				<div className="about__inner">
					<div className="about__inner_img">
						<img src={`/assets/img/${goodImg}`} alt="goods"></img>
					</div>

					<div className="about__inner_content">
						<h2>About {headName}</h2>
						<SeparatorBlack />
						<div className="about__inner_content-text">
							Extremity sweetness difficult behaviour he of. On
							disposal of as landlord horrible.
							<br />
							<br />
							Afraid at highly months do things on at. Situation
							recommend objection do intention <br />
							so questions. <br />
							As greatly removed calling pleased improve an. Last
							ask him cold feel <br />
							met spot shy want. Children me laughing we <br />
							prospect answered followed. At it went <br /> is
							song that held help face.
						</div>
					</div>
				</div>
				<div className="separator_line"></div>
			</>
		)
	}
}

export default AboutInner
