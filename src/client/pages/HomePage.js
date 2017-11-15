import React from 'react'

const Home = () => {
	return (
		<div>
			<div>I'm the best home component</div>
			<button
				onClick={() => {
					console.log('home button clicked')
				}}
			>
				Press me!
			</button>
		</div>
	)
}

export default {
	component: Home,
}
