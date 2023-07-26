import s from './MyPosts.module.css'
import Post from "./post/Post";
import {createRef} from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post =>
            <Post key={post.id} message={post.message} likes={post.likes}/>);

    let newPostElement = createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.activity}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Create</button>
                    <button>Update</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;