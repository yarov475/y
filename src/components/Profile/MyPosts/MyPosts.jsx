import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {
	let postElement=
		props.posts.map(p=><Post message={p.message} LikesCount= {p.likesCount}/>)

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
				{postElement}
			</div>
		</div>

	)

}
export default MyPosts;