import React, { Component } from 'react'
import classes from './Buttons.module.sass'

const ButtonMore = () => {
	return <button className={classes.button__more}>More</button>
}

class ButtonFilter extends Component {
	render() {
		const { type, text, onClick } = this.props
		return (
			<>
				<button
					className={classes.button__filter}
					type={type}
					onClick={onClick}
				>
					{text}
				</button>
			</>
		)
	}
}

const ButtonPaginationPrev = ({ onClick, disabled }) => {
	return (
		<button
			className={classes.button__pagination}
			onClick={onClick}
			disabled={disabled}
		>
			Prev
		</button>
	)
}

const ButtonPaginationNext = ({ onClick, disabled }) => {
	return (
		<button
			className={classes.button__pagination}
			onClick={onClick}
			disabled={disabled}
		>
			Next
		</button>
	)
}

export default ButtonMore
export { ButtonFilter, ButtonPaginationPrev, ButtonPaginationNext }
