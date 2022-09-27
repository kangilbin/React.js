import { getMovies } from "./../api";
import { useQuery } from "react-query";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return <div>home</div>;
}
export default Home;
