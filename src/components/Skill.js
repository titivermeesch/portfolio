import React, { useEffect } from 'react'
import styled from 'styled-components'

let items = null

const Styled = styled.div`
	.meter {
		height: 50px;
		width: 65%;
		margin: auto;
		margin-bottom: 15px;
		position: relative;
		border-radius: 25px;
		padding: 5px;
		border: #3b2349 solid 5px;
	}

	.skill-filler {
		padding: 4px;
		padding-left: 12px;
		height: 100%;
		border-radius: 20px;
		background-color: #3b2349;
		animation: hid 3.5s ease-out;
	}

	.skill-filler.in-view {
		animation: anim 2.6s ease-in-out;
		visibility: visible;
	}

	@keyframes anim {
		0% {
			width: 0px;
		}
	}

	@keyframes hid {
		0% {
		}

		100% {
			width: 0px;
		}
	}
`

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
		<Styled>
			<div className="meter" key={id}>
				<div style={{ width: `${progression}%` }} className="skill-filler">
					{name}
				</div>
			</div>
		</Styled>
	)
}

export default Skill
