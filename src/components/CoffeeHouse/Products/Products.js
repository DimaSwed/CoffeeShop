import './Products.sass'

const ProductItem = props => {
	const { preview, salary, name } = props

	return (
		<div className="products__item">
			<figure>
				<img src={`assets/img/${preview}`} alt="product preview" />
				<figcaption>{name}</figcaption>
				<figcaption>{salary}</figcaption>
			</figure>
		</div>
	)
}

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
