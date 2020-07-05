import React from "react";
import s from "./ProfileInfo.module.css"
const ProfileInfo = () => {
	return (
		<div>
		<div >
			<img src="https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" height="300px" width="100%"></img>
			</div>
			<div className={s.descriptionBlock}>
				img + descriptiom
			</div>
		</div >
	)
}
export default ProfileInfo;