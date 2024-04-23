import React, { Component } from 'react'
import { ButtonPaginationNext, ButtonPaginationPrev } from '../../UI/ButtonMore'
import GoodItem from '../GoodItem/GoodItem'

import './GoodsList.sass'

const GOODS_PER_PAGE = 6 // Количество товаров на странице

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

export default GoodsList
