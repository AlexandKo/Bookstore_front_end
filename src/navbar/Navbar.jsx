import {NavLink} from "react-router-dom";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div className={navbarStyle.navbarFormat}>
                <NavLink className={navbarStyle.navbarElement} to={"showBooks"}>Show Books List</NavLink>
            </div>
            <div className={navbarStyle.navbarFormat}>
                <NavLink className={navbarStyle.navbarElement} to={"addBooks"}>Add book</NavLink>
            </div>
        </div>
    )
}
export default Navbar;