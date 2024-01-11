// api/utils/Redis.js

import { Redis } from "ioredis";
import { toast } from "sonner"

const REDIS_URL = process.env.REDIS_URL;
let redis;

if (REDIS_URL) {
    redis = new Redis(REDIS_URL);
    redis.on("error", (err) => {
        console.error("Redis error: ", err);
    });
} else {
    toast.warn("REDIS_URL is not defined. Redis connection will not be established.");
}

export default redis;
