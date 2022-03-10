import './Contact.css';
import React, { useState, useRef, useEffect} from "react";
import Axios from '../api/Posts.js';
import { RiSendPlane2Line } from 'react-icons/ri';

const Contact = () => {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    const [name, setName] = useState("");
    const [nameCSS, setNameCSS] = useState("contact-form-input-good");
    const [nameCSSMobile, setNameCSSMobile] = useState("contact-form-input-good-mobile");
    const [email, setEmail] =useState("");
    const [emailCSS, setEmailCSS] = useState("contact-form-input-good");
    const [emailCSSMobile, setEmailCSSMobile] = useState("contact-form-input-good-mobile");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [messageCSS, setMessageCSS] = useState("contact-form-input-good");
    const [messageCSSMobile, setMessageCSSMobile] = useState("contact-form-input-good-mobile");
    const [verify, setVerify] = useState("");
    const [verifyCSS, setVerifyCSS] = useState("contact-form-input-good");
    const [verifyCSSMobile, setVerifyCSSMobile] = useState("contact-form-input-good-mobile");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(true);
    const [hasRendered, setHasRendered] = useState(false);

    const parentRef = useRef();

    const checkEmail = (email) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
                alert(error);
              }
            })
            .catch(() => {
              setError("Failed To Make Contact.");
              alert(error);
            });
        } else {
            if (name === ""){
                if (isMobile) {
                    setNameCSSMobile("contact-form-input-bad-mobile");
                } else {
                    setNameCSS("contact-form-input-bad");
                }
            }
            if (checkEmail(email) === false){
                if (isMobile) {
                    setEmailCSSMobile("contact-form-input-bad-mobile");
                } else {
                    setEmailCSS("contact-form-input-bad");
                }
            }
            if (message === ""){
                if (isMobile) {
                    setMessageCSSMobile("contact-form-input-bad-mobile");
                } else {
                    setMessageCSS("contact-form-input-bad");
                }
            }
            if (checkVerify(verify) === false){
                setVerify("");
                if (isMobile) {
                    setVerifyCSSMobile("contact-form-input-bad-mobile");
                } else {
                    setVerifyCSS("contact-form-input-bad");
                }
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
        <div className={isMobile ? "contact-container-mobile" : "contact-container"}>
            {isMobile && <div className="margin-mobile-nav"/>}
            {!isMobile && <div className='fake-max-margin'/>}
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
                                <label className={(isMobile) ? "contact-title-mobile" : "contact-title"}>CONTACT</label>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" placeholder="NAME*" value={name} onChange={
                                        (e) => {
                                            setName(e.target.value);
                                            if (isMobile) {
                                                setNameCSSMobile("contact-form-input-good-mobile");
                                            } else {
                                                setNameCSS("contact-form-input-good");
                                            }
                                        }
                                    }
                                    className={(isMobile) ? nameCSSMobile : nameCSS}>
                                </textarea>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" placeholder="EMAIL*" value={email} onChange={
                                        (e) => {
                                            setEmail(e.target.value);
                                            if (isMobile) {
                                                setEmailCSSMobile("contact-form-input-good-mobile");
                                            } else {
                                                setEmailCSS("contact-form-input-good");
                                            }
                                        }    
                                    }
                                    className={(isMobile) ? emailCSSMobile : emailCSS}>
                                </textarea>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" placeholder="PHONE" value={phone} onChange={
                                        (e) => setPhone(e.target.value)
                                    } 
                                    className={
                                        (isMobile) ? "contact-form-input-good-mobile" : "contact-form-input-good"
                                    }>
                                </textarea>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" placeholder="COMPANY" value={company} onChange={
                                        (e) => setCompany(e.target.value)
                                    } className={
                                        (isMobile) ? "contact-form-input-good-mobile" : "contact-form-input-good"
                                    }>
                                </textarea>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" placeholder="MESSAGE*" value={message} onChange={
                                        (e) => {
                                            setMessage(e.target.value); 
                                            if (isMobile) {
                                                setMessageCSSMobile("contact-form-input-good-mobile");
                                            } else {
                                                setMessageCSS("contact-form-input-good");
                                            }
                                        }
                                    }
                                    className={(isMobile) ? messageCSSMobile : messageCSS} rows="5"></textarea>
                            </div>
                            <div className="contact-form">
                                <textarea spellcheck="false" type="text" placeholder="VERIFY | enter any 3 digit number*" value={verify} onChange={
                                        (e) => {
                                            setVerify(e.target.value);
                                            if (isMobile) {
                                                setVerifyCSSMobile("contact-form-input-good-mobile");
                                            } else {
                                                setVerifyCSS("contact-form-input-good");
                                            }
                                        }
                                    }
                                    className={(isMobile) ? verifyCSSMobile : verifyCSS}
                                >
                                </textarea>
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
                <div className='fake-min-margin'/>
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