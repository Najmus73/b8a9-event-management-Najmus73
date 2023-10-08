import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext =createContext(null);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading ,setLoading] = useState(true)


    const registerUser = (email,password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password);
    }


    const LogInUser = (email,password) =>{
        setLoading(true)
           return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
           setUser(currentUser)
           setLoading(false)
        })
        return() =>{
            unsubscribe()
        }
    },[])
    

     const authInfo ={user,registerUser,LogInUser,logOut,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}