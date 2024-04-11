import { Component } from 'react'
import { useState } from 'react'
import { SeparatorBlack } from '../coffee_house/CofeeHouse'
import NavPanel from '../UI/NavPanel'
import { ButtonPaginationNext, ButtonPaginationPrev } from '../UI/ButtonMore'
import { ButtonFilter } from '../UI/ButtonMore'
import { Footer } from '../coffee_house/CofeeHouse'

import './ourcoffee.sass'

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

const GOODS_PER_PAGE = 6 // Количество товаров на странице

const GoodsList = ({ goods, onSelect }) => {
	const [currentPage, setCurrentPage] = useState(1)

	// Вычисляем индексы товаров, которые будут отображаться на текущей странице
	const indexOfLastGoods = currentPage * GOODS_PER_PAGE
	const indexOfFirstGoods = indexOfLastGoods - GOODS_PER_PAGE
	const currentGoods = goods.slice(indexOfFirstGoods, indexOfLastGoods)

	const goToPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const goToNextPage = () => {
		if (indexOfLastGoods < goods.length) {
			setCurrentPage(currentPage + 1)
		}
	}

	return (
		<div>
			<ul className="goods__list">
				{currentGoods.map(item => (
					<li
						key={item.id}
						className="goods__item"
						onClick={() => onSelect(item)}
					>
						<a href="#">
							<img
								src={`assets/img/${item.preview}`}
								alt="goods"
								className="goods__item-img"
							/>
							<div className="goods__item-name">{item.name}</div>
							<div className="goods__item-country">
								{item.country}
							</div>
							<div className="goods__item-price">
								{item.salary}
							</div>
						</a>
					</li>
				))}
			</ul>
			<div className="pagination">
				<ButtonPaginationPrev
					onClick={goToPrevPage}
					disabled={currentPage === 1}
				/>
				<span>{currentPage}</span>
				<ButtonPaginationNext
					onClick={goToNextPage}
					disabled={indexOfLastGoods >= goods.length}
				/>
			</div>
		</div>
	)
}

class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		}
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
				<div className="searchpanel_filter">
					<p>Or filter:</p>
					<ButtonFilter text="Brazil" />
					<ButtonFilter text="Kenya" />
					<ButtonFilter text="Columbia" />
				</div>
			</div>
		)
	}
}

class OurCoffee extends Component {
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
		const { goods, term, filter, onUpdateSearch } = this.props
		const visibleData = this.filterPost(this.searchEmp(goods, term), filter)
		const { selectedItem, showDescription } = this.state

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
								<SearchPanel onUpdateSearch={onUpdateSearch} />
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
