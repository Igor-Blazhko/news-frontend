import { FC, useState } from "react";
import styles from "./openedPost.module.scss";
import { Post } from "../../shared/constants/ApiData";
import { MyLink } from "../../atoms/link/link";
import { Button } from "../../atoms/button/button";
import SERVER from "../../shared/constants/serverApi";
import { Comments } from "../comments/comments";

export const OpenedPost: FC<Post> = ({tags, author, article, text, id, createdAt, image, comments}) => {
    
    const [showingComment , setshowingComment] = useState(false)
    const showComment = () => {
        setshowingComment(( value ) => !value )
    }

    return (
        <article className={styles.post}>
             <MyLink to="/">
                <Button>Назад</Button>
            </MyLink>

            <Button onClick = {showComment}>Показать комментарий</Button>


            <div className={styles.post_content_full}>
                {image && <img src={SERVER.base+image.path} alt="SOME img" className={styles.post_image}/>}
                <h2 className={styles.post_title_full}> {article}</h2>
                <p className={styles.post_text_full}>
                    {text}
                </p>
            </div>

            {showingComment && <Comments comments = {comments} />}
        </article>
    )
}