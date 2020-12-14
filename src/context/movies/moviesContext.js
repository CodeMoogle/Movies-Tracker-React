import React, { createContext, useReducer, useCallback } from 'react'
import axios from 'axios'

import moviesReducer from './moviesReducer'

import { FETCH_MOVIES, SET_LOADING } from '../typeConsts'

export const MoviesContext = createContext()

export const MoviesState = ({ children }) => {
	const initialState = {
		movies: [],
		isLoading: false,
	}

	const [state, dispatch] = useReducer(moviesReducer, initialState)
	const { movies, isLoading } = state

	const getCurrentDate = () => {
		const date = new Date().toISOString().slice(0, 10)

		console.log('date', date)
	}

	// db urls
	const DB_URL = 'https://api.themoviedb.org/3/'

	const fetchMovies = useCallback(async () => {
		getCurrentDate()
		dispatch({ type: SET_LOADING })
		await axios
			.get(`${DB_URL}discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`)
			.then(response => dispatch({ type: FETCH_MOVIES, payload: response.data.results }))
	}, [])

	return (
		<MoviesContext.Provider
			value={{
				movies,
				isLoading,
				fetchMovies,
			}}
		>
			{children}
		</MoviesContext.Provider>
	)
}
