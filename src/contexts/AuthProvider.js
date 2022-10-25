import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const logIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const facebookLogin = () =>{
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('useEffect onAuthStateChanged', currentUser);
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {user, createUser, loading, updateUserProfile, logIn, googleLogin, githubLogin, facebookLogin, logOut }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;