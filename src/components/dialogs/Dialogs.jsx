import s from './Dialogs.module.css'
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";
import {createRef} from "react";

const Dialogs = (props) => {


    let dialogsElements = props.pageData.dialogsData
        .map(dialog =>
            <DialogItem key={dialog.id} name={dialog.name} url={dialog.url}/>);

    let messagesElements = props.pageData.messagesData
        .map(message =>
            <Message key={message.id} message={message.message}/>)

    let newMessageElement = createRef();

    let addMessage = () => {
        props.store.addMessage();
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.store.updateNewMessageText(text);
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
                              ref={newMessageElement}
                              value={props.pageData.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Create message</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;