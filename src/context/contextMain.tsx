import React, { createContext, useState, useContext } from "react";

type ContextType = {
    loading: boolean;
    setLoading: (value: boolean) => void;

};

const ContextMain = createContext<ContextType>({
    loading: true,
    setLoading: (value: boolean) => { },
});

const ProviderMain: React.FC = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    return (
        <ContextMain.Provider
            value={{
                loading,
                setLoading
            }}
        >
            {children}
        </ContextMain.Provider>
    );
};
export default ProviderMain;

export function useLoading() {
    const infoUser: ContextType = useContext(ContextMain);
    const { loading, setLoading } = infoUser;
    return { loading, setLoading };
}
