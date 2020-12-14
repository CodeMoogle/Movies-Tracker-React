import React, { useState } from 'react'

import placeholder from '../../assets/placeholders/movie-card.png'

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
	const { title, poster_path, release_date, vote_average } = movie

	const [isImageLoaded, setIsImageLoaded] = useState(false)

	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w400'

	const voteColor = () => {
		if (vote_average <= 7) return 'vote__yellow'
		if (vote_average <= 5) return 'vote__gray'
		if (vote_average <= 3) return 'vote__red'
	}

	return (
		<div className='movie-card'>
			<div className='movie-card__poster'>
				{!isImageLoaded && <img src={placeholder} alt={title} />}
				<img src={IMG_BASE_URL + poster_path} alt={title} onLoad={() => setIsImageLoaded(true)} />
			</div>
			<span className={`movie-card__rating ${voteColor()}`}>
				{vote_average}
				{vote_average % 1 === 0 ? '.0' : null}
			</span>
			<span className='movie-card__release'>{release_date}</span>
			<p className='movie-card__title'>{title}</p>
		</div>
	)
}

export default MovieCard
