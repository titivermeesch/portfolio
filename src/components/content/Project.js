import React, { Component } from 'react'
import lmc from './../../data/lmc.png'
import recipe from './../../data/recipe.png'
import portfolio from './../../data/portfolio.png'

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    id: 1,
                    title: 'LiquidMC',
                    desc: 'LiquidMC was a project that started in 2012 and stopped in 2018 due to lack of time and financial issues. This was a Minecraft network made with the players for the players, everything based on Java and the SpigotAPI. I had been working on this a pretty long time but due to a lack of time, money and not a 100% knowledge of Java the team working on it stopped it, with maybe the idea to start it again one day.',
                    img: lmc
                },
                {
                    id: 2,
                    title: 'Recipe Book',
                    desc: 'This is an ongoing personal project that I started in paralel with school. The main goal is to make an application that is completely stand-alone where you can add recipes. The application will help you make the recipe and show you how many calories and vitamins you will get from what you eat. Everything in a flat stiligh web application in ReactJS.',
                    img: recipe
                },
                {
                    id: 3,
                    title: 'Portfolio',
                    desc: 'This is pretty obivous I think, you are right in it. This project is a work that needed to be done for OpenClassrooms, but I\'m still updating it when needed with new features. If I learn something new I\'ll probably showcase it here to share my experience with the visitors here. ',
                    img: portfolio
                }
            ]
        }
    }

    render() {
        return this.state.projects.map(({ id, title, desc, img }) => (
            <div key={id} className="project-holder">
                <img className="project-img" src={img} alt="Project" />
                <div>
                    <div className="project-title">{title}</div>
                    <div className="project-desc">{desc}</div>
                </div>
            </div>
        ))
    }
}

export default Project
