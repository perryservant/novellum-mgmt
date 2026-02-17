import type { User, CreateUserInput, LoginInput } from "../../../shared/src/user";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface AuthResponse {
    success: boolean;
    data?: {
        user: User;
        token: string;
    };
    error?: string;
}

export interface UserReponse {
    success: boolean;
    data?: {
        user: User;
    };
    error?: string;
}

// Enhanced fetch wrapper
const apiFetch = async (url: string, options?: RequestInit): Promise<Response> => {
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers
        }
    });

    return response;
};

// Token Management
export const getAuthToken = (): string | null => {
    return localStorage.getItem("auth_token");
};

export const setAuthToken = (token: string): void => {
    return localStorage.setItem("auth_token", token);
};

export const clearAuthToken = (): void => {
    return localStorage.removeItem("auth_token");
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const response = await apiFetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password } as LoginInput)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const register = async (userDate: CreateUserInput): Promise<AuthResponse> => {
    const response = await apiFetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(userDate)
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const getCurrentUser = async (): Promise<UserReponse> => {
    const token = getAuthToken();

    if (!token) {
        throw new Error("No authentication token found");
    }

    const response = await apiFetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export type { User, CreateUserInput, LoginInput };
