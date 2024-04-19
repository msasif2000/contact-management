import { createContext, useEffect, useState, ReactNode } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import auth from "../firebase/firebase_config";
import { useQuery } from "@tanstack/react-query";

const GoogleProvider = new GoogleAuthProvider();

interface ThemeInfo {
    googleSignIn: () => Promise<void>;
    loading: boolean;
    signInUser: (email: string, password: string) => Promise<void>;
    setLoading: (loading: boolean) => void;
    user: any;
    logOut: () => Promise<void>;
    createUser: (email: string, password: string) => Promise<void>;
    photo: any;
    name: any;
    userRefetch: () => void;
}

export const ThemeContext = createContext<ThemeInfo | null>(null);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState(null);
    const axiosPublic = useAxiosPublic();
    const [name, setName] = useState("");

    const createUser = (email: string, password: string): Promise<any> => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => userCredential.user
        );
    };

    const signInUser = (email: string, password: string): Promise<any> => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = (): Promise<any> => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, [user, axiosPublic]);


    const { data: infos, refetch: userRefetch } = useQuery({
        queryKey: ["infos", user],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-profile/${user?.email}`);
            return res.data;
        },
    });

    useEffect(() => {
        if (infos) {
            setPhoto(infos?.photo);
            setName(infos?.name);
        }
    }, [infos]);

    const logOut = async (): Promise<void> => {
        await signOut(auth);
        await userRefetch();
    };

    const themeInfo: ThemeInfo = {
        googleSignIn,
        loading,
        signInUser,
        setLoading,
        user,
        logOut,
        createUser,
        photo,
        userRefetch,
        name,
    };

    return (
        <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;