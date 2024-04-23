import { Component } from 'react'
// import { HeaderAbout } from '../OurCoffee/OurCoffee'
import HeaderAbout from '../OurCoffee/HeaderAbout/HeaderAbout'
import AboutInner from '../OurCoffee/AboutInner/AboutInner'
import GoodsList from '../OurCoffee/GoodsList/GoodsList'
import GoodsItemDescription from '../OurCoffee/GoodsItemDescription/GoodsItemDescription'
import { Footer } from '../CoffeeHouse/Footer/Footer'

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
