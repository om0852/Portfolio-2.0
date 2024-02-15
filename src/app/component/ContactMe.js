import React, { useState } from "react";
import "../css/contactme.css";
import github from "../img/icons8-github-30.png";
import instagram from "../img/icons8-instagram.svg";
import whatsapp from "../img/icons8-whatsapp.svg";
import linkedin from "../img/icons8-linkedin.svg";

export default function ContactMe() {
    const [contactdata, setContactData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactdata, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (contactdata.email && contactdata.subject && contactdata.message) {
            const res = await fetch(`/api/contactme`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactdata),
            });

            const response = await res.json();
            console.log(response);
            if (response.status === 200) {
                alert("Message sent successfully");
                setContactData({
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                alert("Error, Try Again");
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-l">
                        <h1 className="sub-header">Let&apos;Connect</h1>
                        <p className="sub-header-email"> <i className="fa-solid fa-envelope"></i> salunkeom474@gmail.com</p>
                        <div className="social">
                            <a href="https://wa.me/+918390471333" target="_blank"  ><img style={{ width: "40px", height: "40px" }} src={whatsapp.src} alt="whatsapp" /></a>
                            <a href="https://www.instagram.com/salunke_om0852/" target="_blank"  ><img style={{ width: "40px", height: "40px" }} src={instagram.src} alt="instagram" /></a>
                            <a href="https://www.linkedin.com/in/om-salunke-81bb63292/" target="_blank" ><img style={{ width: "40px", height: "40px" }} src={linkedin.src} alt="linkedin" /></a>
                            <a href="https://github.com/om0852" target="_blank"  ><img style={{ width: "40px", height: "40px" }} src={github.src} alt="github" /></a>
                        </div>
                    </div>

                    <div className="contact-r">
                        <form onSubmit={handleSubmit}>
                            <input onChange={onChange} type="email" name="email" placeholder="Email" value={contactdata.email} required />
                            <input onChange={onChange} type="text" name="subject" placeholder="Subject" value={contactdata.subject} required />
                            <textarea onChange={onChange} name="message" rows="6" placeholder="Message" value={contactdata.message}></textarea>
                            <button type="submit" className="btn contactme">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>©️ 2024 Om Salunke. All rights reserved.</p>
            </div>
        </div>
    );
}
