import ProductItem from './product_item'

import './products.sass'

const Products = ({ goods }) => {
	const elements = goods.map(item => {
		const { id, ...productItems } = item
		if (item.top) {
			return <ProductItem key={id} {...productItems} />
		}
		return null
	})

	return (
		<div className="products">
			<div className="container">
				<div className="products__inner">
					<h2>Our best</h2>
					<div className="products__items">{elements}</div>
				</div>
			</div>
		</div>
	)
}

export default Products
