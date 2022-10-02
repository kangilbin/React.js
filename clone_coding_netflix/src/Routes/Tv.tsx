import { useQuery } from "react-query";
import styled from "styled-components";
import { Categories, makeImagePath } from "./utils";
import { useRecoilValue } from "recoil";
import { isTvAtom } from "../atoms";
import TvSlider from "../Components/tv/TvSlider";
import TvDetail from "../Components/tv/TvDetail";
import { geTopTv, getTodayTv, getTv, IGetTvResult } from "../Apis/tvApi";

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

function Tv() {
  const { data: popularData, isLoading: popLoading } = useQuery<IGetTvResult>(
    ["tv", "popular Tv"],
    getTv
  );
  const { data: topData, isLoading: topLoading } = useQuery<IGetTvResult>(
    ["tv", "Top Tv"],
    geTopTv
  );
  const { data: toDayData, isLoading: toDayLoading } = useQuery<IGetTvResult>(
    ["tv", "Today Tv"],
    getTodayTv
  );
  const isTv = useRecoilValue(isTvAtom);
  return (
    <Wrapper>
      {popLoading && topLoading && toDayLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(popularData?.results[0].backdrop_path || "")}
          >
            <Title>{popularData?.results[0].original_name}</Title>
            <Overview>{popularData?.results[0].overview}</Overview>
          </Banner>
          <Slides>
            <TvSlider data={toDayData} title={Categories["TV Airing Today"]} />
            <TvSlider data={topData} title={Categories["TV Top Rated"]} />
            <TvSlider data={popularData} title={Categories["TV Popular"]} />
          </Slides>
          <TvDetail data={isTv} />
        </>
      )}
    </Wrapper>
  );
}
export default Tv;
