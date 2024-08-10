import { Button } from "../../../atoms/button/button"
import WithAuth from "../../../shared/HOCs/withAuth"

export const LoginBtn = () => {
    return (
        <WithAuth>
            <Button style="dark">Профиль</Button>
            <Button style="dark">Выйти</Button>
        </WithAuth>
    )
}