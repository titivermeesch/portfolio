import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Title from './components/content/Title'
import Bio from './components/content/Bio'
import Introduction from './components/content/Introduction'
import Timeline from './components/content/Timeline'
import Projects from './components/content/Projects'
import Skills from './components/content/Skills'
import Certificates from './components/content/Certificates'
import Contact from './components/content/Contact'

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
			<Title content="I am Tristan Vermeesch" />
			<hr />
			<Bio />
			<Introduction />
			<Timeline />
			<Projects />
			<Skills />
			<Certificates />
		</Styled>
	)
}

export default App
