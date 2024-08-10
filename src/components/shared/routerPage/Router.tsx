import { Foot } from "../../templates/foot/foot";
import { Head  } from "../../templates/head/head";
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
