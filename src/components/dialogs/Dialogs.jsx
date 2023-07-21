import s from './Dialogs.module.css'
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData
        .map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesElements = props.messagesData
        .map(message =>
            <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;