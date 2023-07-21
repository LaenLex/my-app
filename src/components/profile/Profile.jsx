import s from './Profile.module.css'
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;