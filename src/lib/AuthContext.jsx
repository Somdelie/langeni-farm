/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwrite/config";
import { ToastContainer, toast } from "react-toastify";
import { ID } from "appwrite";
import Loader from "./context/Loader";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );

      let accountDetails = await account.get();

      toast.success("Login Successfully!");
      // console.log("accountDetails:", accountDetails);
      setUser(accountDetails);
      // console.log(response)
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error(error.message);
    }
    setLoading(false);
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );

      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(response)
    } catch (error) {
      console.log(error);
      return toast.error(error.message);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    setLoading(true);
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <ToastContainer />
      {loading ?   <Loader/> : children}
      
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
