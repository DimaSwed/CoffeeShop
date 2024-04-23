import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.sass'

const NotFound = () => {
	return (
		<div className="notFound__container">
			<h1>Упс! Похоже, вы заблудились.</h1>
			<p>Вот несколько полезных ссылок:</p>
			<div className="notFound__link-wrapper">
				<Link to="/">Home</Link>
				<Link to="/our-coffee">Our Coffee</Link>
				<Link to="/for-your-pleasure">For your pleasure</Link>
			</div>
		</div>
	)
}

export default NotFound
