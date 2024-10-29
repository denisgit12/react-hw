import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().min(1).max(15)
        .messages({
            "string.min": "userName must be at least 1 characters",
            "string.max": "username must be no longer 15 characters",
        }),
    password: Joi.string().min(1).max(15).messages({
        "string.min": "password must be at least 1 characters",
        "string.max": "password must be no longer 15 characters",
    }),
});