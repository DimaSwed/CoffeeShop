import { useState } from 'react'
import { ButtonPaginationPrev, ButtonPaginationNext } from '../../UI/ButtonMore'

import './goodlist.sass'

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
						<a>
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

export default GoodsList
