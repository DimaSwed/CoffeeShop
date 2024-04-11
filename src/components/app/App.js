import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CofeeHouse from '../coffee_house/CofeeHouse'
import OurCoffee from '../our_coffee/OurCoffee'
import ForYourPleasure from '../for_your_pleasure/ForYourPleasure'

import './App.sass'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			goods: [
				{
					preview: 'coffe-1.png',
					salary: '10.73',
					name: 'Solimo Coffee Beans 2 kg',
					country: 'Brazil',
					top: true,
					id: 1,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					preview: 'coffe-1.png',
					salary: '6.99',
					name: 'Solimo Coffee Beans 1 kg',
					country: 'Brazil',
					top: false,
					id: 2,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				},
				{
					preview: 'coffe-2.png',
					salary: '6.99',
					name: 'Presto Coffee Beans 1 kg',
					country: 'Brazil',
					top: false,
					id: 3,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					preview: 'coffe-2.png',
					salary: '15.99',
					name: 'Presto Coffee Beans 2 kg',
					country: 'Brazil',
					top: true,
					id: 4,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				},
				{
					preview: 'coffe-3.png',
					salary: '6.99',
					name: 'AROMISTICO Coffee 1 kg',
					country: 'Brazil',
					top: true,
					id: 5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					preview: 'coffe-3.png',
					salary: '6.99',
					name: 'AROMISTICO Coffee 1 kg',
					country: 'Kenya',
					top: false,
					id: 6,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				},
				{
					preview: 'coffe-3.png',
					salary: '6.99',
					name: 'AROMISTICO Coffee 1 kg',
					country: 'Columbia',
					top: false,
					id: 7,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					preview: 'coffe-3.png',
					salary: '10.99',
					name: 'AROMISTICO Coffee 2 kg',
					country: 'Brazil',
					top: false,
					id: 8,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				},
				{
					preview: 'coffe-3.png',
					salary: '10.99',
					name: 'AROMISTICO Coffee 2 kg',
					country: 'Kenya',
					top: false,
					id: 9,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					preview: 'coffe-3.png',
					salary: '10.99',
					name: 'AROMISTICO Coffee 2 kg',
					country: 'Columbia',
					top: false,
					id: 10,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				}
			],
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
					</Routes>
				</div>
			</Router>
		)
	}
}

export default App
