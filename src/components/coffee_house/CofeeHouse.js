import { Component } from 'react'
// import Header from './header/header'
// import AboutUs from './about/aboutus'
// import Products from './products/products'
// import Footer from './footer/footer'
import ButtonMore from '../UI/ButtonMore'
import NavPanel from '../UI/NavPanel'

import './coffeehouse.sass'

const SeparatorWhite = () => {
	return (
		<div className="separator_white">
			<img src="/assets/icons/Beans logo.svg" alt="beans-icon" />
		</div>
	)
}

const HeaderInner = () => {
	return (
		<div className="header__start_content">
			<h1>Everything You Love About Coffee</h1>
			<SeparatorWhite />
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<ButtonMore />
		</div>
	)
}

const Header = () => {
	return (
		<header className="header__start">
			<div className="container">
				<div className="header__start_inner">
					<NavPanel
						textColor="white"
						style={{ marginBottom: '111px' }}
					/>
					<HeaderInner />
				</div>
			</div>
		</header>
	)
}

const SeparatorBlack = function () {
	return (
		<div className="separator_black">
			<img src="/assets/icons/Beans logo 2.svg" alt="beans-icon" />
		</div>
	)
}

const AboutUs = () => {
	return (
		<div className="aboutus">
			<div className="container">
				<div className="aboutus__inner">
					<h2>About Us</h2>
					<SeparatorBlack />
					<p>
						Extremity sweetness difficult behaviour he of. On
						disposal of as landlord horrible. Afraid at highly
						months do things on at. Situation recommend objection do
						intention so questions. As greatly removed calling
						pleased improve an. Last ask him cold feel met spot shy
						want. Children me laughing we prospect answered
						followed. At it went is song that held help face.
						<br />
						<br />
						Now residence dashwoods she excellent you. Shade being
						under his bed her, Much read on as draw. Blessing for
						ignorant exercise any yourself unpacked. Pleasant
						horrible but confined day end marriage. Eagerness
						furniture set preserved far recommend. Did even but nor
						are most gave hope. Secure active living depend son
						repair day ladies now.
					</p>
				</div>
			</div>
		</div>
	)
}

const ProductItem = props => {
	const { preview, salary, name } = props

	return (
		<div className="products__item">
			<figure>
				<img src={`assets/img/${preview}`} alt="product preview" />
				<figcaption>{name}</figcaption>
				<figcaption>{salary}</figcaption>
			</figure>
		</div>
	)
}

const Products = ({ goods }) => {
	const elements = goods.map(item => {
		const { id, ...productItems } = item
		if (item.top) {
			return <ProductItem key={id} {...productItems} />
		}
		return null
	})

	return (
		<div className="products">
			<div className="container">
				<div className="products__inner">
					<h2>Our best</h2>
					<div className="products__items">{elements}</div>
				</div>
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer__inner">
					<NavPanel
						textColor="black"
						style={{ marginBottom: '30px' }}
					/>
					<SeparatorBlack />
				</div>
			</div>
		</footer>
	)
}
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
export { SeparatorWhite, SeparatorBlack }
