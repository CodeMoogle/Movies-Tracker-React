import React, { useContext, useEffect } from 'react'

import { MoviesContext } from './context/movies/moviesContext'

import Header from './components/Header/Header'
import MovieCard from './components/MovieCard/MovieCard'
import Loader from './components/Loader/Loader'

function App() {
	const { movies, fetchMovies, isLoading } = useContext(MoviesContext)

	useEffect(() => {
		fetchMovies()
	}, [fetchMovies])
	return (
		<div className='app'>
			<Header />
			<div className='movie-container'>
				{isLoading ? <Loader /> : null}
				{movies.length ? movies.map(movie => <MovieCard movie={movie} key={movie.id} />) : null}
			</div>
		</div>
	)
}

export default App
