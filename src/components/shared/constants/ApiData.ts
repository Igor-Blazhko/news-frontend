export interface Post {
    id: number,
    article: string,
    text: string,
    tags: Tag[] | null[],
    author: author,
    image: Image|null,
    comments?: Comment[],
    createdAt: string
}
export interface Tag{
    id?:number,
    nametag:string,
}

interface Image{
    path: string,
}
interface author{
    id:number,
    login:string,
    name:string,
}
export interface User{
    id:number,
    login:string,
    name:string,
    sername:string,
    password?:string,
}

export interface Comment {
    id:number,
    text:string,
}


export interface CreateCommentDto{
    idPost: string,
    text: string,
}