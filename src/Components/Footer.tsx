import React from "react";
import styled from "styled-components";
import logo from "./images/Logo.webp";
import { TbWorld } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import imag1 from "./images/linked-in.png";
import imag2 from "./images/twitter.png";
import imag3 from "./images/facebook.png";
import imag4 from "./images/youtube.png";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Photo>
            <Logo src={logo} />
          </Photo>
          <Box>
            <Title>PRODUCTS</Title>
            <Body>Jira Software</Body>
            <Body>Jira Align</Body>
            <Body>Jira Service Management</Body>
            <Body>Confluence</Body>
            <Body>Trello</Body>
            <Body>Bitbucket</Body>
            <Last>View all products</Last>
          </Box>
          <Box>
            <Title>RESOURCES</Title>
            <Body>Technical Support</Body>
            <Body>Purchasing & licensing</Body>
            <Body>Atlassian Community</Body>
            <Body>Knowledge base</Body>
            <Body>Marketplace</Body>
            <Body>My Account</Body>
            <Last>Create support ticket</Last>
          </Box>
          <Box>
            <Title>EXPAND & LEARN</Title>
            <Body>Partners</Body>
            <Body>Training & Certification</Body>
            <Body>Documentation</Body>
            <Body>Developer Resources</Body>
            <Body>Enterprise services</Body>
            <Last>View all resources</Last>
          </Box>
          <Box>
            <Title>ABOUT ATLASSIAN</Title>
            <Body>Company</Body>
            <Body>Careers</Body>
            <Body>Events</Body>
            <Body>Blogs</Body>
            <Body>Investor Relations</Body>
            <Body>Trust & Security</Body>
            <Last>Contact us</Last>
          </Box>
        </One>
      </Wrapper>
      <Two>
        <Eng>
          <English>
            <Hold1>
              <TbWorld />
            </Hold1>
            English
            <Hold2>
              <AiFillCaretDown />
            </Hold2>
          </English>
          <Privacy>Privacy policy</Privacy>
          <Term>Terms</Term>
          <Modern>Modern Slavery Act</Modern>
          <Imp>Impressum</Imp>
          <Copy>Copyright © 2022 Atlassian</Copy>
        </Eng>
        <Logos>
          <The1 src={imag3} />
          <The1 src={imag2} />
          <The1 src={imag1} />
          <The1 src={imag4} />
        </Logos>
      </Two>
    </Container>
  );
};

export default Footer;
const The1 = styled.img`
  width: 50px;
  height: 50px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Logos = styled.div`
  height: 100%;
  width: 250px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Hold2 = styled.div`
  font-size: 20px;
  display: flex;
  margin-left: 4px;
  align-items: center;
`;
const Hold1 = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-right: 4px;
`;
const English = styled.div`
  font-size: 20px;
  display: flex;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Privacy = styled.div`
  font-size: 20px;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Term = styled.div`
  font-size: 20px;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Modern = styled.div`
  font-size: 20px;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Imp = styled.div`
  font-size: 20px;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Copy = styled.div`
  font-size: 20px;
  color: #000;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Eng = styled.div`
  height: 100%;
  width: 1100px;
  display: flex;
  /* background-color: blue; */
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  color: #253858;
  margin-bottom: 23px;
`;
const Body = styled.div`
  font-size: 20px;
  color: #000;
  margin-bottom: 13px;
  text-align: left;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Last = styled.div`
  font-size: 20px;
  color: #008da6;
  margin-top: 20px;
  text-align: left;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const One = styled.div`
  width: 90%;
  height: 350px;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f7;
  /* background-color: aqua; */
  margin-top: 120px;
`;
const Two = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f4f5f7;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid lightgray;
`;
const Photo = styled.div`
  height: 100%;
  width: 300px;
  /* background-color: chocolate; */
  display: flex;
`;
const Logo = styled.img`
  width: 85%;
  height: 32px;
  /* background-color: black; */
  :hover {
    cursor: pointer;
  }
`;
const Box = styled.div`
  height: 100%;
  width: 300px;
  /* background-color: red; */
`;
