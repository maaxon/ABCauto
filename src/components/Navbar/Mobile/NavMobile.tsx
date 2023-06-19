import {useEffect, useState} from "react";
import classes from "../Navbar.module.scss";
import {Link} from "react-router-dom";
import logo from "../../../misc/BrandLogo.png";
import HamMenu from "./HamMenu";

const NavMobile = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const handleScroll = () => {
        setHamburgerOpen(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={classes.nav}>
            <Link to={'/'}><img src={logo} className={classes.logo} alt="logo"/></Link>
            <div onClick={toggleHamburger}><HamMenu isOpen={hamburgerOpen}></HamMenu></div>
            <div className="menu">
                <Link to={'/cars'}>Каталог Авто</Link>
                <Link to={'/error'}>Aвто с пробегом</Link>
            </div>

            <style>{`
                .menu{
                display: ${hamburgerOpen ? 'flex' : 'none'};
                background-color: #EFF0F0;
                height: 25vh;
                width: 100vw;
                margin-top: 50px;
                position: fixed;
                top: 7%;
                z-index: 1000;
                flex-direction: column;
                align-items: center;
                justify-content:space-evenly
                }
            `}
            </style>

        </nav>
    )
}

export default NavMobile