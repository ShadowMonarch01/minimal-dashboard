import React, { createContext, useState, ReactNode } from 'react';

// Define the types for the context
interface AuthContextType {
  user: any; // Replace `any` with a User type if available
  setUser: React.Dispatch<React.SetStateAction<any>>;
  sideBar:boolean;
  setSidebar:React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
export const AuthProvider= ({ children }:{children:ReactNode}) => {
  const [user, setUser] = useState<any>(null);
  const [sideBar, setSidebar] = useState<boolean>(false);
  

  
  return (
    <AuthContext.Provider value={{ user, setUser, sideBar, setSidebar }}>
      {children}
    </AuthContext.Provider>
  );
};
  