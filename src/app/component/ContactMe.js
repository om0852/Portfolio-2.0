"use client"
import "../css/contactme.css"
import github from "../img/icons8-github-30.png";
import instagram from "../img/icons8-instagram.svg";
import whatsapp from "../img/icons8-whatsapp.svg";
import linkedin from "../img/icons8-linkedin.svg";
export default function ContactMe() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-l">
                        <h1 className="sub-header">Let's Connect</h1>
                        <p className="sub-header-email"> <i className="fa-solid fa-envelope"></i> salunkeom474@gmail.com</p>
                        <div className="social">
                            <a href="" target="_blank" rel="noreferrer noopener"><img style={{ width: "40px", height: "40px" }} src={whatsapp.src} /></a>

                            <a href="" target="_blank" rel="noreferrer noopener"><img style={{ width: "40px", height: "40px" }} src={instagram.src} /></a>

                            <a href="" target="_blank" rel="noreferrer noopener"><img style={{ width: "40px", height: "40px" }} src={linkedin.src} /></a>

                            <a href="" target="_blank" rel="noreferrer noopener"><img style={{ width: "40px", height: "40px" }} src={github.src} /></a>

                        </div>
                    </div>

                    <div className="contact-r">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Name" required />
                            <input type="email" name="Email" placeholder="Email" required />
                            <textarea name="Message" id="" rows="6" placeholder="Message"></textarea>
                            <button type="submit" className="btn contactme">Submit</button>
                        </form>
                        <span id="submit-msg"></span>
                    </div>

                </div>
            </div>

            <div className="copyright">
                <p>©️ 2023 Om Salunke. All rights reserved.</p>
            </div>

        </div>
    )
}