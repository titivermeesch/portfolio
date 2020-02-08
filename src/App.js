import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import HeadTitle from './components/common/HeadTitle'
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
			<HeadTitle>I am Tristan Vermeesch</HeadTitle>
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
