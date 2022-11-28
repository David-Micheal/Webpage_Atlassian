import React, { useState } from "react";
import styled from "styled-components";
import vids from "./video/Man-Chatting.mp4";
import pics from "./assets/videoplay.png";
import imag1 from "./assets/kiva.png";
import imag2 from "./assets/tweet.png";
import imag3 from "./assets/redfin.png";
import imag4 from "./assets/nasa.png";
import imag5 from "./assets/audi.png";
import imag6 from "./assets/castlight.png";

const Watc: React.FC = () => {
  const [vid, setVid] = useState<boolean>(false);

  const PopUp = () => {
    setVid(!vid);
  };
  const ClosePop = () => {
    setVid(!vid);
  };

  return (
    <Container>
      <h2>Join the teams that achieve the impossible every day</h2>
      <Play>
        <img src={pics} alt="" />
        <p onClick={PopUp}>Watch a customer story</p>
      </Play>
      <TheLogos>
        <Logo src={imag1} />
        <Logo2 src={imag2} />
        <Logo3 src={imag3} />
        <Logo4 src={imag4} />
        <Logo5 src={imag5} />
        <Logo6 src={imag6} />
      </TheLogos>
      {vid ? (
        <VideoPop>
          <VideoHold>
            <video src={vids} autoPlay controls loop></video>
          </VideoHold>
          <Close>
            {" "}
            <p onClick={ClosePop}>close</p>
          </Close>
        </VideoPop>
      ) : null}
    </Container>
  );
};

export default Watc;
const Logo = styled.img`
  height: 70%;
  width: 190px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logo2 = styled.img`
  height: 90%;
  width: 120px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logo3 = styled.img`
  height: 60%;
  width: 250px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logo4 = styled.img`
  height: 130px;
  width: 130px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logo5 = styled.img`
  height: 60%;
  width: 200px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logo6 = styled.img`
  height: 90%;
  width: 320px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const TheLogos = styled.div`
  width: 90%;
  height: 130px;
  /* background-color: brown; */
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const VideoPop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000a6;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`;
const Close = styled.div`
  height: 70vh;
  width: 5%;
  font-size: 25px;
  margin-bottom: 190px;
  color: #fff;
  cursor: pointer;
`;

const VideoHold = styled.div`
  /* height: 70vh;
  width: 70%; */
  /* background-color: yellow; */

  video {
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(
    180deg,
    rgba(251, 251, 251, 0) 0.05%,
    #065de930 99.95%
  );
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 500;
    color: #253858;
  }
`;
const Play = styled.div`
  display: flex;

  p {
    margin: 0;
    color: #0065ff;
    font-size: 18px;

    :hover {
      cursor: pointer;
      color: #0141a0;
    }
  }
  img {
    height: 25px;
    width: 25px;
    margin-right: 10px;
  }
`;
