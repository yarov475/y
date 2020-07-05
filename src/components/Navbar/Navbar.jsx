import React from "react";

import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
	return (
		<nav className={s.nav} >

			<div> <NavLink to = '/profile' activeClassName= {s.active}> Profile </NavLink></div >
			< div > <NavLink to ='dialog'activeClassName= {s.active}>MESAGES </NavLink> </div>

			<div> <NavLink to = '/news' activeClassName= {s.active}> NEWS </NavLink> </div>
			<div>< NavLink to = '/music' activeClassName= {s.active}> MUSIC</NavLink></div>
			<div><NavLink to ='/settings'activeClassName= {s.active}>SETTINGS</NavLink></div>

		</nav >

	);

}
export default Navbar;