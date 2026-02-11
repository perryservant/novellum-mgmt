import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => ({ ok: true, message: "Backend is running" }));

const start = async () => {
    try {
        await fastify.listen({ port: 4000, host: "0.0.0.0" });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();
