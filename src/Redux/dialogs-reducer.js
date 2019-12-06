const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body});


export default dialogsReducer;