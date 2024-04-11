import React, { Component } from 'react'
import './goods_description.sass'
import { SeparatorBlack } from '../../coffee_house/about/aboutus'

export default class GoodsItemDescription extends Component {
	constructor(props) {
		super(props)
		this.state = {
			country: props.goods.country,
			salary: props.goods.salary,
			description: props.goods.description
		}
	}
	render() {
		const { country, salary, description } = this.state

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
