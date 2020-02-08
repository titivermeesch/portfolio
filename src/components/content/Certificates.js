import React from 'react'
import styled from 'styled-components'
import './../styles/Certificates.css'
import Certificate from './Certificate'

const Styled = styled.div`
	.title {
		text-align: center;
		letter-spacing: 2px;
		margin-top: 100px;

		@media screen and (min-width: 992px) {
			font-size: 3rem;
		}

		@media screen and (min-width: 1200px) {
			font-size: 4rem;
		}
	}
`

const Certificates = () => {
	return (
		<Styled>
			<h1 className="title">Certificates</h1>
			<div className="introduction">
				Certificates are proof of the knowledge around a subject.
				<br />
				Since I am using OpenClassrooms, I receive officiel certificates every time I
				complete a skill with success. Some of my skills may be perfect but don't have a
				certificate shown here. You can refer to my projects for that.
			</div>
			<div className="certificates">
				<Certificate />
			</div>
		</Styled>
	)
}

export default Certificates
