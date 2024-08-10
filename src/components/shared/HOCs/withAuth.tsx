import { FC, ReactNode } from "react";

const WithAuth: FC<{children: ReactNode}> = ({children}) => {
    return(
        <>
           {children}
        </>
    )
};

export default WithAuth;
