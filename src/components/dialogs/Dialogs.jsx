import s from './Dialogs.module.css'
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData
        .map(dialog =>
            <DialogItem key={dialog.id} name={dialog.name} url={dialog.url}/>);

    let messagesElements = props.messagesPage.messagesData
        .map(message =>
            <Message key={message.id} message={message.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={updateNewMessageText}
                              value={props.messagesPage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Create message</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;