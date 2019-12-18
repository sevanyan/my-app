import profileReducer, {ADD_POST,UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import dialogsReducer, {SEND_MESSAGE} from  "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are You?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 115},
            ],
            newPostText: 'It-kamasutra.com'
        },
        dialogsPage: {
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
                {id: 6, name: 'Seroj'}],

            newMessageBody: ""

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }

}



export default store;
window.store = store;
