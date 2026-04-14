import { getEnv } from "../utils/get-env";

export const Env = {
    NODE_ENV: getEnv("NODE_ENV", "devlopment"),
    PORT: getEnv("PORT", "8000"),
    MONGO_URI:getEnv("MONGO_URI"),
    FRONTEND_ORIGIN:getEnv("FRONTEND_ORIGIN")
}