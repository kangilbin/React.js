import Seo from "./components/Seo";
import styled from "styled-components";

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
const Box = styled.div`
  width: 20vw;
  height: 40vh;
  background-color: black;
  border-radius: 50px;
`;
const Home = () => {
  return (
    <>
      <Seo title="Home" />
      <Container>
        <Grid>자기소개</Grid>
        <Grid>
          <BigBox>
            <Box />
            <Box />
            <Box />
            <Box />
          </BigBox>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
