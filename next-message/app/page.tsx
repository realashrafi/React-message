'use client'
import AddPostForm from "@/app/store/redux/features/posts/AddPostForm";
import PostList from "@/app/store/redux/features/posts/PostList";

export default function Home() {
    return (
        <div className={'flex justify-center flex-col'}>
            <AddPostForm/>
            <PostList/>
        </div>
    );
}
