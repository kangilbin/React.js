import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IGetMoviesResult } from "../../Apis/movieApi";
import { makeImagePath } from "../../Routes/utils";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 400px;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
  position: relative;
  top: -80px;
`;
interface IProps {
  data?: IGetMoviesResult;
}

function MovieDetail({ data }: IProps) {
  const navigate = useNavigate();
  const onOverlayClick = () => {
    navigate(-1);
  };
  const bigMovieMatch = useMatch("/movies/:movieId");
  // 사용자 위치 감지
  const { scrollY } = useScroll();
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === bigMovieMatch.params.movieId
    );
  return (
    <AnimatePresence>
      {bigMovieMatch && (
        <>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigMovie
            style={{ top: scrollY.get() + 100 }}
            layoutId={bigMovieMatch.params.movieId}
          >
            {clickedMovie && (
              <>
                <BigCover
                  style={{
                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                      clickedMovie.backdrop_path,
                      "w500"
                    )})`,
                  }}
                ></BigCover>
                <BigTitle>{clickedMovie.title}</BigTitle>
                <BigOverview>{clickedMovie.overview}</BigOverview>
              </>
            )}
          </BigMovie>
        </>
      )}
    </AnimatePresence>
  );
}
export default MovieDetail;
