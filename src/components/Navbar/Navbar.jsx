import React from "react";

import s from "./Navbar.module.css";


const Navbar = () => {
	return (
		<nav className={s.nav} >

			<div className={` ${s.item} ${s.active}`}> <a>Profile </a></div >
			< div > <a>MESAGES </a> </div>
			<div> <a> NEWS</a></div>
			<div><a>MUSIC</a></div>
			<div><a>SETTINGS</a></div>

		</nav >

	);

}
export default Navbar;