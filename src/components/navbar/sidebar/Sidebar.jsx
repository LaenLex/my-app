import s from './Sidebar.module.css'
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    let postsElements = props.friends
        .map(friend =>
            <Friend url={friend.url} name={friend.name}/>);
    return (
        <div className={s.friendsInfo}>
            <div>Friends</div>
            <div className={s.friends}>{postsElements}</div>
        </div>
    );
}

export default Sidebar;