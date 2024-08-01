import express from "express";
import movieRoutes from "./movie.route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://fullstack-deployment-practice.vercel.app/", // Replace with your frontend URL in production
  })
);

app.use("/api/v1/movie", movieRoutes);

app.listen(10000, () => {
  console.log("Server is up at running at http://localhost:" + 10000);
});
