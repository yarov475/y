import React from "react";
import s from "./Post.module.css"
const Post = (props) => {
	return (
		<div>
			<div className={s.item}>
				<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/05/Shaman_king.jpg/275px-Shaman_king.jpg" alt="" />
				{props.message}
				<div className={s.like}>
					<span>  Like </span>{props.LikesCount}
				</div>
			</div>
		</div>
	);
}
export default Post;