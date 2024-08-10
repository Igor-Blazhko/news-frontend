import { Button } from "../../../atoms/button/button";
import { Input } from "../../../atoms/input/input";
import styles from './login.module.scss';

export const LogIn = () => {
    return ( 
        <article>
            <form>
                <Input text="Email" label="email" type="email" isRequired = {true}></Input>
                <Input text="Пароль" label="pass" type="password" isRequired = {true}></Input>
                <Button style="dark" widthScale={3.6}>Войти</Button>
                <div>
                    <Button style="dark" widthScale={3.6}>
                        Войти через Google
                        <img src="/google.svg" alt="dots icon" className={styles.icon_google}/>    
                    </Button>
                </div>
            </form>
        </article>
    )
}