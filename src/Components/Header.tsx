import React, { useState } from "react";
import styled from "styled-components";
import imag from "./images/Logo.webp";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleBar = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Wrapper>
        <One>
          <Logo src={imag} />
          <Pro onClick={toggleBar}>
            Product
            <Icon>
              <BiChevronDown />{" "}
            </Icon>
          </Pro>
          <For>
            For Teams
            <Icon>
              <BiChevronDown />{" "}
            </Icon>
          </For>
          <Sup>
            Support
            <Icon>
              <BiChevronDown />{" "}
            </Icon>
          </Sup>
        </One>
        <Two>
          <Try>Try now</Try>
          <Hold>
            <Buy>Buy now</Buy>
            <Ser>
              <FiSearch />
            </Ser>
          </Hold>
          <TheHold>
            <Acc>
              My account
              <Icon>
                <BiChevronDown />{" "}
              </Icon>
            </Acc>
          </TheHold>
        </Two>
      </Wrapper>
      {show ? (
        <Drop>
          <Holder>
            <Hold1></Hold1>
            <Hold2></Hold2>
          </Holder>
        </Drop>
      ) : null}
    </Container>
  );
};

export default Header;
const Hold1 = styled.div`
  width: 68%;
  height: 100%;
  background-color: chocolate;
`;
const Hold2 = styled.div`
  width: 30%;
  height: 100%;
  background-color: darkgreen;
`;
const Holder = styled.div`
  width: 87%;
  height: 90%;
  background-color: brown;
  display: flex;
  justify-content: space-between;
`;
const Drop = styled.div`
  width: 100%;
  height: 90vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: fixed;
  top: 80px;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: aquamarine; */
  display: flex;
  justify-content: space-between;
`;
const One = styled.div`
  width: 45%;
  height: 100%;
  /* background-color: lightcyan; */
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 250px;
  height: 35px;
  /* background-color: black; */
`;
const Icon = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
  font-size: 25px;
  color: #0052cc;
`;
const Pro = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  font-size: 21px;
  font-weight: 600;

  :hover {
    background-color: #f4f5f7;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const For = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  font-size: 21px;
  font-weight: 600;

  :hover {
    background-color: #f4f5f7;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Sup = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  font-size: 21px;
  font-weight: 600;

  :hover {
    background-color: #f4f5f7;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Two = styled.div`
  width: 40%;
  height: 100%;
  /* background-color: lightgray; */
  display: flex;
  align-items: center;
`;
const Try = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: #0052cc;
  color: white;
  align-items: center;
  margin-left: 25px;
  font-size: 21px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;
const Hold = styled.div`
  width: 200px;
  height: 45px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
  border-right: 1px solid gray;
`;
const Buy = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  color: #0052cc;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: 400;
  cursor: pointer;
`;
const Ser = styled.div`
  font-size: 30px;
  color: gray;
  height: 85%;
  width: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #f4f5f7;
  }
`;
const Acc = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  font-size: 21px;
  font-weight: 600;
  color: #0052cc;

  :hover {
    background-color: #f4f5f7;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const TheHold = styled.div``;
