import React, { Component } from 'react'
import { ButtonFilter } from '../UI/ButtonMore'

export class CountriesFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			countries: [
				{
					key: '1',
					country: 'Brazil'
				},
				{
					key: '2',
					country: 'Kenya'
				},
				{
					key: '3',
					country: 'Columbia'
				}
			]
		}
	}

	render() {
		return (
			<div className="searchpanel_filter">
				<p>Or filter:</p>
				{this.state.countries.map(el => (
					<ButtonFilter
						key={el.key}
						type="button"
						text={el.country}
						onClick={() => this.props.chooseCountry(el.country)}
					/>
				))}
			</div>
		)
	}
}

export default CountriesFilter
