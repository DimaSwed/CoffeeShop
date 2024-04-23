import React, { Component } from 'react'
import { SeparatorBlack } from '../CoffeeHouse/CofeeHouse'
import NavPanel from '../UI/NavPanel'
import { ButtonPaginationNext, ButtonPaginationPrev } from '../UI/ButtonMore'
// import { ButtonFilter } from '../UI/ButtonMore'
import { Footer } from '../CoffeeHouse/CofeeHouse'
import CountriesFilter from './CountriesFilter'

import './OurCoffee.sass'

const GOODS_PER_PAGE = 6 // Количество товаров на странице

class HeaderAboutInner extends Component {
	render() {
		const { pageName } = this.props
		return (
			<div className="header__about_content">
				<h1>{pageName}</h1>
			</div>
		)
	}
}

const HeaderAbout = ({ pageName }) => {
	return (
		<header className="header__about">
			<div className="container">
				<div className="header__about_inner">
					<NavPanel
						textColor="white"
						style={{ marginBottom: '60px' }}
					/>
					<HeaderAboutInner pageName={pageName} />
				</div>
			</div>
		</header>
	)
}

class AboutInner extends Component {
	render() {
		const { headName, goodImg } = this.props
		return (
			<>
				<div className="about__inner">
					<div className="about__inner_img">
						<img src={`/assets/img/${goodImg}`} alt="goods"></img>
					</div>

					<div className="about__inner_content">
						<h2>About {headName}</h2>
						<SeparatorBlack />
						<div className="about__inner_content-text">
							Extremity sweetness difficult behaviour he of. On
							disposal of as landlord horrible.
							<br />
							<br />
							Afraid at highly months do things on at. Situation
							recommend objection do intention <br />
							so questions. <br />
							As greatly removed calling pleased improve an. Last
							ask him cold feel <br />
							met spot shy want. Children me laughing we <br />
							prospect answered followed. At it went <br /> is
							song that held help face.
						</div>
					</div>
				</div>
				<div className="separator_line"></div>
			</>
		)
	}
}

class GoodsItemDescription extends Component {
	render() {
		const { goods } = this.props
		const { country, salary, description } = goods

		return (
			<div className="goods__item-description">
				<div className="goods__item-description_img">
					<img src="/assets/img/item-img.png" alt="goods item" />
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

class GoodsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 1
		}
	}

	goToPrevPage = () => {
		if (this.state.currentPage > 1) {
			this.setState({ currentPage: this.state.currentPage - 1 })
		}
	}

	goToNextPage = () => {
		const { currentPage } = this.state
		const { goods } = this.props
		const indexOfLastGoods = currentPage * GOODS_PER_PAGE
		if (indexOfLastGoods < goods.length) {
			this.setState({ currentPage: currentPage + 1 })
		}
	}

	render() {
		const { goods, onSelect } = this.props
		const { currentPage } = this.state
		const indexOfLastGoods = currentPage * GOODS_PER_PAGE
		const indexOfFirstGoods = indexOfLastGoods - GOODS_PER_PAGE
		const currentGoods = goods.slice(indexOfFirstGoods, indexOfLastGoods)

		return (
			<div>
				<ul className="goods__list">
					{currentGoods.map(item => (
						<li
							key={item.id}
							className="goods__item"
							onClick={() => onSelect(item)}
						>
							<GoodItem item={item} />
						</li>
					))}
				</ul>
				<div className="pagination">
					<ButtonPaginationPrev
						onClick={this.goToPrevPage}
						disabled={currentPage === 1}
					/>
					<span>{currentPage}</span>
					<ButtonPaginationNext
						onClick={this.goToNextPage}
						disabled={indexOfLastGoods >= goods.length}
					/>
				</div>
			</div>
		)
	}
}

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
			filter: ''
		}
		this.onUpdateSearch = this.onUpdateSearch.bind(this)
	}

	onUpdateSearch = e => {
		const term = e.target.value
		this.setState({ term })
		this.props.onUpdateSearch(term)
	}

	render() {
		return (
			<div className="searchpanel">
				<div className="searchpanel_enter">
					<p>Looking for:</p>
					<input
						type="text"
						placeholder="Start typing here..."
						value={this.state.term}
						onChange={this.onUpdateSearch}
					/>
				</div>
				<CountriesFilter chooseCountry={this.props.chooseCountry} />
			</div>
		)
	}
}

class OurCoffee extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedItem: null,
			showDescription: false,
			term: '',
			filter: ''
		}
		this.handleItemSelected = this.handleItemSelected.bind(this)
		this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
		this.handleChooseCountry = this.handleChooseCountry.bind(this)
	}

	handleUpdateSearch(term) {
		this.setState({ term })
	}

	handleChooseCountry(country) {
		this.setState({ filter: country })
	}

	handleItemSelected = item => {
		this.setState({ selectedItem: item, showDescription: true })
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'Brazil':
				return items.filter(item => item.country === 'Brazil')
			case 'Kenya':
				return items.filter(item => item.country === 'Kenya')
			case 'Columbia':
				return items.filter(item => item.country === 'Columbia')
			default:
				return items
		}
	}

	render() {
		const { goods } = this.props
		const { term, filter, selectedItem, showDescription } = this.state
		const visibleData = this.filterPost(this.searchEmp(goods, term), filter)

		return (
			<>
				<HeaderAbout pageName={'Our Coffee'} />
				<div className="about">
					<div className="container">
						{!showDescription && (
							<AboutInner
								goods={goods}
								headName={'our beans'}
								goodImg={'goods.png'}
							/>
						)}
						{showDescription ? (
							<GoodsItemDescription goods={selectedItem} />
						) : (
							<>
								<SearchPanel
									onUpdateSearch={this.handleUpdateSearch}
									chooseCountry={this.handleChooseCountry}
								/>
								<GoodsList
									goods={visibleData}
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

export default OurCoffee
export { AboutInner, HeaderAbout, GoodsList, SearchPanel }
