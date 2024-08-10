import { FC, ReactNode, useState } from "react";

const WithAuth: FC<{children?: ReactNode, unautorize?: ReactNode}> = ({children, unautorize}) => {
    const [auth, setAuth] = useState(false);
    
    if (!auth) {
        return <> {unautorize} </>
    } else {
        return <> {children} </>
    }
};

export default WithAuth;
