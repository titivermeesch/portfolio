import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
	.introduction {
		margin-top: 3%;
		padding: 20px;
		display: grid;
		text-align: center;
		background-color: #3b2349;

		@media screen and (max-width: 600px) {
			font-size: 1.2rem;
		}

		@media screen and (min-width: 600px) {
			font-size: 1.3rem;
		}

		@media screen and (min-width: 992px) {
			font-size: 1.5rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 1.8rem;
		}
	}
`

const Introduction = () => {
	return (
		<Styled>
			<div className="introduction">
				I'm Tristan Vermeesch, an 19 years old developer that studied at OpenClassRooms in
				Paris.
				<br />
				I'm a FullStack Developer along with a lot of self learning. In a short, the main
				goal is to become a person, <br />
				someone in the world, traveling waves of code.
				<br />
				If you want some more information about me, knowing my life and stuff,
				<br /> you better read everything below this.
			</div>
		</Styled>
	)
}

export default Introduction
