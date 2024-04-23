import React, { Component } from 'react'
import HeaderAbout from './HeaderAbout/HeaderAbout'
import AboutInner from './AboutInner/AboutInner'
import GoodsItemDescription from './GoodsItemDescription/GoodsItemDescription'
import GoodsList from './GoodsList/GoodsList'
import SearchPanel from './SearchPanel/SearchPanel'
import { Footer } from '../CoffeeHouse/Footer/Footer'

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
