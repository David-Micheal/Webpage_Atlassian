import React from "react";
import styled from "styled-components";
import imag from "./assets/Community.jpg";

const Essential: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Team>TEAM ESSENTIALS</Team>
          <Explore>
            Explore resources to
            <br />
            unleash the potential
            <br />
            of your team
          </Explore>
        </One>
        <Two>
          <Pht src={imag} />
          <TheSec>
            <At>Atlassian Community</At>
            <Co>
              Connect globally and meet locally to get more out of our products.
            </Co>
            <Se>
              <Ou>Search th forum</Ou>
              <Jr>Join our community</Jr>
            </Se>
          </TheSec>
        </Two>
      </Wrapper>
    </Container>
  );
};

export default Essential;
const At = styled.div`
  font-size: 30px;
  margin-top: 20px;
  color: #253858;
  font-weight: 600;
`;
const Co = styled.div`
  font-size: 25px;
  color: #253858;
  margin-top: 25px;
`;
const Se = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
const Ou = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #0065ff;
`;
const Jr = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #0065ff;
`;

const Pht = styled.img`
  width: 100%;
  height: 60%;
  /* background-color: black; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TheSec = styled.div`
  width: 100%;
  height: 40%;
  background-color: #ffebe5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const Container = styled.div`
  width: 100%;
  height: 620px;
  background-color: white;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 530px;
  /* background-color: brown; */
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;
const One = styled.div`
  height: 100%;
  width: 540px;
  /* background-color: blue; */
`;
const Team = styled.div`
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: #008da6;
`;
const Explore = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-top: 17px;
  color: #253858;
`;

const Two = styled.div`
  width: 62%;
  height: 100%;
  /* background-color: coral; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
