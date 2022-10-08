import { useLocation } from "react-router-dom";
import { getSearch } from "../Apis/searchApi";
import styled from "styled-components";
import { IGetSearchResult } from "./../Apis/searchApi";
import { useQuery } from "react-query";
import { makeImagePath } from "./utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: black;
  height: 200vh;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  display: flex;
  background-color: white;
  height: 50vh;
  width: 30vw;
  border-radius: 20px;
  background-image: url(${(props) => props.bgphoto});
  cursor: pointer;
  position: relative;
  top: 100px;
  left: 20px;
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyowrd");

  // keyword가 존재할 경우
  const { data, isLoading, refetch } = useQuery<IGetSearchResult>(
    ["search", "searchShow"],
    () => getSearch(keyword),
    {
      enabled: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [keyword]);

  console.log(data, isLoading);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {data?.results.map((show) => (
            <Box
              key={show.id}
              bgphoto={makeImagePath(
                show.backdrop_path ?? show.poster_path,
                "w400"
              )}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
}
export default Search;
