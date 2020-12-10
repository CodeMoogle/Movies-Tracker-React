import React from 'react'

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
	const { title, poster_path, vote_average } = movie

	return (
		<div className='movie-card'>
			<div className='movie-card__poster'>
				<img src={IMG_BASE_URL + poster_path} alt={title} />
			</div>
			<span className='movie-card__rating'>
				{vote_average}
				{vote_average % 1 === 0 ? '.0' : null}
			</span>
		</div>
	)
}

export default MovieCard
