import Fastify from "fastify";
import "@fastify/jwt";
import { authRoutes } from "./routes/auth";

export const buildServer = async () => {
    const fastify = Fastify({
        logger: true
    });

    fastify.register(import("@fastify/jwt"), {
        secret: process.env.JWT_SECRET || "SuperDupPerSecRet"
    });

    fastify.get("/", async () => ({
        ok: true,
        message: "Backend is running"
    }));

    await fastify.register(authRoutes, { prefix: "/auth" });

    return fastify;
};

export const startServer = async () => {
    const fastify = await buildServer();

    try {
        await fastify.listen({
            port: 4000,
            host: "0.0.0.0"
        });
        console.log("server is running on port 4000");
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};
