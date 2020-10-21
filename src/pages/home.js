import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  font-weight: normal;
  padding-bottom: 8%;
`;

const Main = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
`;

const WebBox = styled.a`
  font-size: 40px;
  padding: 0.2rem 1rem;
  margin: 0;
  display: inline;
  border: 1px solid black;
  :hover {
    color: blue;
    border: solid 1px blue;
  }
`;

const Music = styled.p`
  font-size: 40px;
  display: inline;
  padding: 0;
  margin 0;
  font-style: italic;
  :hover {
    color:blue;
  }
`;

const Other = styled.p`
  font-size: 40px;
  display: inline;
  padding: 0;
  margin 0;
  text-decoration: underline;
  :hover {
    color: blue;
  }
`;

const SocialText = styled.p`
  font-size: 40px;
  display: block;
  padding: 0;
  padding-top:4%;
  margin 0;

  a:hover{
    color: blue;
  }
`;

function Webdesigner() {
  return (
    <>
      <Link to="/portfolio">
        <WebBox>webdesigner,</WebBox>
      </Link>
    </>
  );
}

function Musicproducer() {
  return (
    <>
      <Link to="/music">
        <Music>music producer</Music>
      </Link>
    </>
  );
}

function Otherthings() {
  return (
    <>
      <Link to="/other">
        <Other>other things</Other>
      </Link>
    </>
  );
}

function Socials() {
  return (
    <>
      <SocialText>
        <a
          href="https://www.instagram.com/yuangruben/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/rubenoam"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </SocialText>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Head>my name is ruben oosterman</Head>
      <Main>
        i am a <Webdesigner /> <Musicproducer /> and i am involved in{" "}
        <Otherthings />
        <Socials />
      </Main>
    </>
  );
}

export default <HomePage />;
