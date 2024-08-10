import { FC } from "react"
import { LogIn } from "../../organisms/auth/login/logIn"
import { SignIn } from "../../organisms/auth/sigin/signIn"
import styles from './authTemp.module.scss';

export const AuthBlock: FC<{isLogin: boolean}> = ({isLogin}) => {
    return (
        <section className = {styles.authPage}>
            {isLogin? <LogIn/> : <SignIn/>}
        </section>
    )
}