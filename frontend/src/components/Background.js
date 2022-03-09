import './Background.css';

const Background = () => {

    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    return(
        <div className={isMobile ? "background-mobile-container" : "background-container"}>
            <div className={isMobile ?'background-mobile-texture' : 'background-texture'}/>
        </div>
    );
}

export default Background;