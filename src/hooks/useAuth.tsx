import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemePovider";

interface AuthContextType {
    googleSignIn: () => Promise<void>;
    loading: boolean;
    signInUser: (email: string, password: string) => Promise<void>;
    setLoading: (loading: boolean) => void;
    user: any;
    logOut: () => Promise<void>;
    createUser: (email: string, password: string) => Promise<void>;
    photo: any;
    name: string;

    userRefetch: () => void;
    packages: any;
}

const useAuth: () => AuthContextType = () => {
    const auth = useContext(ThemeContext);

    if (!auth) {
        throw new Error("useAuth must be used within a ThemeProvider");
    }

    return {
        ...auth,
        packages: null // Replace null with the appropriate value or remove this line if 'packages' is not needed
    };
};

export default useAuth;