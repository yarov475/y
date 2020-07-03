import React from "react";
import s from "./MyPosts.module.css"

const MyPosts = () => {
	return (
		<div>
			<textarea></textarea>
			<button>+</button>
			<button>-</button>


			<div className={s.item}>new post</div>
			<div>post1</div>
			<div>post2</div>

		</div>



	);

}
export default MyPosts;