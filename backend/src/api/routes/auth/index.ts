import { FastifyInstance } from "fastify";
import { loginRoute } from "./login";
import { registerRoute } from "./register";
import { meRoute } from "./me";

export const authRoutes = async (fastify: FastifyInstance) => {
    await loginRoute(fastify);
    await registerRoute(fastify);
    await meRoute(fastify);
};
