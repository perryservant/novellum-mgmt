import { FastifyRequest } from "fastify";
import "@fastify/jwt";

declare module "@fastify/jwt" {
    interface FastifyJWT {
        user: {
            id: string;
            email: string;
        };
    }
}

export const authMiddleware = async (request: FastifyRequest) => {
    try {
        const authHeader = request.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            await request.jwtVerify();
        } else {
            const query = request.query as Record<string, string | string[] | undefined>;
            const token =
                typeof query.token === "string"
                    ? query.token
                    : Array.isArray(query.token)
                      ? query.token[0]
                      : undefined;

            if (token) {
                const decoded = request.server.jwt.verify(token) as { id: string; email: string };
                request.user = decoded;
            } else {
                throw new Error("No authentication token provided");
            }
        }

        if (!request.user) {
            throw new Error("Invalid token");
        }
    } catch (error) {
        console.error("Auth error:", error);
        throw new Error("Authentication required");
    }
};
