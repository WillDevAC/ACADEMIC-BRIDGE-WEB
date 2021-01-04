import React, { createContext, useState, useContext, useEffect } from "react";
import { useLoading } from './contextMain';

interface User {
    name: string;
    email: string;
}
type ContextType = {
    userSaved: boolean;
    setUserSaved: (value: boolean) => void;
    token: string;
    setToken: (value: string) => void;
    user: User;
    setUser: (value: User) => void;

};

const ContextMain = createContext<ContextType>({
    userSaved: false,
    setUserSaved: (value: boolean) => { },
    token: "",
    setToken: (value: string) => { },
    user: {} as User,
    setUser: (value: User) => { },
});

const Provider: React.FC = ({ children }) => {
    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<User>({} as User);
    const { setLoading } = useLoading();

    useEffect(() => {
        const saved = localStorage.getItem("userSaved");
        const tokess = localStorage.getItem("token");
        const nameUser = localStorage.getItem("nameUser");
        const emailUser = localStorage.getItem("emailUser");
        console.log(saved)
        if (String(saved) === "true") {
            setUserSaved(true);
            setToken(String(tokess));
            setUser({
                name: String(nameUser),
                email: String(emailUser)
            })
        }

        setLoading(false);

    }, [setLoading]);

    // useEffect(() => {
    //     window.addEventListener('beforeunload', () => {
    //         setLoading(true);
    //         const a = setTimeout(() => {
    //             setLoading(false)
    //         }, 3000)
    //         clearTimeout(a);
    //     })
    // }, [])


    return (
        <ContextMain.Provider
            value={{
                userSaved,
                setUserSaved,
                token,
                setToken,
                user,
                setUser

            }}
        >
            {children}
        </ContextMain.Provider>
    );
};
export default Provider;

export function useUserSaved() {
    const infoUser: ContextType = useContext(ContextMain);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}

export function useToken() {
    const infoUser: ContextType = useContext(ContextMain);
    const { token, setToken } = infoUser;
    return { token, setToken };
}


export function useUserData() {
    const infoUser: ContextType = useContext(ContextMain);
    const { user, setUser } = infoUser;
    return { user, setUser };
}