import { FC } from "react";
import { Comment } from "../../shared/constants/ApiData";
import styles from './comment.module.scss';

export const OneComment: FC<Omit<Comment, 'id'>> = ({text}) => {
    return (
        <div className={styles.comment}>
                <p> {text} </p>
        </div> 
    )
}