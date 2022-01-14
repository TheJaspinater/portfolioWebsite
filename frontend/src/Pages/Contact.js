import './Contact.css';
import paperTexture from '../images/paperTexture.jpg';
import React, { useState, useRef, useEffect} from "react";
import Axios from '../api/Posts.js';
import { RiSendPlane2Line } from 'react-icons/ri';

const Contact = () => {
    const [name, setName] = useState("");
    const [nameCSS, setNameCSS] = useState("form-input-good");
    const [email, setEmail] =useState("");
    const [emailCSS, setEmailCSS] = useState("form-input-good");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [messageCSS, setMessageCSS] = useState("form-input-good");
    const [verify, setVerify] = useState("");
    const [verifyCSS, setVerifyCSS] = useState("form-input-good");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(true);
    const [hasRendered, setHasRendered] = useState(false);

    if (error);

    const parentRef = useRef();

    const checkEmail = (email) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return re.test(email);
    }

    const checkVerify = (verify) => {
        var re = /^\d\d\d$/;
        return re.test(verify);
    }

    const handleSubmit = () => {
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
                setError(res.data.response);
                alert(Error);
              }
            })
            .catch(() => {
              setError("Failed to Auth");
              alert(Error);
            });
        } else {
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

    useEffect(() => {
        if (!hasRendered) {
            setSent(false);
            setHasRendered(true);
        }
    });

    return (
        <div className="contact-container">
            <img src={paperTexture} className='backgroundTexture'/>
            <div className="form-list">
                <div className="collapsible">
                    <div className="content-parent"
                        ref={parentRef}
                        style = {
                            sent
                            ? {
                                height: "0px",
                            }
                            : {
                                height: parentRef.current.scrollHeight,
                            }
                        }
                    >
                        <div className="content">
                            <div className="contact-form">
                                <label className="cotact-title">C O N T A C T</label>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="N A M E *" value={name} onChange={(e) => {setName(e.target.value); setNameCSS("form-input-good")}} className={nameCSS}></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="E M A I L *" value={email} onChange={(e) => {setEmail(e.target.value); setEmailCSS("form-input-good")}} className={emailCSS}></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="P H O N E" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input-good"></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="C O M P A N Y" value={company} onChange={(e) => setCompany(e.target.value)} className="form-input-good"></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="M E S S A G E *" value={message} onChange={(e) => {setMessage(e.target.value); setMessageCSS("form-input-good")}} className={messageCSS} rows="5"></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea placeholder="V E R I F Y   |   enter a 3 digit number *" value={verify} onChange={(e) => {setVerify(e.target.value); setVerifyCSS("form-input-good")}} className={verifyCSS}></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {hasRendered && sent && <div className="contact-form">
                    <SubmitIcon icon={<RiSendPlane2Line size="100"/>} description={"S E N T"} iconCss={"contact-icon-sent"}/>
                </div>}

                {!sent && <div className="contact-form">
                    <button onClick={handleSubmit} className="contact-button">
                        <SubmitIcon icon={<RiSendPlane2Line size="100"/>} description={"S E N D"} iconCss={"contact-icon"}/>
                    </button>
                </div>}

                {/* <button onClick={() => setSent(!sent)}>
                        TEST
                </button> */}
            </div>
        </div>
    )
}

const SubmitIcon = ({icon, description, iconCss}) => (
    <div>
        <div className={iconCss}>
            {icon}
        </div>
        <div className="contact-description">
            {description}
        </div>
    </div>
);

export default Contact;