const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = " "
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = (newText);
        this._callSubscriber(this._state);

    },
    dispatch(action) {  //{ type:  'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " "
            this._callSubscriber(this._state);
        } else {
            if (action.type === UPDATE_NEW_POST_TEXT) {

                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);

            }
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCrator = (text) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text});


export default store;
window.store = store;
//store-OOP