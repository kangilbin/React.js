import {
  getMovies,
  geTopMovie,
  getUpComing,
  IGetMoviesResult,
} from "../Apis/movieApi";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Categories, makeImagePath } from "./utils";
import MovieSlider from "../Components/movie/MovieSlider";
import MovieDetail from "../Components/movie/MovieDetail";
import { useRecoilValue } from "recoil";
import { isMovieAtom } from "../atoms";

const Wrapper = styled.div`
  background-color: black;
  height: 200vh;
`;

const Slides = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  height: 50%;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  // 같은 div에 다른 배경을 갖게 명시 (linear-gradient, url)
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

function Home() {
  const { data: nowData, isLoading: nowLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const { data: topData, isLoading: topLoading } = useQuery<IGetMoviesResult>(
    ["movies", "topPlaying"],
    geTopMovie
  );
  const { data: upComingData, isLoading: upLoading } =
    useQuery<IGetMoviesResult>(["movies", "upComingPlaying"], getUpComing);

  const isMovie = useRecoilValue(isMovieAtom);
  return (
    <Wrapper>
      {nowLoading && topLoading && upLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(nowData?.results[0].backdrop_path || "")}
          >
            <Title>{nowData?.results[0].title}</Title>
            <Overview>{nowData?.results[0].overview}</Overview>
          </Banner>
          <Slides>
            <MovieSlider
              data={nowData}
              title={Categories["Movie Now Playing"]}
            />
            <MovieSlider data={topData} title={Categories["Movie Top Rated"]} />
            <MovieSlider
              data={upComingData}
              title={Categories["Movie Upcoming"]}
            />
          </Slides>
          <MovieDetail data={isMovie} />
        </>
      )}
    </Wrapper>
  );
}
export default Home;
