import { FC } from "react";
import { AuthBlock } from "../templates/authorize/authTemp";

const Auth: FC<{isLogin: boolean}> = ({isLogin}) => {
    return(
        <>
           <AuthBlock isLogin = {isLogin}/>
        </>
    )
};

export default Auth;
