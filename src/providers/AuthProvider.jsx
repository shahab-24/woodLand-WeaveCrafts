import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/cordova';





export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = ( email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  const googleLogIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    } 
  }, []);


  const userInfo = {
    user,
    loading,
  createUser,
  logInUser,
  googleLogIn,
  logOut
}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;