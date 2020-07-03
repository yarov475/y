import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={s.content}>
			<img src="https://i.guim.co.uk/img/media/944a252078eaf446c04d5708e19998bb96e12ba2/0_428_6144_3685/master/6144.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b06420910abb46b7a65f65f19d0c5ab5"  ></img>

			<div>

			</div>
			{/* eslint-disable-next-line react/jsx-no-undef */}
			<MyPosts />
		</div >



	);

}
export default Profile;