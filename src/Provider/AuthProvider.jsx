import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const   AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)


    //----------Created-----A-----New---User-----
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //--------SingInUser---------
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //---------LogOut-----User--------
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }





    //------------Manage-----User----------
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User', currentUser)
            setLoading(false)
        }) 
        return () => {
          return unSubscribe()
        }
    },[])



    //---------Information----------
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;