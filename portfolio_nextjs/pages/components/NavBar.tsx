import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  & div {
    padding: 10px;
    display: flex;
    gap: 20px;
  }
`;

const Href = styled.a<{ ftColor: string }>`
  color: ${(props) => props.ftColor};
  font-size: 25px;
  cursor: pointer;
`;

function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <div>
        <Link href="/">
          <Href ftColor={router.pathname === "/" ? "tomato" : ""}>Home</Href>
        </Link>
        <Link href="/career">
          <Href ftColor={router.pathname === "/career" ? "tomato" : ""}>
            Career
          </Href>
        </Link>
        <Link href="/project">
          <Href ftColor={router.pathname === "/project" ? "tomato" : ""}>
            Project
          </Href>
        </Link>
        <Link href="/education">
          <Href ftColor={router.pathname === "/education" ? "tomato" : ""}>
            Education
          </Href>
        </Link>
      </div>
    </Nav>
  );
}

export default NavBar;
