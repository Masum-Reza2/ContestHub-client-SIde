/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1 create account
    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2 loginUser
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 3 logOut user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    // 4 updateUserProfile
    const updateUserProfile = (name, imageUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageUrl
        })
    }

    // 5 update user email
    const updateUserEmail = (newEmail) => {
        setLoading(true);
        return updateEmail(auth.currentUser, newEmail)
    }

    // 6 update user password
    const updateUserPassword = (newPassword) => {
        setLoading(true);
        return updatePassword(user, newPassword)
    }

    // 7 delete a user
    const deleteHimOrHer = () => {
        setLoading(true);
        return deleteUser(user)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('current user is', currentUser);
            // jwt activities here remember the setLoading
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const globalInfo = {
        user,
        loading,
        setLoading,
        createAccount,
        loginUser,
        logOutUser,
        updateUserProfile,
        updateUserEmail,
        updateUserPassword,
        deleteHimOrHer,
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom