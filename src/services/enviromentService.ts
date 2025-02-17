import {configDotenv} from "dotenv";

configDotenv();

export const getDbUri = (): string => {
    const uri = process.env.DB_URL;
    if (!uri) throw new Error("DB_URL is not defined in the .env file");
    return uri
}

export const getApiPort = (): number => {
    const port = process.env.PORT;
    if (!port) throw new Error("PORT is not defined in the .env file");
    return parseInt(port);
}

export const getSecretKey = (): string => {
    const key = process.env.SECRET_KEY;
    if (!key) throw new Error("SECRET_KEY is not defined in the .env file");
    return key;
}