import { db } from "../database";

export interface CreateUserInput {
    email: string;
    password_hash?: string;
    first_name?: string;
    last_name?: string;
    user_role?: string;
    avatar_url?: string;
    assignee_ids?: string[];
    appointee_ids?: string[];
}

export interface User {
    id: string;
    email: string;
    password_hash?: string;
    first_name?: string;
    last_name?: string;
    user_role?: string;
    avatar_url?: string;
    assignee_ids?: string[];
    appointee_ids?: string[];
    created_at: Date;
    updated_at: Date;
}

export class UserRepository {
    async create(input: CreateUserInput): Promise<User> {
        const query = `
            INSERT INTO novellum_mgmt.users (
                email, password_hash, first_name, last_name, 
                user_role, avatar_url, assignee_ids, appointee_ids
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
        `;

        const values = [
            input.email,
            input.password_hash,
            input.first_name,
            input.last_name,
            input.user_role,
            input.avatar_url,
            input.assignee_ids,
            input.appointee_ids
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    }

    async findByEmail(email: string): Promise<User | null> {
        const query = `SELECT * FROM novellum_mgmt.users WHERE email = $1`;
        const result = await db.query(query, [email]);
        return result.rows.length > 0 ? result.rows[0] : null;
    }

    async findById(id: string): Promise<User | null> {
        const query = `SELECT * FROM novellum_mgmt.users WHERE id = $1`;
        const result = await db.query(query, [id]);
        return result.rows.length > 0 ? result.rows[0] : null;
    }
}
