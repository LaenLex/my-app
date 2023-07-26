import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body));
    }

    return <Dialogs updateNewMessageBody={updateNewMessageText} sendMessage={onSendMessageClick} messagesPage={state} />;
}

export default DialogsContainer;