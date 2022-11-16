import React from 'react';
import { AuthForm } from './components/AuthForm';
import { useAuth } from '../../contexts/AuthContext';

export function LoginPage () {
    const { isAuth, login, logout } = useAuth();

    return (
        <>
            <h1>Вход</h1>

            <AuthForm onLogin={login} />
        </>
    )
}