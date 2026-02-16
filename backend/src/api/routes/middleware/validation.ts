import { z } from "zod";
import { FastifyRequest } from "fastify";

export const validateRequest = (schema: z.ZodSchema) => {
    return async (request: FastifyRequest) => {
        try {
            request.body = schema.parse(request.body);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.issues.map((err) => ({
                    field: err.path.join("."),
                    message: err.message
                }));

                throw new Error(`Validation failed: ${JSON.stringify(errorMessages)}`);
            }
            throw error;
        }
    };
};
