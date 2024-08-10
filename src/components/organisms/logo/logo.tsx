import { Link } from "react-router-dom"
import { Path } from "../../shared/constants/routerPath"
import { Logo } from "../../moleculs/logo/logo"

export const LogoWithLink = () => {
    return (
        <Link to={Path.main}>
            <Logo/>
        </Link>
    )
}