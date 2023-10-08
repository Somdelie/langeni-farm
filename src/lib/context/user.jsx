/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { Account } from "appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const loggedIn = await Account.createEmailSession(email, password);
    setUser(loggedIn);
  }

  async function logout() {
    await Account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password) {
    await Account.create(email, password);
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await Account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
