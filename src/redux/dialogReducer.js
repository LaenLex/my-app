const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'I'},
        {id: 2, message: 'am'},
        {id: 3, message: 'dummy'},
        {id: 4, message: 'and'},
        {id: 5, message: 'your'},
        {id: 6, message: 'mother'},
        {id: 7, message: 'is'},
        {id: 8, message: 'my'},
        {id: 9, message: 'mother'},
        {id: 10, message: '!!!!'},
    ],
    newMessageText: 'insert msg pls',
    dialogsData: [
        {
            id: 1,
            name: 'Vasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"
        },
        {
            id: 2,
            name: 'Basya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"
        },
        {
            id: 3,
            name: 'Dasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"
        },
        {
            id: 4,
            name: 'Masya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"
        },
        {
            id: 5,
            name: 'Fasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"
        },
        {
            id: 6,
            name: 'Gasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"
        },
        {
            id: 7,
            name: 'Dasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"
        },
        {
            id: 8,
            name: 'Sasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"
        },
        {
            id: 9,
            name: 'Pasya',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"
        },
    ]
};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let idNew = state.messagesData.length + 1;
            let newMessage =
                {
                    id: idNew,
                    message: state.newMessageText
                };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export default dialogReducer;