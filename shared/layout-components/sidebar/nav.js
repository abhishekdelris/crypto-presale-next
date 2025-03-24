import React from "react";

export const MENUITEMS = [
	{
		menutitle: "DASHBOARD",
	},
	{
		path: "/dashboard", title: "Dashboard", icon: "ti-home", type: "link", active: false, selected: false, dirchange: false
	},
	{
		menutitle: "OTHER PAGES",
	},
	{
		title: "Submenu", icon: "ti-menu", type: "sub", active: false, selected: false, dirchange: false, children: [
			{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Submenu-01" },
			{
				title: "Submenu-02", type: "sub", active: false, selected: false, dirchange: false, children: [
					{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-01" },
					{
						title: "Level-02", type: "sub", active: false, selected: false, dirchange: false, children: [
							{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-11" },
							{ path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Level-12" },
						],
					},
				],
			},
		],
	},
	{
		title: "Authentication", icon: "ti-lock", type: "sub", active: false, selected: false, dirchange: false, children: [
			{ path: "/authentication/error404", type: "link", active: false, selected: false, dirchange: false, title: "404 Error " },
			
		],
	},
	
	
	

];