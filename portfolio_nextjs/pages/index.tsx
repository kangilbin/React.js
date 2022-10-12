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

const Home = () => {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <>
      <Seo title="Home" />
      <Container>
        <Grid>자기소개</Grid>
        <Grid>
          <BigBox>
            <AnimatePresence custom={{ isBack }}>
              <Box
                custom={{ isBack }}
                variants={variantBox}
                initial="entry"
                animate="center"
                exit="exit"
                key={visible}
              />
            </AnimatePresence>
          </BigBox>
          <button onClick={nextPlease}>next</button>
          <button onClick={prevPlease}>prev</button>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
