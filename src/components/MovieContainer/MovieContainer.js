import React, { useContext, useEffect } from 'react'

import './MovieContainer.scss'

import { MoviesContext } from '../../context/movies/moviesContext'
import Loader from '../Loader/Loader'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = () => {
	const { movies, fetchMovies, isLoading } = useContext(MoviesContext)

	useEffect(() => {
		fetchMovies()
	}, [fetchMovies])

	return (
		<div className='movie-container'>
			<h2 className='movie-container__title'>Most Popular:</h2>
			<div className='movie-container__content'>
				{isLoading ? <Loader /> : null}
				{!isLoading ? movies.map(movie => <MovieCard movie={movie} key={movie.id} />) : null}
			</div>
		</div>
	)
}

export default MovieContainer
