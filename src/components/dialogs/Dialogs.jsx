import s from './Dialogs.module.css'
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";
import {createRef} from "react";

const Dialogs = (props) => {


    let dialogsElements = props.pageData.dialogsData
        .map(dialog =>
            <DialogItem id={dialog.id} name={dialog.name} url={dialog.url}/>);

    let messagesElements = props.pageData.messagesData
        .map(message =>
            <Message message={message.message}/>)

    let newMessageElement = createRef();

    let addMessage = () => {
        let newText = newMessageElement.current.value;
        alert(newText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Create message</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;