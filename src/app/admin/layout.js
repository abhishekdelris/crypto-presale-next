"use client";
import { Provider } from "react-redux";
import "./globals.scss";
import store from "../../../shared/redux/store";
import { AuthProvider } from "../../hooks/admin_authContext";
import AdminSessionprovidersWrappers from '@/hooks/providers/AdminSessionprovidersWrappers';

const RootLayout = ({ children }) => {
  return (
    <AdminSessionprovidersWrappers>
    <AuthProvider>
      <Provider store={store}>
        {children} 
      </Provider>
    </AuthProvider>
    </AdminSessionprovidersWrappers>
  );
};
export default RootLayout;
