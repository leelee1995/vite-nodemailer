import dotenv from "dotenv";

dotenv.config();

const getEnv = (key: string) => {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }

    return value;
};

export const PORT: number = Number(getEnv("PORT"));
export const SMTP_HOST: string = getEnv("SMTP_HOST");
export const SMTP_USER: string = getEnv("SMTP_USER");
export const SMTP_PASS: string = getEnv("SMTP_PASS");
export const SMTP_PORT: number = Number(getEnv("SMTP_PORT"));
