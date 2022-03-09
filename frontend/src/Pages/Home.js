import './Home.css';
import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    const [hasRendered, setHasRendered] = useState(false);
    const parentRef = useRef();
    
    useEffect(() => {
        if (!hasRendered) {
            setHasRendered(true);
        }
    });

    return (
        <div className={isMobile ? "home-mobile-container" : "home-container"}>
            <div className='fake-max-margin'/>
            <div className="resume-list">
                <div className="collapsible">
                    <div className="content-parent"
                        ref={parentRef}
                        style = {
                            !hasRendered
                            ? {
                                height: "0px",
                            }
                            : {
                                height: parentRef.current.scrollHeight,
                            }
                        }
                    >
                        {!isMobile && <div className="content">
                            <div className="home-content">
                                <div className="greeting">
                                    <p>H e l l o ,   m y   n a m e   i s <br></br></p>
                                </div>
                            </div>
                            <div className="home-content">
                                <div className="name">
                                    <p>L A K E   J A S P E R .</p>
                                </div>
                            </div>
                            <div className="home-content">
                                <div className="catch-phrase">
                                    <p>w e l c o m e   t o   m y   l i v i n g r o o m   s e r v e r !</p>
                                </div>
                            </div>
                            <div className="home-content">
                                <div className="resume-link">
                                <Link to="/Resume" className="navbar-link">
                                    <button className="resume-button">C h e c k   o u t   m y   r e s u m e !</button>
                                </Link>
                                </div>
                            </div>
                        </div>}
                        {isMobile && <div className="content">
                            <div className="home-content">
                                <h6 className="greeting-mobile">Hello, my name is<br></br></h6>
                            </div>
                            <div className="home-content">
                                <h6 className="name-mobile">LAKE JASPER.</h6>
                            </div>
                            <div className="home-content">
                                <h6 className="catch-phrase-mobile">welcome to my livingroom server!</h6>
                            </div>
                            <div className="home-content">
                                <div className="resume-link-mobile">
                                <Link to="/Resume" className="navbar-link">
                                    <button className="resume-button">Check out my resume!</button>
                                </Link>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='fake-min-margin'/>
            </div>

        </div>
    )
}

export default Home;