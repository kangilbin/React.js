import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Categories, makeImagePath } from "../../Routes/utils";
import { useSetRecoilState } from "recoil";
import { isTvAtom } from "../../atoms";
import { IGetTvResult } from "../../Apis/tvApi";

const Slider = styled(motion.div)`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  font-size: 66px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const BoxCtrl = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Prev = styled.h1`
  justify-content: left;
  margin: 10px 10px;
  font-size: 20px;
  cursor: pointer;
`;

const Next = styled.h1`
  justify-content: right;
  margin: 10px 10px;
  font-size: 20px;
  cursor: pointer;
`;

const MovieTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

interface IBack {
  isBack: boolean;
}

const rowVariants = {
  hidden: ({ isBack }: IBack) => ({
    // 사용자 윈도우 화면 넓이
    x: isBack ? window.outerWidth + 5 : -window.outerWidth - 5,
  }),
  visible: { x: 0 },
  exit: ({ isBack }: IBack) => ({
    // Row에 gap을 주기 위해 -5 추가
    x: isBack ? -window.outerWidth - 5 : window.outerWidth + 5,
  }),
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};
interface IProps {
  title: number;
  data?: IGetTvResult;
}
const offset = 6;

function TvSlider({ data, title }: IProps) {
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const [isBack, setIsBack] = useState(false);
  const setMovie = useSetRecoilState(isTvAtom);

  // useHistory Hook을 사용하면 url를 왔다갔다 할 수 있다.
  const navigate = useNavigate();

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setIsBack(true);
      const totalMovies = data?.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setIsBack(false);
      const totalMovies = data?.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  const onBoxClicked = (movieId: number) => {
    setMovie(data);
    navigate(`/tv/${title}/${movieId}`);
  };

  return (
    <>
      <Slider>
        <BoxCtrl>
          <Prev onClick={decreaseIndex}>prev</Prev>
          <MovieTitle>{Categories[title]}</MovieTitle>
          <Next onClick={increaseIndex}>next</Next>
        </BoxCtrl>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
          custom={{ isBack }}
        >
          <Row
            custom={{ isBack }}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key={index}
          >
            {data?.results
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  layoutId={movie.id + "" + title}
                  key={movie.id}
                  whileHover="hover"
                  initial="normal"
                  variants={boxVariants}
                  onClick={() => onBoxClicked(movie.id)}
                  transition={{ type: "tween" }}
                  bgphoto={makeImagePath(movie.backdrop_path, "w500")}
                >
                  <Info variants={infoVariants}>
                    <h4>{movie.original_name}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </>
  );
}
export default TvSlider;
