import React from "react"
import { getUser } from "@/lib/auth"
import { useAuthStore } from "@/stores/auth"

type Props = {
    children?: React.ReactNode
}

export function AuthProvider({ children }: Props) {
    const authStore = useAuthStore()

    async function checkSession() {
        try {
            authStore.set({ loading: true })

            const { data, error } = await getUser()

            if (error) {
                throw error
            }

            authStore.set({ user: data })
        } catch (error) {
            console.log({ error });
            authStore.set({ token: undefined, user: undefined })
        } finally {
            authStore.set({ loading: false })
        }
    }

    React.useEffect(() => {
        if (!authStore.user) {
            checkSession()
        }
    }, [authStore.user])

    return children
}