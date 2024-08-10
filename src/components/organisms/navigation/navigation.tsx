import { Link } from "react-router-dom"
import { Path } from "../../shared/constants/routerPath"
import styles from './navigation.module.scss'

export const Navigation = () => {
    return (
        <nav className={styles.links}>
            <ul>
                <li>
                    <Link to = {Path.main}>Главная</Link>
                </li>
            </ul>
        </nav>
    )
}