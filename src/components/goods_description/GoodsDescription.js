import React, { Component } from 'react'
import GoodsItemDescription from './goodsitem_description'
import HeaderAbout from '../our_coffee/header/header'
import Footer from '../coffee_house/footer/footer'

export default class GoodsItem extends Component {
	render() {
		return (
			<>
				<HeaderAbout pageName={'Our Coffee'} />
				<div className="about">
					<div className="container">
						<GoodsItemDescription />
					</div>
				</div>
				<Footer />
			</>
		)
	}
}
