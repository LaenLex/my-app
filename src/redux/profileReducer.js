const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likes: 30},
        {id: 2, message: 'It is my first props', likes: 20},
        {id: 3, message: 'Hello world', likes: 18},
        {id: 4, message: 'Hello 1111 world', likes: 10},
    ],
    newPostText: 'Hello world!'
}
const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let idNew = state.postsData.length + 1;
            let newPost = {
                id: idNew,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;