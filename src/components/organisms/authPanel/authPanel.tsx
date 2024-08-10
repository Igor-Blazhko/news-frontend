import { LoginBtn } from "../../moleculs/authbtn/login/LoginBtn";
import { UnLoginBtn } from "../../moleculs/authbtn/unLogin/unLoginBtn";
import styles from './authPanel.module.scss'

export const AuthPanel = () => {
    return (
        <nav className={styles.authPanel}>
            <LoginBtn/>
            <UnLoginBtn/>
        </nav>
    )
}
