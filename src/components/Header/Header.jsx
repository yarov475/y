import React from "react";
import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<img src="https://author.today/content/2019/08/12/16d805b54b8e446da8718f51a6208727.jpg?width=750&height=500&mode=min" ></img>
			{/*<img src="./../img/kite.png"	></img>*/}


			<div className={s.item}>MY FRIENDS</div>
		</header>

	);

}
export default Header;