
import React from 'react';
import { useUserSaved } from '../context/contextAuth';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';


const Main: React.FC = () => {
    const { userSaved } = useUserSaved();


    if (userSaved) {
        return (
            <>
                <MainRouter />
            </>
        )
    }
    return (
        <>
            <AuthRouter />
        </>
    )
}
export default Main;