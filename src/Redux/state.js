let rerenderEntireTree = () =>{
    console.log("state was changed");
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are You?', likesCount: 1245649411},
            {id: 2, message: 'It\'s my first post', likesCount: 1152454},
        ],
        newPostText: 'It-kamasutra.com'
    },

    dialogPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your Internship?'},
            {id: 3, message: 'I`m shure that everething is Ok!'},
            {id: 4, message: 'How are You?'},
            {id: 5, message: 'Call me please'},
            {id: 6, message: 'You are my best friend'}],
        dialogs: [
            {id: 1, name: 'Artak'},
            {id: 2, name: 'Vazgen'},
            {id: 3, name: 'Anna'},
            {id: 4, name: 'Vika'},
            {id: 5, name: 'Milena'},
            {id: 6, name: 'Seroj'}]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Vazgen"},
            {id: 2, name: "Seroj"},
            {id: 3, name: "Rafo"},
            {id: 4, name: "Arthur"},
            {id: 4, name: "Saq"},
            {id: 6, name: "Hayko"},
        ]
    }
}
window.state = state;


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = " "
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=(newText);
    rerenderEntireTree(state);
};

export default state;