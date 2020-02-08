import React, { Component } from 'react'
import './../styles/Timeline.css'
import HeadTitle from '../common/HeadTitle'

let items = null

class Timeline extends Component {
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
		items = document.querySelectorAll('.timeline li')
	}

	render() {
		return (
			<div>
				<HeadTitle>My timeline</HeadTitle>
				<section className="timeline">
					<ul>
						<li>
							<div>
								<time>August 2000</time> Born in a little village in Flanders Belgium.
								Grown up there with my parents working in their Horeca business
							</div>
						</li>
						<li>
							<div>
								<time>August 2007</time> I moved into Wallonia, the French part of
								Belgium. I still live there now so I speak perfectly French along with
								English and Dutch
							</div>
						</li>
						<li>
							<div>
								<time>September 2012</time> I entered Instutit Notre-Dame de Beauraing
								with the goal to achieve a Certificate of Higher Secondary Education
							</div>
						</li>
						<li>
							<div>
								<time>September 2014</time> I entered Informatics at INDBG (an expansion
								of the Higher Secondary Education) and started learning all the
								programmation basics
							</div>
						</li>
						<li>
							<div>
								<time>June 2018</time> I left INDBG with a good knowledge of web
								development
							</div>
						</li>
						<li>
							<div>
								<time>October 2018</time> Started the{' '}
								<strong>Full Stack Developer</strong> path at{' '}
								<strong>OpenClassrooms</strong>.
							</div>
						</li>
						<li>
							<div>
								<time>January 2019</time> Started as an intern at <strong>PinUp</strong>
							</div>
						</li>
						<li>
							<div>
								<time>January 2019</time> Stopped as an intern at <strong>PinUp</strong>{' '}
								due to illegal activities (not paying,...)
							</div>
						</li>
						<li>
							<div>
								<time>October 2019</time> Started as Full Stack Developer at{' '}
								<strong>IDRONECT</strong>
								<br /> I just live it
							</div>
						</li>
					</ul>
				</section>
			</div>
		)
	}
}

export default Timeline
