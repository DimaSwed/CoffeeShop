import { Component } from 'react'
import Header from './Header/Header'
import AboutUs from './AboutUs/AboutUs'
import Products from './Products/Products'
import { Footer } from './Footer/Footer'

class CoffeeHouse extends Component {
	render() {
		const { goods } = this.props
		return (
			<>
				<Header />
				<AboutUs />
				<Products goods={goods} />
				<Footer />
			</>
		)
	}
}

export default CoffeeHouse
