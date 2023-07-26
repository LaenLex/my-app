import s from './Profile.module.css'
import ProfileInfo from "./profile_info/ProfileInfo";
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;