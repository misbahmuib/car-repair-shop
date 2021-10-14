import initializationAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializationAuthentication();
const useFirebase=()=>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth();
    
    
    const signInWithGoogle =()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));

    }

    //manage user state change

    useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }else{
                setUser({});
            }
            setIsLoading(false);
        });
       
        return ()=> unSubscribe;
    },[]);



    //logout

    const logOut=()=>{
        setIsLoading(true)
       signOut(auth)
       .then(()=>{
           setUser({});
       })
       .finally(()=>setIsLoading(false));
    };


    //retuen need things
    return{
        user,
        signInWithGoogle,
        logOut,
        isLoading,

    }


}
export default useFirebase;