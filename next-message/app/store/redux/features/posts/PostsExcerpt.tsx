//@ts-nocheck
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const PostsExcerpt = ({post}) => {
    // console.log(post)
    return(
        <article className={'bg-blue-100 m-2 p-4 rounded text-right'}>
            <h3 className={'text-xl'}>{post.title}</h3>
            <p>{post.body}</p>
            <p className={'text-xs'}>
                <TimeAgo timestamp={post.date}/>
                <PostAuthor userId={post.userId}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    )
}
export default PostsExcerpt