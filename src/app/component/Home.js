"use client"
import Header from "./Header";
import "../css/home.css";
import "../css/about.css";
import home_background from "../img/home_background.jpg"
import Profile_Picture from "./Profile_Picture";
import AboutMe from "./button/AboutMe";
import About from "./About";
import Project from "./Project";

import { useEffect, useState } from "react";
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
                        <h2>i'm om salunke</h2>
                        <p id='skill_name'>I'm <span id="skill_name_span">{h1}</span>
                        </p>
                        <AboutMe />                    </div>
                    <div class='social_media_link'>
                        <div class='social_media_btn'><i class="fa-brands fa-whatsapp"></i></div>
                        <div class='social_media_btn'><i class="fa-brands fa-youtube"></i></div>
                        <div class='social_media_btn'><i class="fa-brands fa-twitter"></i></div>
                        <div class='social_media_btn'><i class="fa-brands fa-instagram"></i></div>
                        <div class='social_media_btn'><i class="fa-brands fa-facebook"></i></div>
                    </div>
                </div>
                <Profile_Picture />
            </div>
            <div style={{ width: "100%", height: "100vh" }} id="about">
                <About />
            </div>
            <div id="projects">
                <Project />
            </div>
        </div>


    );
}
