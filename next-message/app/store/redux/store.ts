import {configureStore} from "@reduxjs/toolkit";
import postsReducer from '@/app/store/redux/features/posts/postsSlice'
import usersReducer from '@/app/store/redux/features/users/usersSlice'
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users:usersReducer
    }
})