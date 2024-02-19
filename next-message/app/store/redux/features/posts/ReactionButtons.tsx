//@ts-nocheck
import {useDispatch} from "react-redux";
import {reactionAdded} from "./postsSlice";
import {Button} from "@mui/material";

const reactionEmoji = {
    heart: '❤️',
    thumbsUp: '👍',
    wow: '😮',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <Button
                key={name}
                type={"button"}
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}>
                {emoji}{post.reactions[name]}
            </Button>
        )
    })
    return <div>{reactionButtons}</div>
}
export default ReactionButtons