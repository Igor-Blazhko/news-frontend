import { Button } from "../../../atoms/button/button"
import { Input } from "../../../atoms/input/input"

export const SignIn = () => {
    return (
        <article>
            <form>
                <Input text="Email" label="email" type="email" isRequired = {true}></Input>
                <Input text="Имя" label="name" type="text" isRequired = {true}></Input>
                <Input text="Фамилия" label="serName" type="text" isRequired = {true}></Input>
                <Input text="Пароль" label="pass" type="password" isRequired = {true}></Input>
                <Input text="Повторите пароль" label="RePass" type="password" isRequired = {true}></Input>
                <Button style="dark" widthScale={3.6}>Войти</Button>
            </form>
        </article>
    )
}