import Seo from "./components/Seo";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  width: 100%;
  height: 100%;
`;
const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
const Box = styled(motion.div)`
  width: 20vw;
  height: 40vh;
  background-color: black;
  border-radius: 50px;
`;

interface IBack {
  isBack: boolean;
}

const variantBox = {
  entry: ({ isBack }: IBack) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: ({ isBack }: IBack) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};
const offset = 4;

const Home = () => {
  const [isBack, setIsBack] = useState(false);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 임의 데이터

  const toggleLeaving = () => setLeaving((prev) => !prev);
  const nextPlease = () => {
    if (leaving) return;
    toggleLeaving();
    setIsBack(false);
    const totalMovies = data.length;
    const maxIndex = Math.floor(totalMovies / offset) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const prevPlease = () => {
    if (leaving) return;
    toggleLeaving();
    setIsBack(true);
    const totalMovies = data.length;
    const maxIndex = Math.floor(totalMovies / offset) - 1;
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  return (
    <>
      <Seo title="Home" />
      <Container>
        <Grid>자기소개</Grid>
        <Grid>
          <BigBox>
            <AnimatePresence
              initial={false}
              custom={{ isBack }}
              onExitComplete={toggleLeaving}
            >
              {data
                .slice(offset * index, offset * index + offset)
                .map((pjt, idx) => (
                  <Box
                    custom={{ isBack }}
                    layoutId="card"
                    variants={variantBox}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={idx}
                  >
                    {pjt}
                  </Box>
                ))}
            </AnimatePresence>
          </BigBox>
        </Grid>
        <button onClick={prevPlease}>prev</button>
        <button onClick={nextPlease}>next</button>
      </Container>
    </>
  );
};

export default Home;
