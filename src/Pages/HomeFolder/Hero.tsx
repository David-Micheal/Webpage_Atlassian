import React from "react";
import styled from "styled-components";
import pic from "../HomeFolder/assets/bg.png";
import pic2 from "../HomeFolder/assets/bg2.jpg";

const Hero = () => {
  return (
    <Container>
      <Holder>
        <First>
          <Text>
            It’s possible <br /> <span>with teamwork</span>
          </Text>
        </First>
      </Holder>
      <Second>
        <BgImage src={pic2} />
      </Second>
    </Container>
  );
};

export default Hero;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Text = styled.div`
  font-size: 70px;
  font-weight: bold;
  line-height: 1.05;
  color: #253858;
  span {
    margin-left: 50px;
  }
`;
const First = styled.div`
  margin-left: 20px;
`;
const Second = styled.div`
  height: 100%;
  width: 50%;
`;
const Holder = styled.div`
  width: 46%;
  height: 100%;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 560px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;
