let initialState = {
    friends: [
        {
            id: 1,
            name: 'William',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061937_1-fikiwiki-com-p-kartinki-zhabi-2.jpg"
        },
        {
            id: 2,
            name: 'Luci',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061864_2-fikiwiki-com-p-kartinki-zhabi-3.jpg"
        },
        {
            id: 3,
            name: 'Jameson',
            url: "https://fikiwiki.com/uploads/posts/2022-02/thumbs/1645061917_3-fikiwiki-com-p-kartinki-zhabi-4.jpg"
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;