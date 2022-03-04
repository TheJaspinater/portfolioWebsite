import './Resume.css';
import React, { useState, useRef, useEffect} from "react";
import { BiDownload } from 'react-icons/bi';

const Resume = () => {
    const [hasRendered, setHasRendered] = useState(false);
    const [verify, setVerify] = useState("");
    const [verifyCSS, setVerifyCSS] = useState("form-input-good");
    const parentRef = useRef();
    const [iconCss, setIconCss] = useState("download-icon");

    const checkVerify = (verify) => {
        var re = /^\d\d\d$/;
        return re.test(verify);
    }

    const handleDownload = () => {
        if (checkVerify(verify)){
            setVerify("");
            setIconCss("download-icon-spin");
        } else {
            if (checkVerify(verify) === false){
                setVerifyCSS("form-input-bad");
            }
        }
    }

    useEffect(() => {
        if (!hasRendered) {
            setHasRendered(true);
        }
    });

    return (
        <div className="resume-container">
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
                        <div className="content">
                            <div className="resume-content">
                                <label className="resume-header">L A K E   J A S P E R</label>
                            </div>
                            {/*EDUCATION SECTION*/}
                            <div className="resume-content">
                                <label className="resume-section">E D U C A T I O N</label>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    San Francisco State University - San Francisco, CA
                                    <br/>Bachelor of Science in Computer Science - GPA: 3.7
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Awarded Term Honor on Dean’s List for 4 consecutive semesters.</li>
                                    <li>Learned and implemented 9 distinct programming languages.</li>
                                    <li>Leveraged 14 independent technologies to deploy and host full-stack web applications,explore artificial intelligence and drive physical devices.</li>
                                    <li>Regularly volunteered to head teams sized between 3 and 8 members throughout 6 major projects.</li>
                                </ul> 
                            </div>
                            {/*SKILLS SECTION*/}
                            <div className="resume-content">
                                <label className="resume-section">S K I L L S</label>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Languages
                                </p>
                            </div>
                            <div className="resume-content">
                                <p className="resume-details">
                                    C, C++, Typescript, JavaScript, Java, C#, HTML, CSS, Makefile
                                </p> 
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Environments/Technologies
                                </p>
                            </div>
                            <div className="resume-content">
                                <p className="resume-details">
                                    Windows, Linux, Raspbian, VirtualBox, Git, VS Code, IntelliJ Idea, Nano, Vim, Jupyter Notebook, npm, React, Node.js, MongoDB, AWS, Docker, Redux, Unity, NLTK, scikit-Learn, TensorFlow, PoseNet
                                </p> 
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Notable Coursework
                                </p>
                            </div>
                            <div className="resume-content">
                                <p className="resume-details">
                                    Operating Systems Principles, Embedded Systems, Unix Programming, Natural Language Processing With AI, Software Engineering, Internet App Design & Development, Multiplayer Game Development, and Networking
                                </p> 
                            </div>
                            {/*HANDS-ON EXPERIENCE SECTION*/}
                            <div className="resume-content">
                                <label className="resume-section">H A N D S - O N   E X P E R I E N C E</label>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Autonomous Vehicle / In Progress/ C, Embedded Linux, Raspberry Pi
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Developed and deployed firmware to a small-scale self-driving vehicle.</li>
                                    <li>Derived hardware access via memory mapping and direct register access achieving a 47.80% decrease in access time.</li>
                                    <li>Engineered multi-threaded processes to optimize asynchronous operations within an embedded Linux platform.</li>
                                </ul> 
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Ant Simulator / Summer 2021 / C#
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Engineered a multi-agent swarm pathfinding algorithm aimed at connecting 2 points via many free agents.</li>
                                    <li>Incorporated heat map to visualize free agent movement and emergent teamwork.</li>
                                    <li>Leveraged procedural map generation to increase problem set diversity.</li>
                                </ul> 
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    File System / Spring 2021 / C, Raspberry Pi, Raspbian
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Engineered a file system utilizing 3 primary data structures: Volume Control Block, Free Space Map, and Expandable Directory Entries.</li>
                                    <li>Developed a custom shell script to support 14 unique commands for file system navigation and management.</li>
                                </ul> 
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Docker Swarm Web Application / Spring 2021 / JavaScript, React, Node.js, CSS, HTML, MongoDB, Docker, Redux, AWS
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Deployed full-stack Docker swarm web application on an AWS EC2 instance.</li>
                                    <li>Implemented scalable distributed/clustered microservices using Docker, Redis, Redux, and round-robin load balancers.</li>
                                </ul>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Real-time Multiplayer Game / Spring 2021 / C#, Unity
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Managed a team of 8 and delegated tasks to 4 sub-teams (Art, Audio, Game Development, Networking).</li>
                                    <li>Implemented custom TCP/UDP networking protocol and custom packet manager to enable real-time data streaming.</li>
                                    <li>Engineered server authoritative architecture to achieve client synchronization and reduce the risk of cheating.</li>
                                    <li>Expanded gameplay variation by implementing user synchronized procedural map generation.</li>
                                </ul>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Online Physical Therapy / Fall 2020 / JavaScript, CSS, HTML, React, Node.js, MongoDB, AWS, TensorFlow, PoseNet
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Directed a team of 8 with sub-teams focusing on UI, database, and networking solutions.</li>
                                    <li>Achieved Large scale video upload/download along with in-browser playback/streaming/buffering Achieved persistent video and file hosting utilizing 3 languages and 4 technologies.</li>
                                    <li>Integrated real-time body tracking and pose estimation with 1 language and 2 technologies.</li>
                                    <li>Supported cross-user communication to connect admin and user clients in addition o supporting admin and user site variations.</li>
                                </ul>
                            </div>
                            <div className="resume-content">
                                <p className="resume-subsection">
                                    Chat Room Web App / Spring 2020 / Java, React, Node.js, MongoDB, Docker, AWS
                                </p>
                            </div>
                            <div className="resume-content">
                                <ul className="resume-details">
                                    <li>Optimized network traffic by reducing network overhead via the implementation of Data Transfer Objects.</li>
                                    <li>Improved server performance via multi-threaded Data Processing to better leverage asynchronous patterns.</li>
                                    <li>Deployed full-stack application on an AWS EC2 instance.</li>
                                    <li>Assured site stability via quality assurance testing.</li>
                                </ul>
                            </div>
                            <div className="resume-content">
                                <input type="text" placeholder="V E R I F Y   |   enter a 3 digit number *" value={verify} onChange={(e) => {setVerify(e.target.value); setVerifyCSS("form-input-good"); setIconCss("download-icon")}} className={verifyCSS}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume-content">
                    <button onClick={handleDownload} className="download-button">
                        <DownloadIcon icon={<BiDownload size="100"/>} description={"D O W N L O A D"} css={iconCss}/>
                    </button>
                </div>
                <div className='fake-min-margin'/>
            </div>
        </div>
    )
}

const DownloadIcon = ({icon, description, css}) => (
    <div>
        <div className={css}>
            {icon}
        </div>
        <div className="download-description">
            {description}
        </div>
    </div>
);

export default Resume;