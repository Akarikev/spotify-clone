"use client";

import { FC } from "react";
import { MyUserContextProvider } from "./useUser";

interface userProviderProps {
  children: React.ReactNode;
}

const UserProvider: FC<userProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
