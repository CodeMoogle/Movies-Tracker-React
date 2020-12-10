import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

import { MoviesState } from './context/movies/moviesContext'

ReactDOM.render(
	<React.StrictMode>
		<MoviesState>
			<App />
		</MoviesState>
	</React.StrictMode>,
	document.getElementById('root')
)
