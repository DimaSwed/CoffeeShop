import { Component } from 'react'
import Header from './header/header'
import AboutUs from './about/aboutus'
import Products from './products/products'
import Footer from './footer/footer'

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
