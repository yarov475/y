import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreeator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) =>
{
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addpost = () => {
                        //props.addPost();
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreeator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addpost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>

                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;