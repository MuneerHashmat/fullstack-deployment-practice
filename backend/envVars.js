import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};
