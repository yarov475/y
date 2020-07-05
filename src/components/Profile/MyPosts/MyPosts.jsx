import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={s.myPosts}>
			<h3> My Posts</h3>
			<div>
				<textarea></textarea>

			</div>
			<div className="">
				<button>Add Post</button>

			</div>

			<div className={s.posts}>
				<Post message="How are you" LikesCount="18" />
			</div>
		</div>

	)

}
export default MyPosts;