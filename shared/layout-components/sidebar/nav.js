import React from "react";

// export const MENUITEMS = [

// 	{
// 		menutitle: "DASHBOARD",
// 	},
// 	{
// 		path: "/admin/dashboard", title: "Dashboard", icon: "ti-home", type: "link", active: false, selected: false, dirchange: false
// 	},
	
// 	{
// 		menutitle: "OTHER PAGES",
// 	},
// 	{
// 		title: "Content", icon: "ti-menu", type: "sub", active: false, selected: false,path: "/admin/content", dirchange: false, children: [
// 			{ path: "/admin/content", type: "link", active: false, selected: false, dirchange: false, title: "Crypto News" }, 
// 		],
// 	},
// 	{
// 		title: "Coin Management", icon: "fa fa-coins", type: "sub", active: false, selected: false,path: "/admin/crypto-coins-icos", dirchange: false, children: [
// 			{ path: "/admin/crypto-coins-icos", type: "link", active: false, selected: false, dirchange: false, title: "Crypto News" },
// 			{ path: "/admin/lunchpad", type: "link", active: false, selected: false, dirchange: false, title: "Launchpad" }, 
// 		],
// 	},
// 	{
// 		title: "Trending Presales", icon: "fa fa-chart-line", type: "sub", active: false, selected: false,path: "/admin/trending_presales", dirchange: false, children: [
// 			{ path: "/admin/trending_presales", type: "link", active: false, selected: false, dirchange: false, title: "Trending Presales" }, 
// 		],
// 	},
// 	{
// 		title: "Best Presale", icon: "fa fa-star", type: "sub", active: false, selected: false,path: "/admin/best_presale", dirchange: false, children: [
// 			{ path: "/admin/best_presale", type: "link", active: false, selected: false, dirchange: false, title: "Best Presale" }, 
// 		],
// 	},
// 	{
// 		title: "Featured", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/featured", dirchange: false, children: [
// 			{ path: "/admin/featured", type: "link", active: false, selected: false, dirchange: false, title: "Featured" }, 
// 		],
// 	},
// 	{
// 		title: "Project Lead", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/project_categories", dirchange: false, children: [
// 			{ path: "/admin/project_categories", type: "link", active: false, selected: false, dirchange: false, title: "Project Categories" }, 
// 		],
// 	},
// 	{
// 		title: "Frotend Enquiry", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/contactUs", dirchange: false, children: [
// 			{ path: "/admin/contactUs", type: "link", active: false, selected: false, dirchange: false, title: "ContactUs" }, 
// 		],
// 	},
// 	{
// 		title: "ICO Project Management", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/featured", dirchange: false, children: [
// 			{ path: "/admin/ico_project", type: "link", active: false, selected: false, dirchange: false, title: "ICO Project" }, 
// 			{ path: "/admin/ico_project_type", type: "link", active: false, selected: false, dirchange: false, title: "ICO Project Type" }, 
// 		],
// 	},
// 	{
// 		title: "Other", icon: "fa fa-rocket", type: "sub", active: false, selected: false,path: "/admin/faqs", dirchange: false, children: [
// 			{ path: "/admin/faqs", type: "link", active: false, selected: false, dirchange: false, title: "Faqs" }, 
			
// 		],
// 	},
// 	// {Trending Presales
// 	// 	title: "Authentication", icon: "ti-lock", type: "sub", active: false, selected: false, dirchange: false, children: [
// 	// 		{ path: "/authentication/error404", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
// 	// 	],
// 	// },
// 	];



export const MENUITEMS = [ 
	{
		menutitle: "DASHBOARD",
	},
	{
		path: "/admin/dashboard", 
		title: "Dashboard", 
		icon: "fa fa-home", 
		type: "link", 
		active: false, 
		selected: false, 
		dirchange: false
	},

	{
		menutitle: "OTHER PAGES",
	},
	{
		title: "Content", 
		icon: "fa fa-newspaper", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/content", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/content", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Crypto News" 
			}, 
		],
	},
	{
		title: "Coin Management", 
		icon: "fa fa-coins", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/crypto-coins-icos", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/crypto-coins-icos", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Crypto News" 
			},
			{ 
				path: "/admin/launchpad", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Launchpad" 
			}, 
		],
	},
	{
		title: "Trending Presales", 
		icon: "fa fa-fire", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/trending_presales", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/trending_presales", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Trending Presales" 
			}, 
		],
	},
	{
		title: "Best Presale", 
		icon: "fa fa-star", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/best_presale", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/best_presale", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Best Presale" 
			}, 
		],
	},
	{
		title: "Featured", 
		icon: "fa fa-rocket", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/featured", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/featured", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Featured" 
			}, 
		],
	},
	{
		title: "Project Lead", 
		icon: "fa fa-project-diagram", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/project_categories", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/project_categories", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Project Categories" 
			}, 
		],
	},
	{
		title: "Frontend Enquiry", 
		icon: "fa fa-envelope", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/contactUs", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/contactUs", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "ContactUs" 
			}, 
		],
	},
	{
		title: "ICO Project Manag..", 
		icon: "fa fa-tasks", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/featured", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/ico_project", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "ICO Project" 
			}, 
			{ 
				path: "/admin/ico_project_type", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "ICO Project Type" 
			}, 
		],
	},
	{
		title: "Other", 
		icon: "fa fa-question-circle", 
		type: "sub", 
		active: false, 
		selected: false,
		path: "/admin/faqs", 
		dirchange: false, 
		children: [
			{ 
				path: "/admin/faqs", 
				type: "link", 
				active: false, 
				selected: false, 
				dirchange: false, 
				title: "Faqs" 
			}, 
		],
	},
];
