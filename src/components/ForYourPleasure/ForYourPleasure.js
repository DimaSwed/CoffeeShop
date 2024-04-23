import { Component } from 'react'
import { HeaderAbout } from '../OurCoffee/OurCoffee'
import { AboutInner } from '../OurCoffee/OurCoffee'
import { GoodsList } from '../OurCoffee/OurCoffee'
import { Footer } from '../CoffeeHouse/CofeeHouse'

import { GoodsItemDescription } from '../GoodsDescription/GoodsDescription'

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
