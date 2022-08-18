import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(porps) => porps.bgColor};
`;

interface CircleProps {
  /* obejct shape를 설명 해준다. */
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
export default Circle;
