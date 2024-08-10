
import { MyLink } from "../../atoms/link/link"
import { Path } from "../../shared/constants/routerPath"
import styles from './navigation.module.scss'

export const Navigation = () => {
    return (
        <nav className={styles.links}>
            <ul>
                <li>
                    <MyLink to = {Path.main}>Главная</MyLink>
                </li>
            </ul>
        </nav>
    )
}