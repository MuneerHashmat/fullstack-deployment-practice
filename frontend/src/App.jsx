import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [trendingContent, setTrendingContent] = useState(null);

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`/api/v1/movie/trending`);
      console.log(res);
      setTrendingContent(res.data.content);
    };

    getTrendingContent();
  }, []);

  return (
    <>
      {trendingContent ? (
        <h1>{trendingContent.overview}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
