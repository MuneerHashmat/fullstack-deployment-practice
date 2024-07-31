import express from "express";
import { getTrendingMovie } from "./movie.controller.js";
const router = express.Router();
router.get("/trending", getTrendingMovie);

export default router;
