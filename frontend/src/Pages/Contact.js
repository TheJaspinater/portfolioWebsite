import './Contact.css';
import React from "react";
import Axios from '../api/Posts.js';
import { RiSendPlane2Line } from 'react-icons/ri';

const Contact = () => {
    const [name, setName] = React.useState("");
    const [nameCSS, setNameCSS] = React.useState("form-input-good");
    const [email, setEmail] = React.useState("");
    const [emailCSS, setEmailCSS] = React.useState("form-input-good");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [messageCSS, setMessageCSS] = React.useState("form-input-good");
    const [verify, setVerify] = React.useState("");
    const [verifyCSS, setVerifyCSS] = React.useState("form-input-good");
    const [error, setError] = React.useState("");
    const [sent, setSent] = React.useState(false);

    const checkEmail = (email) => { //if email passed regex analysis, return true, else return false
        var re = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        return re.test(email);
    }

    const checkVerify = (verify) => { //if varify passed regex analysis, return true, else return false
        var re = /^\d\d\d$/;
        return re.test(verify);
    }

    const handleSubmit = () => { //FINISH THIS!! CHECK OTHER VARIABLE AND MAKE SURE EMAIL IS VALID
        if (name !== "" && checkEmail(email) && message !== "" && checkVerify(verify)){
            const body = {
                name: name,
                email: email,
                phone: phone,
                company: company,
                message: message,
              };
            Axios.post("/Contact", body)
            .then((res) => {
              if (res.data.success) {
                setSent(true);
              } else {
                // Auth Error
                setError(res.data.response);
                alert(res.data.response);
              }
            })
            .catch(() => {
              setError("Failed to Auth");
            });
        } else {
            console.log("BAD");
            if (name === ""){
                setNameCSS("form-input-bad");
            }
            if (checkEmail(email) === false){
                setEmailCSS("form-input-bad");
            }
            if (message === ""){
                setMessageCSS("form-input-bad");
            }
            if (checkVerify(verify) === false){
                setVerifyCSS("form-input-bad");
            }
        }
    }

    return (
        <div className="contact-container">
            <div className="form-list">
                {!sent && <div className="contact-form">
                    <label className="cotact-title">C O N T A C T</label>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="N A M E *" value={name} onChange={(e) => {setName(e.target.value); setNameCSS("form-input-good")}} className={nameCSS}></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="E M A I L *" value={email} onChange={(e) => {setEmail(e.target.value); setEmailCSS("form-input-good")}} className={emailCSS}></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="P H O N E" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input-good"></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="C O M P A N Y" value={company} onChange={(e) => setCompany(e.target.value)} className="form-input-good"></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="M E S S A G E *" value={message} onChange={(e) => {setMessage(e.target.value); setMessageCSS("form-input-good")}} className={messageCSS} rows="5"></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <textarea placeholder="V E R I F Y   |   enter a 3 digit number *" value={verify} onChange={(e) => {setVerify(e.target.value); setVerifyCSS("form-input-good")}} className={verifyCSS}></textarea>
                </div>}
                {!sent && <div className="contact-form">
                    <button onClick={handleSubmit} className="contact-button">
                        <SubmitIcon icon={<RiSendPlane2Line size="100"/>} description={"S E N D"}/>
                    </button>
                </div>}
                {sent && <div className="contact-form">
                    <SubmitIcon icon={<RiSendPlane2Line size="100"/>} description={"S E N D"}/>
                </div>}
            </div>
        </div>
    )
}

const SubmitIcon = ({icon, description}) => (
    <div>
        <div className="contact-icon">
            {icon}
        </div>
        <div className="contact-description">
            {description}
        </div>
    </div>
);

export default Contact;