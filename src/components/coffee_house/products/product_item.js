import './products.sass'

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

export default ProductItem
