import React from "react";
import s from "./Post.module.css"

const Post = () => {
	return (
		<div>

			<div className={s.item}>

				<img src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/05/Shaman_king.jpg/275px-Shaman_king.jpg" alt="" />
                   post 1
						 <div className={s.like}>
					<span> + Like</span>
				</div>
			</div>

		</div>



	);

}
export default Post;