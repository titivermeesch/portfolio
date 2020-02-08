import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
	.bio {
		color: white;
		display: grid;
		justify-content: center;
		font-size: 2.5vw;

		@media screen and (max-width: 600px) {
			font-size: 5vw;
		}
	}
`

const Bio = () => {
	return (
		<Styled>
			<div className="bio">Thinker | Creator | Lover | Developer</div>
		</Styled>
	)
}

export default Bio
