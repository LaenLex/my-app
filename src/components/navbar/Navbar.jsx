import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./sidebar/SidebarContainer";

const Navbar = () => {
    return (<div className={s.sidemenu}>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeclassname={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialog" activeclassname={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeclassname={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeclassname={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeclassname={s.active}>Settings</NavLink>
            </div>
        </nav>
        <div>
            <SidebarContainer/>
        </div>
    </div>)
}

export default Navbar;