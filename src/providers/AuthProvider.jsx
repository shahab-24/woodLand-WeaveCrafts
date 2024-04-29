import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';





export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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
  const githubLogIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
      
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
  githubLogIn,
  logOut,
 
}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;