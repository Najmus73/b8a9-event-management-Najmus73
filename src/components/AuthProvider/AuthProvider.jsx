import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext =createContext(null);

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    const registerUser = (email,password) =>{
         return createUserWithEmailAndPassword(auth,email,password);
    }


    const LogInUser = (email,password) =>{
           return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
           setUser(currentUser)
        })
        return() =>{
            unsubscribe()
        }
    },[])
    

     const authInfo ={user,registerUser,LogInUser}

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