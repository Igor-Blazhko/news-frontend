
import { FC } from 'react'
import styles from './buttonPagination.module.scss'

interface Props{
    countPage: number,
    selectedPage: number,
    selectPage: () => void,
}

export const ButtonsPagination: FC<Props> = ({countPage,selectPage ,selectedPage}) => {
    const array = new Array(countPage).fill(0)

    return (
    <nav className={styles.pagi}>
        {
            array.map( (_, index) => {
                let style = styles.Btn_pagi
                if (index === (selectedPage - 1)) style += ` ${styles.Btn_pagi_active}`;

                if ( index === 0) 
                    return <button className={style} key={index+_} onClick={selectPage}>{index+1}</button>

                if ((index>( selectedPage - 3))&&(index<( selectedPage + 1)))
                    return <button className={style} key={index+_} onClick={selectPage}>{index+1}</button>
                
                if ( index === array.length-1) 
                    return <button className={style} key={index+_} onClick={selectPage}>{index+1}</button>
                
                if (( index === array.length-2 ) || (index === 2)) 
                return <span key={index+_}>...</span>
            })
        }
    </nav>
    )
}