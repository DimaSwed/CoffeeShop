import React, { Component } from 'react'
import CountriesFilter from '../CountriesFilter/CountriesFilter'

import './SearchPanel.sass'

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

export default SearchPanel
