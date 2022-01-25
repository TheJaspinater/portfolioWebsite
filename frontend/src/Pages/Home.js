import './Home.css';
import { IoSchoolOutline } from 'react-icons/io5';
import { AiOutlineStock } from 'react-icons/ai';
import { VscServerProcess } from 'react-icons/vsc';


const Home = () => {
    return(
        <div className = "home-container">
            <div className='grid-container'>
                <div className='welcome-banner'>
                    H I ,   M Y   N A M E   I S   L A K E   J A S P E R !
                </div>
                <div className='check-icon-1'>
                    <div className='icon'>
                        <IoSchoolOutline size="75"/>
                    </div>
                </div>
                <div className='description-1'>
                        <div className='description-header'> Is He Graduated? </div>
                        <div className='description'> You bet I am! I graduated december 2021 from San Francisco State University with a Bachelor's of Science in Computer Science! </div>
                </div>
                <div className='check-icon-2'>
                    <div className='icon'>
                        <AiOutlineStock size="75"/>
                    </div>
                </div>
                <div className='description-2'>        
                        <div className='description-header'> Is He Looking For Work? </div>
                        <div className='description'>Yes I am, I couldn't be more exited! I'm looking for an entry level software develpment position. Check out my resume! If I'm match what you're looking for, reach out to me via the contact button to your left!</div>
                </div>
                <div className='check-icon-3'>
                    <div className='icon'>
                        <VscServerProcess size="75"/>
                    </div>
                </div>
                <div className='description-3'>
                        <div className='description-header'> What Is He Doing Now? </div>
                        <div className='description'>The life of a college graduate is constantantly changing! Outside of the hundreds of applications begging to filled out, I spend much of my time persuing side projects like this website along with the never ending process of becoming a programming legend!</div>
                </div>
            </div>
        </div>
    );
}

export default Home;