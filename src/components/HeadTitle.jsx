import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
	.title {
		display: grid;
		justify-content: center;
		font-size: 5.8vw;
		margin-top: 2%;

		@media screen and (max-width: 600px) {
			font-size: 7vw;
		}
	}
`

const HeadTitle = ({ children }) => (
	<Styled>
		<div className="title">
			<strong>{children}</strong>
		</div>
	</Styled>
)

export default HeadTitle
