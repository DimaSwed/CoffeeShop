import { Component } from 'react'
import HeaderAbout from './header/header'
import AboutInner from './about/about'
import SearchPanel from './search_panel/searchpanel'
import GoodsList from './good_list/goodlist'
import Footer from '../coffee_house/footer/footer'

import GoodsItemDescription from './good_description/goodsitem_description'

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
