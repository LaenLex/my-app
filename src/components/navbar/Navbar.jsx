import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Navbar = (props) => {
    return (
        <div className={s.sidemenu}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialog" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>

            </nav>
            <div>
                <Sidebar friends={props.sidebarData.friends}/>
            </div>
        </div>
    );
}

export default Navbar;