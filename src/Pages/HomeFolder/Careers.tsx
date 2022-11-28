import React from "react";
import styled from "styled-components";
import imag1 from "./assets/careerleft.png";
import imag2 from "./assets/careerright.png";

const Careers: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One src={imag1} />
        <Two>
          <Car>CAREERS</Car>
          <We>We can’t do it alone</We>
          <Have>
            We have an ambitious road ahead, and we’re looking for people to
            join
            <br />
            our global team to help shape the future of Atlassian.
          </Have>
          <Join>Join the team</Join>
        </Two>
        <Tre src={imag2} />
      </Wrapper>
    </Container>
  );
};

export default Careers;

const Car = styled.div`
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: #008da6;
`;
const We = styled.div`
  font-size: 55px;
  font-weight: 600;
  margin-top: 17px;
  color: #253858;
`;
const Have = styled.div`
  font-size: 25px;
  color: #253858;
  margin-top: 25px;
  text-align: center;
`;
const Join = styled.button`
  width: 190px;
  height: 50px;
  background-color: #0052cc;
  font-size: 21px;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 30px;

  :hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  /* background-color: brown; */
  display: flex;
  margin-top: 240px;
  justify-content: space-between;
`;
const One = styled.img`
  width: 600px;
  height: 100%;
  /* background-color: black; */
`;
const Two = styled.div`
  width: 790px;
  height: 340px;
  /* background-color: lightblue; */
  position: absolute;
  left: 505px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tre = styled.img`
  width: 600px;
  height: 100%;
  /* background-color: black; */
`;
