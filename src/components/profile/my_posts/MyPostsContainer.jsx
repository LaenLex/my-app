import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;