import React from "react";

import s from "./Navbar.module.css";


const Navbar = () => {
	return (
		<nav className={s.nav} >

			<div className={` ${s.item} ${s.active}`}> <a href='/profile'> Profile </a></div >
			< div > <a href='dialog'
				>MESAGES </a> </div>
			<div> <a href='/news'> NEWS</a></div>
			<div><a href='/music'> MUSIC</a></div>
			<div><a href='/settings'>SETTINGS</a></div>

		</nav >

	);

}
export default Navbar;