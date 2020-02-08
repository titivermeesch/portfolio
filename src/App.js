import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import HeadTitle from './components/HeadTitle'
import Bio from './components/Bio'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const Styled = styled.div`
	hr {
		width: 30%;
		opacity: 0.5;
	}
`

const App = () => {
	return (
		<Styled>
			<Route path="/contact" component={Contact} />
			<HeadTitle>I am Tristan Vermeesch</HeadTitle>
			<hr />
			<Bio />
			<Introduction />
			<Timeline />
			<Projects />
			<Skills />
			<Contact />
		</Styled>
	)
}

export default App
