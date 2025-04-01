"use client";
import { Provider } from "react-redux";
import "./globals.scss";
import store from "../../../shared/redux/store";
import { AuthProvider } from "../../hooks/admin_authContext";

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </AuthProvider>
  );
};
export default RootLayout;
