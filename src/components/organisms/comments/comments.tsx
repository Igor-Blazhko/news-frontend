import { FC, useRef } from "react";
import { Comment } from "../../shared/constants/ApiData";
import styles from './comments.module.scss';
import { MyLink } from "../../atoms/link/link";
import { Path } from "../../shared/constants/routerPath";
import WithAuth from "../../shared/HOCs/withAuth";
import { Button } from "../../atoms/button/button";
import { OneComment } from "../comment/comment";

export const Comments: FC<{comments:Comment[] | null | undefined}> = ({comments}) => {
    const text = useRef<HTMLTextAreaElement>(null);

    const createComment = () => {};

    return(
        <article className={styles.comments} id="comments" >
            <h3>Комментарии</h3>

            {comments && comments.length !==0 && comments.map((comment:Comment) => < OneComment key={comment.id} {...comment} />) }

            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" rows={4} placeholder="Оставьте ваш комментарий" required ref={text} maxLength={255}></textarea>

                {comments && comments.length === 0 && <div>Нет комментариев</div>}

                <WithAuth 
                unautorize = {
                    <div>
                        <MyLink to={'/'+Path.authLogIn}>
                            <Button onClick={() => {}}>Войдите на сайт</Button>
                        </MyLink>
                    </div>
                }>
                    <Button onClick={createComment}>Отправить</Button>
                </WithAuth>
            </form>
        </article>
    )
}