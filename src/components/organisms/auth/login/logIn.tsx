import { Button } from "../../../atoms/button/button"
import { Input } from "../../../atoms/input/input"

export const LogIn = () => {
    return ( 
        <article>
            <form>
                <Input text="Email" label="email" type="email" isRequired = {true}></Input>
                <Input text="Пароль" label="pass" type="password" isRequired = {true}></Input>
                <Button style="dark" widthScale={3.6}>Войти</Button>
            </form>
        </article>
    )
}