import s from './../Sidebar.module.css'

const Friend = (props) => {
    return (
        <div className={s.info}>
            <img alt={props.name} src={props.url}/>
            <div className={s.name}>{props.name}</div>
        </div>
    );

}

export default Friend;