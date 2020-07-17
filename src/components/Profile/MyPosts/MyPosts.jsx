import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreeator} from "../../../redux/state";


const MyPosts = (props) => {
	let postElement =
		props.posts.map(p => <Post message={p.message} LikesCount={p.likesCount}/>);
	let newPostElement = React.createRef();

	let addpost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreeator(text);
        props.dispatch(action);

	}

	return (
		<div className={s.myPosts}>
			<h3> My Posts</h3>
			<div>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
			</div>
			<div>
				<button onClick={addpost}>Add Post</button>

			</div>

			<div className={s.posts}>
				{postElement}
			</div>
		</div>

	)
}

export default MyPosts;