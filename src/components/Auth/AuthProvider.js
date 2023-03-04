import React,{useContext,useState} from 'react'
import {auth} from './firebase'
import {signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

const AuthContext = React.createContext("Default Context: no user logged in");

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthProvider({children})
{
    const [currentUser,setCurrentUser] = useState(null)
    const value = {
        currentUser,
        signout,
        signin,
        signup
    }
    
    function signout()
    {
        setCurrentUser(null);
        signOut(auth);
    }

    function signin(email,password)
    {
        //initialize current user
        setCurrentUser(null);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setCurrentUser(email);
            })
            .catch((error) => {
                setCurrentUser(null);
                
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    function signup(usr,pwd)
    {
        //initialize current user
        setCurrentUser(null);

        createUserWithEmailAndPassword(auth,usr,pwd)
        .then((userCredential) => {
            // Sign up
            setCurrentUser(usr);
            
        })
        .catch((error) => {
            setCurrentUser(null);
            
            const errorMessage = error.message;
            alert(errorMessage);
        });
        
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
