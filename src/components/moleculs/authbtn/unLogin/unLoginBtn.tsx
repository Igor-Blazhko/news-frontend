import { Link } from "react-router-dom"
import { Button } from "../../../atoms/button/button"
import { Path } from "../../../shared/constants/routerPath"
import WithAuth from "../../../shared/HOCs/withAuth"

export const UnLoginBtn = () => {
    return (
        <WithAuth unautorize = {
                <>
                    <Link to = {Path.authLogIn}>
                        <Button style="dark">
                            Войти
                        </Button>
                    </Link> 
                    <Link to = {Path.authSignIn}>
                        <Button style="dark">
                            Зарегистрироваться
                        </Button>
                    </Link>
                </>
        }/>
    )
}