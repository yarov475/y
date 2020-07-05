import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

let posts=[
	{id:1, message:"how are you?", likesCount:12},
	{id:2, message:"helo Frirnd!!!", likesCount:15},
	{id:3, message:"helo Frirnds!!!", likesCount:15}
]
let postElement=posts.map(p=><Post message={p.message} LikesCount= {p.likesCount}/>)
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
				{postElement}
			</div>
		</div>

	)

}
export default MyPosts;