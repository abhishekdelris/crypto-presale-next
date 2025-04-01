import React from "react";

export const MENUITEMS = [ 
	{
		menutitle: "DASHBOARD",
	},
	{
		path: "/admin/dashboard", title: "Dashboard", icon: "ti-home", type: "link", active: false, selected: false, dirchange: false
	},
	
	{
		menutitle: "OTHER PAGES",
	},
	{
		title: "Content", icon: "ti-menu", type: "sub", active: false, selected: false,path: "/admin/content", dirchange: false, children: [
			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Guest Post" }, 
			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Press Release" }, 
			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Listicle" }, 
			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Project Review" }, 
			
			
			
		],
	},
	{
		title: "Authentication", icon: "ti-lock", type: "sub", active: false, selected: false, dirchange: false, children: [
			{ path: "/authentication/error404", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
		],
	},
	];