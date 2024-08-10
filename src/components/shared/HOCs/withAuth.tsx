import { FC, ReactNode, useState } from "react";

const WithAuth: FC<{children: ReactNode}> = ({children}) => {
    const [auth, setAuth] = useState(false);
    
    if (auth)
        return(
            <>
            {children}
            </>
        )
};

export default WithAuth;
