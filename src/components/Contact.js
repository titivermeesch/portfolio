import React from 'react'
import styled from 'styled-components'
import HeadTitle from './HeadTitle'

const Styled = styled.div`
	display: grid;
	justify-content: center;
	text-align: center;
	background-color: #3b2349;
`

const Contact = () => {
	return (
		<Styled>
			<HeadTitle>Contact me</HeadTitle>
			<div className="intro">
				<p>Feel free to contact me if you want to get in touch with me!</p>
				<h1>titivermeesch@gmail.com</h1>
			</div>
		</Styled>
	)
}

export default Contact
