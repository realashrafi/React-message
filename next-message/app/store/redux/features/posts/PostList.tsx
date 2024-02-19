//@ts-nocheck
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {selectAllPosts, getPostsError, getPostsStatus, fetchPosts} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";


const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch]);

    let content;
    if (postsStatus === 'loading') {
        content =
            <div className="flex flex-row gap-2 justify-center my-4">
                <div className="w-5 h-5 rounded-full bg-blue-300 animate-bounce"></div>
                <div className="w-5 h-5 rounded-full bg-blue-400 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-5 h-5 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
            </div>;
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }
    return (
        <section>
            <h2 className={'text-center text-2xl bg-blue-200 rounded-b'}>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList