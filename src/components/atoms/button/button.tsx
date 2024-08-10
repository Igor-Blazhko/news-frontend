import { FC, ReactNode, useInsertionEffect } from "react"

interface Props{
    children: ReactNode,
    style?: Styles,
    widthScale?: number,
    heightScale?: number,
}
export type Styles = 'dark' | 'white';

export const Button: FC<Props> = ({children, style, widthScale, heightScale}) => {
    const className = `buttonClass-${Math.round(Math.random() * 1000)}`;

    useInsertionEffect(()=>{
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
            .${className} {
                min-width: ${widthScale? 80*widthScale + 'px': '80px'};
                height: ${heightScale? 40*heightScale + 'px' : '30px'};
                background-color: ${style? style === 'dark'? '#333' : '#fff' : '#fff'};
                color: ${style? style === 'white'? '#333' : '#fff' : '#333'};
        `;

        document.head.appendChild(styleElement);

        return () => {
                document.head.removeChild(styleElement);
        };
    }, [className, style, widthScale, heightScale]);

    return <button className={`${className} castom`}>{children}</button>
}