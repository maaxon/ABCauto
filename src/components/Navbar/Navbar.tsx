import classes from './Navbar.module.scss'
import phone from '../../misc/phone.png'
import { Link } from "react-router-dom";



import Logo from '../../misc/logo.svg';
import {useAppSelector} from "../../hooks/redux";
import NavMobile from "./Mobile/NavMobile";

function Navbar() {
    const {mode} = useAppSelector(state => state.AppReducer)
    if (mode === 'mobile') return <NavMobile/>

    return (<nav className={classes.nav}>
        <Link to={'/'}><img src={Logo} className={classes.logo} alt="logo"/></Link>
        <Link to={'/cars/'}>Каталог Авто</Link>
        <Link to={'/error/'}>Aвто с пробегом</Link>
        <img className={classes.phone} src={phone} alt="logo"/>
    </nav>)

}

export default Navbar

