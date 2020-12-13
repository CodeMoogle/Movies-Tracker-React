import React, { useContext, useEffect } from 'react'

import { MoviesContext } from './context/movies/moviesContext'

import MovieCard from './components/MovieCard/MovieCard'

function App() {
	const { movies, fetchMovies } = useContext(MoviesContext)

	useEffect(() => {
		fetchMovies()
	}, [])
	return (
		<div className='App'>
			<div className='movie-container'>
				{movies.length ? movies.map(movie => <MovieCard movie={movie} key={movie.id} />) : null}
			</div>
		</div>
	)
}

export default App
