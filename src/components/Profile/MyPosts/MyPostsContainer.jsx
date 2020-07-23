import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreeator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
	let state = props.store.getState();



	let addpost = () => {
		//props.addPost();
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreeator(text);
		props.store.dispatch(action);
	}


	return 	(<MyPosts updateNewPostText= {onPostChange} addPost = {addpost}
					 posts = {state.profilePage.posts}
					 newPostText={state.profilePage.newPostText}
	/>)
}

export default MyPostsContainer;