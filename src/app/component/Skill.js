"use client";
import "../css/skill.css";
import html from "../img/skills/html.svg";
import css from "../img/skills/css.svg"
import react from "../img/skills/react.svg";
import nodejs from "../img/skills/icons8-nodejs-windows-11-color/icons8-nodejs-48.svg";
import nextjs from "../img/skills/icons8-nextjs-48.png";
import mysql from "../img/skills/icons8-mysql.svg";
import mongodb from "../img/skills/icons8-mongodb.svg";
import solidity from "../img/skills/icons8-solidity.svg";
import reactnative from "../img/skills/icons8-react-native.svg";
import php from "../img/skills/icons8-php-30.png";
import javascript from "../img/skills/javascript.svg";
import sass from "../img/skills/sass.svg";
import "../css/about.css";

export default function Skill() {
    return (
        <div className="skill-section">
            <h2 className="skill-name">Skills</h2>
            <div class='skill_container'>
                <div class='skill_percentage'>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={html.src} style={{ width: "30px", height: "30px" }} />
                            <h4>95%</h4>
                        </div>
                        <div class='skill_bar html'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={css.src} style={{ width: "30px", height: "30px" }} />
                            <h4>93%</h4>
                        </div>
                        <div class='skill_bar css'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={javascript.src} style={{ width: "30px", height: "30px" }} />
                            <h4>90%</h4>
                        </div>
                        <div class='skill_bar javascript'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={react.src} style={{ width: "30px", height: "30px" }} />
                            <h4>87%</h4>
                        </div>
                        <div class='skill_bar reactjs'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={nextjs.src} style={{ width: "30px", height: "30px" }} />
                            <h4>83%</h4>
                        </div>
                        <div class='skill_bar nextjs'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={nodejs.src} style={{ width: "30px", height: "30px" }} />
                            <h4>90%</h4>
                        </div>
                        <div class='skill_bar nodejs'>
                            <div class=''></div>
                        </div>
                    </div>

                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={solidity.src} style={{ width: "30px", height: "30px" }} />
                            <h4>80%</h4>
                        </div>
                        <div class='skill_bar solidity'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={php.src} style={{ width: "30px", height: "30px" }} />
                            <h4>90%</h4>
                        </div>
                        <div class='skill_bar php'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={reactnative.src} style={{ width: "30px", height: "30px" }} />
                            <h4>83%</h4>
                        </div>
                        <div class='skill_bar reactnative'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={sass.src} style={{ width: "30px", height: "30px" }} />
                            <h4>89%</h4>
                        </div>
                        <div class='skill_bar sass'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={mongodb.src} style={{ width: "30px", height: "30px" }} />
                            <h4>94%</h4>
                        </div>
                        <div class='skill_bar mongodb'>
                            <div class=''></div>
                        </div>
                    </div>
                    <div class='percentage_skill'>
                        <div className="skill-img">
                            <img src={mysql.src} style={{ width: "30px", height: "30px" }} />
                            <h4>94%</h4>
                        </div>
                        <div class='skill_bar mysql'>
                            <div class=''></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}