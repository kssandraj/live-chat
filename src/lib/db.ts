import { Redis } from "@upstash/redis";

const redisConfig = {
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL!,
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN!,
};

export const db = new Redis(redisConfig);

/*import { Redis } from "@upstash/redis";

export const db = Redis.fromEnv();
// url: process.env.UPSTASH_REDIS_REST_URL,
// token: process.env.UPSTASH_REDIS_REST_TOKEN,
*/
