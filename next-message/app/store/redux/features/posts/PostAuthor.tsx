//@ts-nocheck
import {useSelector} from "react-redux";
import {selectAllUsers} from "../users/usersSlice";

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId);
    return <span className={'mx-1'}>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor