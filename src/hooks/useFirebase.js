import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    getIdToken
} from "firebase/auth";

// Initializing firebase
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUserToDB(email, name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error.message);
                    });
                history.replace("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                const destination = location?.state?.from || "/dashboard";
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Google Sign In
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // Save user to database if does not exist
                saveUserToDB(user.email, user.displayName, "PUT");
                setAuthError("");
                const destination = location?.state?.from || "/dashboard";
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Observe user login state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                setUser(user);
                getIdToken(user).then((idToken) => {
                    setToken(idToken);
                });
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`https://stark-beyond-32780.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    // Logging out user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://stark-beyond-32780.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then();
    };

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
        signInWithGoogle
    };
};

export default useFirebase;
