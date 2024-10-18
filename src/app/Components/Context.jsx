// 'use client'
// import { createContext, useContext, useState } from "react";


// const AuthContext = createContext();

// function Context({children}) {

//     // const [user,setUser]=useState(null);

//     const [user, setUser] = useState(() => {
//       const storedUser = localStorage.getItem('user');
//       return storedUser ? JSON.parse(storedUser) : null;
//   });

//   useEffect(() => {
//       if (user) {
//           localStorage.setItem('user', JSON.stringify(user));
//       } else {
//           localStorage.removeItem('user');
//       }
//   }, [user]);




// const login=(data)=>{
//     setUser(data);
//     localStorage.setItem('user', JSON.stringify(data));
// }

// const logout=()=>{
//     setUser(null);
//     localStorage.removeItem('user');
// }
//   return (
//     <div>
//         <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//     </div>
//   )
// };

// export default Context;

// export function useAuth() {
//     return useContext(AuthContext);
//   }


'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function Context({ children }) {


    const [user, setUser] = useState(() => {
      if (typeof window !== 'undefined') {
          const storedUser = localStorage.getItem('user');
          return storedUser ? JSON.parse(storedUser) : null;
      }
      return null;
  });

 
  useEffect(() => {
      if (typeof window !== 'undefined') {
          if (user) {
              localStorage.setItem('user', JSON.stringify(user));
          } else {
              localStorage.removeItem('user');
          }
      }
  }, [user]);


    const login = (data) => {
        setUser(data);
    };

    const logout = () => {
        setUser(null);
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default Context;

export function useAuth() {
    return useContext(AuthContext);
}
