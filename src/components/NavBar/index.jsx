import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <NavLink className={styles.eagleAndNest} to='/'>
            The Nest! Quiz About Birds!

        </NavLink>
    )
}
