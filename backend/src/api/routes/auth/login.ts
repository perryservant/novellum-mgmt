import { FastifyInstance } from "fastify";
import { PasswordUtils } from "../../../core/utils/password";
import { UserRepository } from "../../../storage/repositories/UserRepository";
import { validateRequest } from "../middleware/validation";
import { loginSchema, LoginRequest } from "../schemas/auth-schemas";

export const loginRoute = async (fastify: FastifyInstance) => {
    fastify.post(
        "/login",
        {
            preHandler: [validateRequest(loginSchema)]
        },
        async (request, reply) => {
            const userRepository = new UserRepository();
            const body = request.body as LoginRequest;

            const user = await userRepository.findByEmail(body.email);
            if (!user) {
                return reply.status(401).send({
                    success: false,
                    error: "Invalid credentials"
                });
            }

            if (!user.password_hash) {
                return reply.status(401).send({
                    success: false,
                    error: "This account uses OAuth. Please use OAuth login."
                });
            }

            const isValidPassword = await PasswordUtils.verify(body.password, user.password_hash);
            if (!isValidPassword) {
                return reply.status(401).send({
                    success: false,
                    error: "Invalid credentials"
                });
            }

            const token = fastify.jwt.sign({
                id: user.id,
                email: user.email
            });

            return reply.send({
                success: true,
                data: {
                    user: {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        user_role: user.user_role,
                        avatar_url: user.avatar_url
                    },
                    token
                }
            });
        }
    );
};
