import React from 'react'

import placeholder from '../../assets/placeholders/movie-card.png'

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
	const { title, poster_path, vote_average } = movie

	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w400'

	return (
		<div className='movie-card'>
			<div className='movie-card__poster'>
				<img src={IMG_BASE_URL + poster_path} alt={title} />
			</div>
			<span className='movie-card__rating'>
				{vote_average}
				{vote_average % 1 === 0 ? '.0' : null}
			</span>
			<p className='movie-card__title'>{title}</p>
		</div>
	)
}

export default MovieCard
