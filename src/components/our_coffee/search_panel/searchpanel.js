import React, { Component } from 'react'
import './search_panel.sass'
import { ButtonFilter } from '../../UI/ButtonMore'

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

export default SearchPanel
