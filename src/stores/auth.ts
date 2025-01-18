import Cookies from 'js-cookie';
import { create } from 'zustand';
import { User } from '@/types/user';

export interface AuthState {
    token?: string
    user?: User
    loading?: boolean
}

export interface AuthStore extends AuthState {
    set: (state: Partial<AuthState>) => void
    reset: () => void
}

const key = "session.token"

export const useAuthStore = create<AuthStore>((set) => ({
    token: Cookies.get(key),
    loading: false,

    set: (state) => set(prev => {
        if (state.token) {
            Cookies.set(key, state.token, {
                secure: true,
                maxAge: 7 * 3600
            })
        }

        return {
            ...prev,
            ...state
        }
    }),

    reset: () => {
        Cookies.remove(key, { secure: true })
        set({
            token: undefined,
            user: undefined
        })
    }
}))