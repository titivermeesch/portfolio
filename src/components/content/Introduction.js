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
				I'm Tristan Vermeesch, a Full Stack Developer born in the year 2000. Maybe I'm the
				result of the bug of the year 2000...?
				<br />
				I followed the Full Stack Developer path at OpenClassrooms and that resulted in an
				awesome full time job.
				<br />
				<br /> In a short, the main goal is to become a person, someone in the world that
				leaves a positive vibe behind, traveling waves of code.
				<br />
				If you want more information about me, knowing my life and stuff,
				<br /> you better read everything below.
			</div>
		</Styled>
	)
}

export default Introduction
