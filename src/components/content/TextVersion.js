import React, { Component } from 'react'
import './../styles/TextVersion.css'

class TextVersion extends Component {
    render() {
        return (
            <div className="textversion">
                <h1>Resume</h1>
                <div className="introduction">
                    I'm Tristan Vermeesch, an 18 years old student at OpenClassRooms in Paris.
                    I'm studying FullStack Developer along with a lot of self learning.
                    In a short, the main goal is to become a person,
                    someone in the world, traveling waves of code If you want some more information about me, knowing my life and stuff,
                    you better read everything below this.<br /><br />
                    In short works: Thinker | Creator | Lover | Developer
                </div>
                <h3>Timeline</h3>
                <div>
                    In the year 2000, I grow up as a little kid in a little village in Flanders with my parents that were running a well doing Restaurant.<br />
                    In August 2007, we moved to the French part of Belgium. Due to that I speak perfectly French along with Dutch and English.<br />
                    In September 2012, I entered Institut Notre-Dame de Beauraing with the goal to obtain a Certificate of Higher Secondary Education.<br />
                    In September 2014, I started Informatics at INDBG (An expansion of the Higher Secondary Education) and starting learning all the programmation basics and even further.<br />
                    In June 2018, I quit INDBG with a good knowledge of web development.<br />
                    In October 2018, I started the <strong>Full Stack Developer</strong> path at <strong>OpenClassrooms</strong> to have better my knowledge and perfect in unkown domains.<br />
                    In January 2019, I finaly found a place to practice my already achieved knowledge. Let's give <strong>PinUp</strong> a try.
                </div>
                <h3>Projects</h3>
                <div>
                    LiquidMC was a project that started in 2012 and stopped in 2018 due to lack of time and financial issues. This was a Minecraft network made with the players for the players, everything based on Java and the SpigotAPI. I had been working on this a pretty long time but due to a lack of time, money and not a 100% knowledge of Java the team working on it stopped it, with maybe the idea to start it again one day.
                </div><br /><br />
                <div>
                    A recipe book: This is an ongoing personal project that I started in paralel with school. The main goal is to make an application that is completely stand-alone where you can add recipes. The application will help you made the recipe and show you how many calories and vitamins you will get from what you eat. Everything in a flat stiligh web application in ReactJS.
                </div>
                <div>
                    My portfolio: This is pretty obivous I think, you are right in it. This project is a work that needed to be done for OpenClassrooms, but I'm still updating it when needed with new features. If I learn something new I'll probably showcase it here to share my experience with the visitors here.
                </div>
                <h3>My coding skills</h3>
                <h4>Remember that these numbers aren't precise. Just so you have an idea</h4>
                <ul>
                    <li>
                        HTML: 95%
                    </li>
                    <li>
                        CSS: 85%
                    </li>
                    <li>
                        Javascript: 78%
                    </li>
                    <li>
                        ReactJS: 42%
                    </li>
                    <li>
                        Java: 25%
                    </li>
                    <li>
                        SpigotAPI: 65%
                    </li>
                    <li>
                        Git: 84%
                    </li>
                </ul>
                <h3>My certificates</h3>
                <h4>Here are my official certificates delivered by OpenClassrooms. You can download them in the normal view of my portfolio</h4>
                <ul>
                    <li>Web Understanding</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
        )
    }
}

export default TextVersion
