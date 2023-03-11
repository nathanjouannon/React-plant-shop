import "../styles/Banner.css"
import logo from '../assets/logo.png'

function Banner() {
    return(
        <div className="lmj-banner">
            <img src={logo} alt="logo-lmj" className="logo-lmj"/>
            <h1>La maison Jungle</h1>
        </div>
    )
};

export default Banner;