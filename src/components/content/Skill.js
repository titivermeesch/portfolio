import React, { useEffect } from 'react'
import './../styles/Skills.css'

let items = null

const Skill = ({ skill }) => {
	const callbackFunc = () => {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])) {
				items[i].classList.add('in-view')
			} else {
				items[i].classList.remove('in-view')
			}
		}
	}

	const isElementInViewport = el => {
		var rect = el.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	useEffect(() => {
		window.addEventListener('load', e => callbackFunc(), true)
		window.addEventListener('resize', e => callbackFunc(), true)
		window.addEventListener('scroll', e => callbackFunc(), true)
		items = document.querySelectorAll('.meter .skill-filler')
	})

	const { id, name, progression } = skill

	return (
		<div className="meter" key={id}>
			<div style={{ width: `${progression}%` }} className="skill-filler">
				{name}
			</div>
		</div>
	)
}

export default Skill
