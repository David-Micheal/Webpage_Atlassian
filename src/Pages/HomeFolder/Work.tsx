import React from "react";
import styled from "styled-components";
import imag1 from "./assets/Blog.jpg";
import imag2 from "./assets/Team.png";
import imag3 from "./assets/Agile.png";

const Work: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Pages>
          <Head src={imag1} />
          <Foot>
            <Wo>Work Life</Wo>
            <Re>
              Real-life advice, inspiration, and stories
              <br />
              from the working world today.
            </Re>
            <Ou>Read our blog</Ou>
          </Foot>
        </Pages>
        <Pages>
          <Head src={imag2} />
          <Foot2>
            <Wo>Atlassian Team Playbook</Wo>
            <Re>
              Solve common team challenges with
              <br />
              these group exercises.
            </Re>
            <Ou>Check team health</Ou>
          </Foot2>
        </Pages>
        <Pages>
          <Head src={imag3} />
          <Foot>
            <Wo>The Agile Coach</Wo>
            <Re>
              Atlassian's no-nonsense guide to agile
              <br />
              development.
            </Re>
            <Ou>Visit our resources</Ou>
          </Foot>
        </Pages>
      </Wrapper>
    </Container>
  );
};

export default Work;

const Wo = styled.div`
  font-size: 30px;
  margin-top: 20px;
  color: #253858;
  font-weight: 600;
`;
const Re = styled.div`
  font-size: 25px;
  color: #253858;
  margin-top: 20px;
  text-align: center;
`;
const Ou = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #0065ff;
  margin-top: 20px;
`;
const Head = styled.img`
  width: 100%;
  height: 60%;
  background-color: black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const Foot = styled.div`
  width: 100%;
  height: 40%;
  background-color: #eae6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const Foot2 = styled.div`
  width: 100%;
  height: 40%;
  background-color: #e6fcff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 570px;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
`;
const Pages = styled.div`
  width: 520px;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
