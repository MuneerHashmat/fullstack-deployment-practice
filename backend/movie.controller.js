import { fetchDataFromTMDB } from "./tmdb.service.js";

export const getTrendingMovie = async (req, res) => {
  try {
    const data = await fetchDataFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
