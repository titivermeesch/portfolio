import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
	.project-holder {
		width: 70%;
		margin: auto;
		margin-bottom: 8%;
		background-color: #3b2349;
		padding: 12px;
	}

	.project-img {
		border-radius: 50%;
		margin: 10px;
		width: 240px;
		height: auto;
		transition: 0.8s;
	}

	.project-holder .project-img {
		float: left;
	}

	.project-title {
		font-size: 1.6rem;
	}

	.project-desc {
		font-size: 1.2rem;
	}

	.project-img:hover {
		transition: 0.4s;
		margin-top: -20px;
	}

	@media screen and (max-width: 992px) {
		.project-holder .project-img {
			float: none;
			display: block;
			margin-left: auto;
			margin-right: auto;
			margin-top: -30px;
		}

		.project-title {
			text-align: center;
			font-size: 1.8rem;
		}
	}
`

const Project = ({ project }) => {
	const { id, title, desc, img } = project

	return (
		<Styled>
			<div key={id} className="project-holder">
				<img className="project-img" src={img} alt="Project" />
				<div>
					<div className="project-title">{title}</div>
					<div className="project-desc">{desc}</div>
				</div>
			</div>
		</Styled>
	)
}

export default Project
