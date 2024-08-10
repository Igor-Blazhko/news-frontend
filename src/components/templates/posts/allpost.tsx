import { Button } from '../../atoms/button/button'
import { ButtonsPagination } from '../../moleculs/paginationBtn/buttonPagination'
import { OnePost } from '../../organisms/post/post'
import { Post } from '../../shared/constants/ApiData'
import styles from './allpost.module.scss'

export const AllPosts = () => {

    const data: {posts: Post[], countPage:number} = {
        posts:[
            {
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
        ],
        countPage:1
    }
    const selectPage = () => {}
    return (
        <section className={styles.allPost}>
            {/* {filter && 
            <div className={styles.filter}> 
                Страница отсортирована по фильтру:{typeFilter} <br />
                Фильтр:{filter} <br />
                <Button onClick={ dropFilter }>Сбросить</Button>
            </div>} */}
            <section>
                { data && 
                    data.posts
                        .map( (post:Post) => <OnePost {...post} key={post.id}/> )
                }
            </section>
                {data.countPage && <ButtonsPagination countPage={data.countPage} selectPage={selectPage} selectedPage={1}/>}
        </section>



    )
}
