import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={s.activity}>

            My posts
            <div>
                <textarea></textarea>
                <button>Create</button>
                <button>Update</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likes='30'/>
                <Post message='It is my first props' likes='20'/>
            </div>
        </div>
    );
}

export default MyPosts;