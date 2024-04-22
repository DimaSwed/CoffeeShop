import React, { Component } from 'react'
import { HeaderAbout } from '../our_coffee/OurCoffee'
import { Footer } from '../coffee_house/CofeeHouse'
import { SeparatorBlack } from '../coffee_house/CofeeHouse'
import './GoodsDescription.sass'

class GoodsItemDescription extends Component {
	render() {
		const { country, salary, description } = this.props.goods || {}

		return (
			<div className="goods__item-description">
				<div className="goods__item-description_img">
					<img src="/assets/img/item-img.png" alt="goods item"></img>
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

class GoodsItem extends Component {
	render() {
		const { goods } = this.props

		return (
			<>
				<HeaderAbout pageName={'Our Coffee'} />
				<div className="about">
					<div className="container">
						<GoodsItemDescription goods={goods} />
					</div>
				</div>
				<Footer />
			</>
		)
	}
}

export default GoodsItem
export { GoodsItemDescription }
