import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post =>
            <Post message={post.message} likes={post.likes}/>);

    return (
        <div className={s.activity}>
            My posts
            <div>
                <textarea></textarea>
                <button>Create</button>
                <button>Update</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;