const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        newPostText:"Whattt?!",
        posts: [
            {id: 1, message: "how are you?", likesCount: 12},
            {id: 2, message: "helo Friend!!!", likesCount: 15},
            {id: 3, message: "helo Friends!!!", likesCount: 15}
        ]
    };



const profileReducer = ( state=initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy ={...state};
                stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreeator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT,newText: text})

export default profileReducer;