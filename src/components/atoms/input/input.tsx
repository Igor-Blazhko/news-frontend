import { ChangeEventHandler, FC, LegacyRef, useEffect, useRef, useState } from "react";
import styles from './input.module.scss';
interface Props{
    type:string, 
    text:string, 
    label:string, 
    isRequired?:boolean,
    ref?:LegacyRef<HTMLInputElement>, 
}
export const Input: FC<Props> = ({type, text, label, ref, isRequired}) => {
    const [className, setClassName] = useState('');
    const [value, setValue] = useState('')
    
    const Changes:ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
        if (e.target.value) {
            setClassName(styles.checked);
        }else{
            setClassName('')
        }
    };

    useEffect(()=>{
        const id = setTimeout(()=>{
            setValue('')
        }, 100);
        return () => {
            clearTimeout(id);
        }
    },[])

    return (
        <div className={styles.input}>
            <label htmlFor={label} className={className}>{text}</label>
            {isRequired ? 
            <input type={type} name="" id={label} ref={ref} required onChange={Changes} value={value}/> :
            <input type={type} name="" id={label} ref={ref} onChange={Changes}/>
            }
        </div>
    )
}