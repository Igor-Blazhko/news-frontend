import { OpenedPost } from "../organisms/openedPost/openedPost";
import { Post as IPost } from "../shared/constants/ApiData";

const Post = () => {
    // реализовать логику получения поста из стэйта
    const id = window.location;
    const MocPost:IPost = {
        id: 1,
        article: 'MOC post',
        text: 'MOC post',
        tags: [],
        author: {
            id:1,
            login: 'MOC author',
            name: 'MOC me',
        },
        image: null,
        comments: [],
        createdAt: '12.12.2024'
    }

    return(
        <OpenedPost {...MocPost}/>
    )
};

export default Post;
