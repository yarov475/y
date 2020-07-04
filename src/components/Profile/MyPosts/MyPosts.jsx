import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My Posts
			<div>
				<textarea></textarea>

			</div>
			<div className="">
				<button>Add Post</button>
				<br></br>
			</div>

			<div className={s.posts}>

				<Post message="How are you" />
				<Post message="React is awesome" />
			
			</div>
		</div>

	)

}
export default MyPosts;