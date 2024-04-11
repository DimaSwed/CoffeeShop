import { Component } from 'react'
import { HeaderAbout } from '../our_coffee/OurCoffee'
import { AboutInner } from '../our_coffee/OurCoffee'
import { GoodsList } from '../our_coffee/OurCoffee'
import { Footer } from '../coffee_house/CofeeHouse'

import { GoodsItemDescription } from '../goods_description/GoodsDescription'

class ForYourPleasure extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedItem: null,
			showDescription: false
		}
	}

	handleItemSelected = item => {
		this.setState({ selectedItem: item, showDescription: true })
	}

	render() {
		const { goods } = this.props
		const { selectedItem, showDescription } = this.state

		return (
			<>
				<HeaderAbout pageName={'For your pleasure'} />
				<div className="about">
					<div className="container">
						{showDescription ? (
							<GoodsItemDescription goods={selectedItem} />
						) : (
							<>
								<AboutInner
									goods={goods}
									headName={'our goods'}
									goodImg={'goods-coffee.png'}
								/>
								<GoodsList
									goods={goods}
									onSelect={this.handleItemSelected}
								/>
							</>
						)}
					</div>
				</div>
				<Footer />
			</>
		)
	}
}

export default ForYourPleasure
