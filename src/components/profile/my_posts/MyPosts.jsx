import s from './MyPosts.module.css'
import Post from "./post/Post";
import {createRef} from "react";


const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post =>
            <Post message={post.message} likes={post.likes}/>);

    let newPostElement = createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.activity}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Create</button>
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