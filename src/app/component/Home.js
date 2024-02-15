"use client"
import Header from "./Header";
import "../css/home.css";
import "../css/about.css";
import home_background from "../img/home_background.jpg"
import Profile_Picture from "./Profile_Picture";
import AboutMe from "./button/AboutMe";
import About from "./About";
import Skill from "./Skill"
import Project from "./Project";
import ContactMe from "./ContactMe"
import github from "../img/icons8-github-30.png";
import instagram from "../img/icons8-instagram.svg";
import whatsapp from "../img/icons8-whatsapp.svg";
import linkedin from "../img/icons8-linkedin.svg";
import { useEffect, useState } from "react";
import Loaders from "./Loaders";
export default function Home() {
    const [h1, seth1] = useState(null)
    let name = ["Frontend Developer", "Backend Developer", "Blockchain Developer"];
    let countletter = 0;
    let count = 0;

    function update() {
        countletter++;
        seth1(" " + name[count].slice(0, countletter));
        if (countletter === name[count].length) {
            count++
            countletter = 0;
        }
        if (count === name.length) {
            count = 0;
        }

        setTimeout(update, 400);
    }
    useEffect(() => {
        return () => {
            update();

        }
    }, [])
    return (
        <div className="home-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="home-body">
                <div class='home_page_profile_detail'>
                    <div class='profile_detail'>
                        <h2>hi there</h2>
                        <h2>i&apos;m om salunke</h2>
                        <Loaders />
                        <p id='skill_name'>I&apos;m <span id="skill_name_span">{h1}</span>
                        </p>
                        <AboutMe />                    </div>
                    <div class='social_media_link'>
                        <div class='social_media_btn'><a href="https://github.com/om0852"><img style={{ width: "40px", height: "40px" }} src={github.src} /></a></div>
                        <div class='social_media_btn'><a href="https://wa.me/+918390471333"><img style={{ width: "40px", height: "40px" }} src={whatsapp.src} /></a></div>
                        <div class='social_media_btn'><a href="https://www.instagram.com/salunke_om0852/"><img style={{ width: "40px", height: "40px" }} src={instagram.src} /></a></div>
                        <div class='social_media_btn'><a href="https://www.linkedin.com/in/om-salunke-81bb63292/">
                            <img style={{ width: "40px", height: "40px" }} src={linkedin.src} /></a></div>
                    </div>
                </div>
                <Profile_Picture />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Project />
            </div>
            <div id="skills">
                <Skill />
            </div>
            <ContactMe />
        </div>


    );
}
