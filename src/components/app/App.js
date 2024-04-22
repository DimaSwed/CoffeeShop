import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CofeeHouse from '../coffee_house/CofeeHouse'
import OurCoffee from '../our_coffee/OurCoffee'
import ForYourPleasure from '../for_your_pleasure/ForYourPleasure'
import NotFound from '../NotFound/NotFound'

import goods from '../../data/goods'

import './App.sass'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			goods: goods,
			term: ''
		}
	}

	onUpdateSearch = term => {
		this.setState({ term })
	}

	render() {
		const { goods, term } = this.state
		return (
			<Router>
				<div className="App">
					<Routes>
						<Route
							path="/"
							element={<CofeeHouse goods={goods} />}
						/>

						<Route
							path="/our-coffee"
							element={
								<OurCoffee
									goods={goods}
									term={term}
									onUpdateSearch={this.onUpdateSearch}
								/>
							}
						/>
						<Route
							path="/for-your-pleasure"
							element={<ForYourPleasure goods={goods} />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		)
	}
}

export default App
