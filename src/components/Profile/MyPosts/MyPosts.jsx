import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My Pposts
			<div>
				<textarea></textarea>
				<button>+</button>
			</div>


			<div className={s.posts}>

				<Post />
			</div>
		</div>

	)

}
export default MyPosts;