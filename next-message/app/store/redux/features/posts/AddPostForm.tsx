//@ts-nocheck
import {useState} from "react";
import {Button, Input, TextareaAutosize} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost} from "./postsSlice";
import {selectAllUsers} from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [newPost, setNewPost] = useState(false)
    const users = useSelector(selectAllUsers)
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId})).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const usersOptions = users?.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    const onNewPostClick = () => {
        if (newPost === true) {
            return (
                <section className={'flex justify-center flex-col '}>
                    <h2 className={'text-2xl text-center my-2 rounded bg-blue-200'}>Add a New Post</h2>
                    <form className={'flex justify-center flex-col px-4'}>
                        <label htmlFor={'postTitle'} className={'bg-blue-100 text-center text-xl'}>Post Title</label>
                        <Input
                            type={'text'}
                            id={'postTitle'}
                            name={'postTitle'}
                            value={title}
                            onChange={onTitleChanged}
                        />
                        <label htmlFor={'postAuthor'} className={'bg-blue-100 text-center text-xl my-2'}>Author</label>
                        <select
                            id={'postAuthor'}
                            value={userId}
                            onChange={onAuthorChanged}>
                            <option value={''}></option>
                            {usersOptions}
                        </select>
                        <label htmlFor={'postContent'}
                               className={'bg-blue-100 text-center text-xl my-2'}>Content</label>
                        <TextareaAutosize
                            id={'postContent'}
                            name={'postContent'}
                            value={content}
                            onChange={onContentChanged}
                        />
                        <div className={'flex flex-col justify-center my-2 p-2'}>
                            <Button
                                type={'button'}
                                onClick={onSavePostClicked}
                                disabled={!canSave}
                            >
                                Save Post
                            </Button>
                            <Button onClick={() => setNewPost(false)}>X</Button>
                        </div>
                    </form>
                </section>
            )
        }
    }
    return (
        <div>
            <div className={'flex justify-center'}>
                <Button onClick={() => setNewPost(true)}>New Post</Button>
            </div>
            {onNewPostClick()}
        </div>
    )
}
export default AddPostForm