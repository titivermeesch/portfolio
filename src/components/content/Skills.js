import React from 'react'
import './../styles/Skills.css'
import Skill from './Skill'
import HeadTitle from '../common/HeadTitle'

const Skills = () => {
	const skills = [
		{
			id: 1,
			name: 'HTML',
			progression: 95,
		},
		{
			id: 2,
			name: 'CSS',
			progression: 90,
		},
		{
			id: 3,
			name: 'JS',
			progression: 90,
		},
		{
			id: 4,
			name: 'React',
			progression: 85,
		},
		{
			id: 10,
			name: 'Axios',
			progression: 45,
		},
		{
			id: 5,
			name: 'Java',
			progression: 35,
		},
		{
			id: 6,
			name: 'Spigot',
			progression: 75,
		},
		{
			id: 7,
			name: 'Git',
			progression: 90,
		},
		{
			id: 8,
			name: 'JSON',
			progression: 99,
		},
		{
			id: 9,
			name: 'DeckGL',
			progression: 20,
		},
	]

	return (
		<>
			<HeadTitle>Skills</HeadTitle>
			{skills.map(skill => (
				<Skill skill={skill} />
			))}
		</>
	)
}

export default Skills
