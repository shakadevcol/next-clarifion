import { z } from "zod";
import validator from "validator";

const creditCardSchema = z.object({
    cardNumber: z.string().refine(validator.isCreditCard, {
        message: "Must be a valid credit card number",
    }),
    owner: z.string().refine(validator.isAlpha, {
        message: "Must be a valid name",
    }),
    expirationMonth: z
        .number({ invalid_type_error: "Invalid number" })
        .nonnegative({
            message: "Must be a positive number",
        })
        .gt(0)
        .lte(12),
    expirationYear: z
        .number({ invalid_type_error: "Invalid number" })
        .nonnegative({
            message: "Must be a positive number",
        })
        .gte(new Date().getFullYear())
        .lte(new Date().getFullYear() + 5),
    /* cvc: z
        .number({ invalid_type_error: "Invalid number" })
        .nonnegative({
            message: "Must be a positive number",
        })
        //.gt(1)
        .lt(999), */
    cvc: z.string().refine(
        (val) => {
            return val.length > 2 && val.length < 4;
        },
        { message: "Invalid cvc" }
    ),
});

export default creditCardSchema;
