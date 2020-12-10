import { FETCH_MOVIES, SET_LOADING } from '../typeConsts'

export default function moviesReducer(state, action) {
	switch (action.type) {
		case FETCH_MOVIES:
			return { ...state, movies: action.payload, isLoading: false }
		case SET_LOADING:
			return { ...state, isLoading: true }
		default:
			return state
	}
}
