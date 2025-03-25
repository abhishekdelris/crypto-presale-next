import React from "react";

export const MENUITEMS = [ 
	{
		menutitle: "DASHBOARD",
	},
	{
		path: "/admin/dashboard", title: "Dashboard", icon: "ti-home", type: "link", active: false, selected: false, dirchange: false
	},
	// {
	// 	menutitle: "Content",
	// },
	// {
	// 	path: "/admin/guestPost", title: "Guest Post", icon: "ti-pencil-alt", type: "link", active: false, selected: false, dirchange: false
	// },
	// {
	// 	path: "/admin/pressRelease", title: "Press Release", icon: "ti-announcement", type: "link", active: false, selected: false, dirchange: false
	// },
	// {
	// 	path: "/admin/listicle", title: "Listicle", icon: "ti-list", type: "link", active: false, selected: false, dirchange: false
	// },
	// {
	// 	path: "/admin/projectReview", title: "Project Review", icon: "ti-check-box", type: "link", active: false, selected: false, dirchange: false
	// },
	{
		menutitle: "OTHER PAGES",
	},
	{
		title: "Content", icon: "ti-menu", type: "sub", active: false, selected: false, dirchange: false, children: [
			{ path: "/admin/guestPost", type: "link", active: false, selected: false, dirchange: false, title: "Guest Post" }, 
			{ path: "/admin/pressRelease", type: "link", active: false, selected: false, dirchange: false, title: "Press Release" }, 
			{ path: "/admin/listicle", type: "link", active: false, selected: false, dirchange: false, title: "Listicle" }, 
			{ path: "/admin/projectReview", type: "link", active: false, selected: false, dirchange: false, title: "Project Review" }, 
			
			
			// {
			// 	title: "", type: "sub", active: false, selected: false, dirchange: false, children: [
			// 		{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-01" },
			// 		{
			// 			title: "Level-02", type: "sub", active: false, selected: false, dirchange: false, children: [
			// 				{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-11" },
			// 				{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-12" },
			// 			],
			// 		},
			// 	],
			// },
		],
	},
	{
		title: "Authentication", icon: "ti-lock", type: "sub", active: false, selected: false, dirchange: false, children: [
			{ path: "/authentication/error404", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
		],
	},
	// {
	// 	title: "Content", icon: "ti-menu", type: "sub", active: false, selected: false, dirchange: false, children: [
	// 		{ path: "admin/guestPost", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
	// 	],
	// },
	
	
	

];