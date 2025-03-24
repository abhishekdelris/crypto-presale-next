"use client";
import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "../../../../../shared/redux/store";
import Authenticationswitcher from "../../../../../shared/layout-components/switcher/authenticationswitcher";

const Authenticationlayout = ({ children }) => {
	
	return (
		
		<Fragment>
			<Provider store={store}>
				<HelmetProvider>
					<Helmet>
						<body className='error-1'></body>
					</Helmet>
					{children}
					<Authenticationswitcher />
				</HelmetProvider>
			</Provider>
		</Fragment>
		
	);
};

export default Authenticationlayout;
