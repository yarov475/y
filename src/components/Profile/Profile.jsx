import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={s.content}>
			<img src="https://www.sciencealert.com/images/2019-08/processed/dolphinadoption_1024.jpg" width="100%" ></img>

			<div>
				img + descriptiom
			</div>
			{/* eslint-disable-next-line react/jsx-no-undef */}
			<MyPosts />
		</div >



	);

}
export default Profile;