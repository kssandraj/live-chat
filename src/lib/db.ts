import { Redis } from "@upstash/redis";

export const db = Redis.fromEnv();
// url: process.env.UPSTASH_REDIS_REST_URL,
// token: process.env.UPSTASH_REDIS_REST_TOKEN,
