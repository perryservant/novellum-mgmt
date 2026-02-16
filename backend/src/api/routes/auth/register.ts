import { FastifyInstance } from "fastify";
import { PasswordUtils } from "../../../core/utils/password";
import { UserRepository } from "../../../storage/repositories/UserRepository";
import { validateRequest } from "../middleware/validation";
import { registerSchema, RegisterRequest } from "../schemas/auth-schemas";

export const registerRoute = async (fastify: FastifyInstance) => {
    fastify.post(
        "/register",
        {
            preHandler: [validateRequest(registerSchema)]
        },
        async (request, reply) => {
            const userRepository = new UserRepository();
            const body = request.body as RegisterRequest;

            const existingUser = await userRepository.findByEmail(body.email);
            if (existingUser) {
                return reply.status(400).send({
                    success: false,
                    error: "Email already registered"
                });
            }

            const passwordHash = await PasswordUtils.hash(body.password);

            const user = await userRepository.create({
                email: body.email,
                password_hash: passwordHash,
                first_name: body.first_name,
                last_name: body.last_name,
                user_role: body.user_role,
                avatar_url: body.avatar_url,
                assignee_ids: body.assignee_ids,
                appointee_ids: body.appointee_ids
            });

            const token = fastify.jwt.sign({
                id: user.id,
                email: user.email
            });

            return reply.status(201).send({
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
