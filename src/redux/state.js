

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likes: 30},
            {id: 2, message: 'It is my first props', likes: 20},
            {id: 3, message: 'Hello world', likes: 18},
            {id: 4, message: 'Hello 1111 world', likes: 10},
        ]
    },
    messagesPage2: {
        messagesData: [
            {id: 1, message: 'I'},
            {id: 2, message: 'am'},
            {id: 3, message: 'dummy'}
        ],
        dialogsData: [
            {id: 1, name: 'Vasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 2, name: 'Basya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 3, name: 'Dasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
            {id: 4, name: 'Masya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 5, name: 'Fasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 6, name: 'Gasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
            {id: 7, name: 'Dasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 8, name: 'Sasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 9, name: 'Pasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
        ]
    },
    messagesPage: {
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
        dialogsData: [
            {id: 1, name: 'Vasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 2, name: 'Basya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 3, name: 'Dasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
            {id: 4, name: 'Masya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 5, name: 'Fasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 6, name: 'Gasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
            {id: 7, name: 'Dasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 8, name: 'Sasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 9, name: 'Pasya', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'William', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"},
            {id: 2, name: 'Luci', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"},
            {id: 3, name: 'Jameson', url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    // rerenderEntireTree(state);
}

export default state;