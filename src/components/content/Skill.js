import React, { Component } from 'react'
import './../styles/Skills.css'

let items = null

class Skill extends Component {
	constructor(props) {
		super(props)
		this.state = {
			skills: [
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
			],
		}
	}

	isElementInViewport = el => {
		var rect = el.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	callbackFunc = () => {
		for (var i = 0; i < items.length; i++) {
			if (this.isElementInViewport(items[i])) {
				items[i].classList.add('in-view')
			} else {
				items[i].classList.remove('in-view')
			}
		}
	}

	componentDidMount() {
		window.addEventListener('load', e => this.callbackFunc(), true)
		window.addEventListener('resize', e => this.callbackFunc(), true)
		window.addEventListener('scroll', e => this.callbackFunc(), true)
		items = document.querySelectorAll('.meter .skill-filler')
	}

	render() {
		return this.state.skills.map(({ id, name, progression }) => (
			<div className="meter" key={id}>
				<div style={{ width: `${progression}%` }} className="skill-filler">
					{name}
				</div>
			</div>
		))
	}
}

export default Skill
