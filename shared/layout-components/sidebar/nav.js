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
			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Crypto News" }, 
		],
	},
	{
		title: "Coin Management", icon: "fa fa-coins", type: "sub", active: false, selected: false,path: "/admin/crypto-coins-icos", dirchange: false, children: [
			{ path: "/admin/crypto-coins-icos", type: "link", active: false, selected: false, dirchange: false, title: "Crypto News" }, 
		],
	},
	{
		title: "Trending Presales", icon: "fa fa-chart-line", type: "sub", active: false, selected: false,path: "/admin/trending_presales", dirchange: false, children: [
			{ path: "/admin/trending_presales", type: "link", active: false, selected: false, dirchange: false, title: "Trending Presales" }, 
		],
	},
	{
		title: "Best Presale", icon: "fa fa-star", type: "sub", active: false, selected: false,path: "/admin/best_presale", dirchange: false, children: [
			{ path: "/admin/best_presale", type: "link", active: false, selected: false, dirchange: false, title: "Best Presale" }, 
		],
	},
	{
		title: "Featured", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/featured", dirchange: false, children: [
			{ path: "/admin/featured", type: "link", active: false, selected: false, dirchange: false, title: "Featured" }, 
		],
	},
	// {Trending Presales
	// 	title: "Authentication", icon: "ti-lock", type: "sub", active: false, selected: false, dirchange: false, children: [
	// 		{ path: "/authentication/error404", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
	// 	],
	// },
	];