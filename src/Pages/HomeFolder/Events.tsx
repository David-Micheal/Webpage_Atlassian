import React from "react";
import styled from "styled-components";
import pic1 from "./assets/HighVelo.jpg";
import pic2 from "./assets/worklife.png";

const Events: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Eve>EVENTS</Eve>
          <Hear>
            Hear from today’s
            <br />
            fearless builders and
            <br />
            innovators
          </Hear>
          <Ler>Learn more</Ler>
        </One>
        <Two src={pic1} />
        <Tre src={pic2} />
      </Wrapper>
    </Container>
  );
};

export default Events;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 500px;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
`;
const One = styled.div`
  width: 520px;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
`;
const Eve = styled.div`
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: #008da6;
`;
const Hear = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-top: 17px;
  color: #253858;
`;
const Ler = styled.div`
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  color: #0065ff;
  margin-top: 20px;
`;

const Two = styled.img`
  width: 520px;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
const Tre = styled.img`
  width: 520px;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
