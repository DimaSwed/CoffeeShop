import React, { Component } from 'react'
import { SeparatorBlack } from '../../UI/Separators'

import './GoodsItemDescription.sass'

class GoodsItemDescription extends Component {
	render() {
		const { goods } = this.props
		const { country, salary, description } = goods

		return (
			<div className="goods__item-description">
				<div className="goods__item-description_img">
					<img src="/assets/img/item-img.png" alt="goods item" />
				</div>

				<div className="goods__item-description_content">
					<h2>About it</h2>
					<SeparatorBlack />
					<figcaption>
						<span>Country:</span> {country}
					</figcaption>
					<figcaption>
						<span>Description</span>
						{description}
					</figcaption>
					<figcaption>
						<span>Price:</span> {salary}
					</figcaption>
				</div>
			</div>
		)
	}
}

export default GoodsItemDescription
