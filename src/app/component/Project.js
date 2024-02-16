"use client";
import "../css/project.css"
import "../css/about.css";
import zomato from "../img/zomato.png"
import projectmanagement from "../img/projectManagement.png";
import bluechipart from "../img/bluechipart.png"
import linkIcon from "../img/icons8-link.gif"
export default function Project() {
    return (
        <div className="about-section">
            <h2 className="about-name">Projects</h2>
            <div class="work-list">
                <div class="work">
                    <img src={zomato.src} />
                    <div class="layer">
                        <h3>Zomato Clone</h3>
                        <p>This is just static Zomato Clone develop using html,css,js</p>
                        <a href="https://github.com/om0852/Zomato-clone"> <img src={linkIcon.src} alt="link" /></a>
                    </div>
                </div>
                <div class="work">
                    <img src={bluechipart.src} />
                    <div class="layer">
                        <h3>Bluechipart Website</h3>
                        <p>This website allow user to buy a portfolio that consist stock,cypto and painting assest Features:-Instant buy and sell,you can buy any amount you want,top portfolios.this website is develop using,Next.js,Express.js,Web3,Solodity,Mongodb</p>
                        <a href="https://github.com/om0852/Assest-Pooling-and-Fractional-Ownership"> <a href="https://github.com/om0852/Zomato-clone"> <img src={linkIcon.src} alt="link" /></a></a>
                    </div>
                </div>

                <div class="work">
                    <img src={projectmanagement.src} />
                    <div class="layer">
                        <h3>Project Management website</h3>
                        <p>This webiste allow you to manage project in an company feature it includes are milestone updates,project tracking,access level.for development html,css,js,php,mysql</p>
                        <a href="https://github.com/om0852/ProjectManagmentDsc"> <a href="https://github.com/om0852/Zomato-clone"> <img src={linkIcon.src} alt="link" /></a></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/om0852" target="_blank" rel="noreferrer noopener" class="btn" >See more</a>
        </div >

    )
}