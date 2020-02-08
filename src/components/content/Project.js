import React from 'react'

const Project = ({ project }) => {
	const { id, title, desc, img } = project

	return (
		<div key={id} className="project-holder">
			<img className="project-img" src={img} alt="Project" />
			<div>
				<div className="project-title">{title}</div>
				<div className="project-desc">{desc}</div>
			</div>
		</div>
	)
}

export default Project
