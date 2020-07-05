import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

let postData=[
	{id:1, message:"how are you?", likesCount:12},
	{id:2, message:"helo Frirnd!!!", likesCount:15}
]
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
				<Post message={postData[0].message} LikesCount= {postData[0].likesCount}/>
				<Post message={postData[1].message} LikesCount= {postData[1].likesCount}/>
			</div>
		</div>

	)

}
export default MyPosts;