const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            newPostText:"Whattt?!",
            posts: [
                {id: 1, message: "how are you?", likesCount: 12},
                {id: 2, message: "helo Friend!!!", likesCount: 15},
                {id: 3, message: "helo Friends!!!", likesCount: 15}
            ]
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dima', src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxUVFxcYFxoYFxUYFRUWFxUVFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtL"},
                {id: 2, name: 'Sacha'}
            ],

            messages:[
                {id: 1, message: "hi, guy!!!!!"},
                {id: 2, message: "Coool"}
            ],
            newMessageBody: " "
        },
        sideBar: {
            friends:[
                {id:1, avatar:1},
                {id:2, avatar:2}
            ]
        },

    },
    subscribe(observer) {
        this._callSubscriber=observer;
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },

    // addPost() {
    //     let newPost =  {
    //         id: 5,
    //             message: this._state.profilePage.newPostText,
    //             likesCount: 1
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText='';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText=newText;
    //     this._callSubscriber(this._state);
    // },


   dispatch(action) {
        if(action.type === ADD_POST){
            let newPost =  {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 1
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);

        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = ' ';
            this._state.dialogPage.messages.push( {id: 2, message: body});
            this._callSubscriber(this._state);
        }
   }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreeator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT,newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator  = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text})


export default store;
window.store =store;