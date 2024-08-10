import { FC } from "react";
import { Post } from "../../shared/constants/ApiData";
import styles from "./post.module.scss";
import { Button } from "../../atoms/button/button";
import { MyLink } from "../../atoms/link/link";
import { Path } from "../../shared/constants/routerPath";

export const OnePost: FC<Omit<Post, 'image'>> = ({tags, author, article, text, id, createdAt}) => {
    const JWT = false;
    return (
        <article className={styles.post}>
            <div className={styles.tag}>
                <div className={styles.tag_tag}>
                    <div className={styles.tag_title}>Теги:</div>
                    <div className={styles.tag_name}>
                        {tags.length !==0 && tags.map( (item) => {
                            if (item) return <span key={item.id}>{item.nametag} </span>
                            })}
                    </div>
                </div>
                
                <div className={styles.tag_name}>
                Создан: {!JWT && <>{author.login} </>}
                <MyLink to={`${Path.profile}/${author.id}`}>
                {JWT && 
                    <button className={styles.goto_user}>
                        {author.login}  
                    </button>
                }
                </MyLink>
                {createdAt}
                </div>
            </div>
            <div className={styles.post_content}>
                    <h2 className={styles.post_title}>
                        {article}
                    </h2>
                    <p className={styles.post_text}>
                        {text}
                    </p>
            </div>
            <MyLink to = {Path.post + '/' + id}>
                <Button>Читать далее</Button>
            </MyLink>
        </article>
    )
}