export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    user_role: string;
    avatar_url?: string;
    assignee_ids: string[];
    appointee_ids: string[];
    created_at: string;
    updated_at: string;
}

export interface CreateUserInput {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    user_role: string;
    avatar_url?: string;
    assignee_ids?: string[];
    appointee_ids?: string[];
}

export interface LoginInput {
    email: string;
    password: string;
}
