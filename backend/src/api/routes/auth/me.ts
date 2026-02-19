import { FastifyInstance } from "fastify";
import { UserRepository } from "../../../storage/repositories/UserRepository";
import { authMiddleware } from "../middleware/auth";

export const meRoute = async (fastify: FastifyInstance) => {
    fastify.get(
        "/me",
        {
            preHandler: [authMiddleware]
        },
        async (request, reply) => {
            const userRepository = new UserRepository();
            const userId = request.user.id;

            const user = await userRepository.findById(userId);
            if (!user) {
                return reply.status(404).send({
                    success: false,
                    error: "User not found"
                });
            }

            return reply.send({
                success: true,
                data: {
                    user: {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        user_role: user.user_role,
                        avatar_url: user.avatar_url,
                        assignee_ids: user.assignee_ids,
                        appointee_ids: user.appointee_ids,
                        created_at: user.created_at,
                        updated_at: user.updated_at
                    }
                }
            });
        }
    );
};
