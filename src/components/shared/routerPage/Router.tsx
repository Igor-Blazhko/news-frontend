import Head from "../../organisms/head/head";
import Foot from "../../organisms/foot/foot";
import RootRouter from "../router/RootRouter";

const Routers = () => {
    return(
        <>
            <Head/>
            <main>
                <RootRouter/>
            </main>
            <Foot/>
        </>
    )
};

export default Routers;
