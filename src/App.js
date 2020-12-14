import React from 'react'

import Header from './components/Header/Header'
import MovieContainer from './components/MovieContainer/MovieContainer'

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app-content'>
				<MovieContainer />
			</div>
		</div>
	)
}

export default App
