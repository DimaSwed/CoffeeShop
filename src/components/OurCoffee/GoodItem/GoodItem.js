import React, { Component } from 'react'

import './GoodItem.sass'

class GoodItem extends Component {
	render() {
		return (
			<>
				<a href="#">
					<img
						src={`assets/img/${this.props.item.preview}`}
						alt="goods"
						className="goods__item-img"
					/>
					<div className="goods__item-name">
						{this.props.item.name}
					</div>
					<div className="goods__item-country">
						{this.props.item.country}
					</div>
					<div className="goods__item-price">
						{this.props.item.salary}
					</div>
				</a>
			</>
		)
	}
}

export default GoodItem
