import { Link } from "react-router-dom"
import { Button } from "../../../atoms/button/button"
import { Path } from "../../../shared/constants/routerPath"

export const UnLoginBtn = () => {
    return (
        <>
        <Link to = {Path.auth}>
            <Button style="dark">
                Войти
            </Button>
        </Link> 
        <Link to = {Path.auth}>
            <Button style="dark">
                Зарегистрироваться
            </Button>
        </Link>
        </>
    )
}