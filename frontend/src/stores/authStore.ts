import { create } from "zustand";
import { login, register, getCurrentUser, setAuthToken, clearAuthToken } from "../lib/api";
import type { User, CreateUserInput } from "../../../shared/src/user";

interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isInitialized: boolean;

    login: (email: string, password: string) => Promise<void>;
    register: (userData: CreateUserInput) => Promise<void>;
    logout: () => void;
    initialize: () => Promise<void>;
    setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isInitialized: false,

    initialize: async () => {
        if (get().isInitialized) return;

        const token = localStorage.getItem("auth_token");

        if (token) {
            try {
                const response = await getCurrentUser();

                if (response.success && response.data) {
                    set({
                        user: response.data.user,
                        isAuthenticated: true,
                        isLoading: false,
                        isInitialized: true
                    });
                } else {
                    clearAuthToken();
                    set({
                        user: null,
                        isAuthenticated: false,
                        isLoading: false,
                        isInitialized: true
                    });
                }
            } catch (error) {
                clearAuthToken();
                set({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                    isInitialized: true
                });
                throw error;
            }
        } else {
            set({ isLoading: false, isInitialized: true });
        }
    },

    login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
            const response = await login(email, password);
            if (response.success && response.data) {
                setAuthToken(response.data.token);
                set({
                    user: response.data.user,
                    isAuthenticated: true,
                    isLoading: false
                });
            }
        } catch (error) {
            set({ isLoading: false });
            throw error;
        }
    },

    register: async (userData: CreateUserInput) => {
        set({ isLoading: true });
        try {
            const response = await register(userData);
            if (response.success && response.data) {
                setAuthToken(response.data.token);
                set({
                    user: response.data.user,
                    isAuthenticated: true,
                    isLoading: false
                });
            }
        } catch (error) {
            set({ isLoading: false });
            throw error;
        }
    },

    logout: () => {
        clearAuthToken();
        set({ user: null, isAuthenticated: false });
    },

    setUser: (user: User | null) => {
        set({ user, isAuthenticated: !!user });
    }
}));
