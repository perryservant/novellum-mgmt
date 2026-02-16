import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

export const db = {
    query: (text: string, params?: unknown[]) => pool.query(text, params),
    getPool: () => pool
};

pool.on("error", (error) => {
    console.error("Unexpected error on idle client", error);
    process.exit(-1);
});

pool.connect()
    .then((client) => {
        console.log("Database connected successfully");
        client.release();
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
