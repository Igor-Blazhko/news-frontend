import { AuthPanel } from "../../organisms/authPanel/authPanel";
import { LogoWithLink } from "../../organisms/logo/logo";
import { Navigation } from "../../organisms/navigation/navigation";


export const Head = () => {
    return (
        <header>
            <LogoWithLink/>
            <Navigation/>
            <AuthPanel/>
        </header>
    )
};
