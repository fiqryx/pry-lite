/* eslint-disable @typescript-eslint/no-unused-vars */

import cookies from 'js-cookie';
import type { User } from '@/types/user';

export interface SignUpParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignInWithOAuthParams {
    provider: 'google' | 'github' | 'discord';
}

export interface SignInWithPasswordParams {
    email: string;
    password: string;
}

export interface ResetPasswordParams {
    email: string;
}

const key = "session.token"

const user = {
    id: '1',
    avatar: '/assets/avatar-8.jpg',
    firstName: 'Jhon',
    lastName: 'Diver',
    email: 'user@example.com',
} satisfies User;

function generateToken(): string {
    const arr = new Uint8Array(12);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

export async function signUp(_: SignUpParams): Promise<{ error?: string }> {
    const token = generateToken();

    cookies.set(key, token, {
        secure: true,
        maxAge: 7 * 3600
    })

    return {};
}

export async function signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
}

export async function signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;

    if (email !== 'user@example.com' || password !== 'user123') {
        return { error: 'Invalid credentials' };
    }

    const token = generateToken();
    console.log({ token });

    cookies.set(key, token, {
        secure: true,
        expires: 7 * 3600
    })

    return {};
}

export async function resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Password reset not implemented' };
}

export async function updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
}

export async function getUser(): Promise<{ data?: User; error?: string }> {
    const token = cookies.get(key)

    if (!token) {
        return { error: "Your session has been expired" };
    }

    return { data: user };
}

export async function signOut(): Promise<{ error?: string }> {
    cookies.remove(key, { secure: true });

    return {};
}