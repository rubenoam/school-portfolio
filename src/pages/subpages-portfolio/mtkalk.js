import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Screen from "../content/content-mt.png";

const Head = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  font-weight: normal;
  padding-bottom: 2%;
  color: blue;
`;

const Left = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  position: relative;
  margin: 0;
  padding: 0;
  grid-column: 1;
  text-align: justify;
  text-justify: inter-word;
`;

const Right = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin: 0;
  padding: 0;
  grid-column: 2;
  text-align: justify;
  text-justify: inter-word;
  @media only screen and (max-width: 600px) {
    grid-column: 1;
  }
`;

const Img = styled.img`
  max-width: 50vw;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const High = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: blue;
  display: inline;
`;

function Mtkalk() {
  return (
    <>
      <Head>mtkalkhoven.com</Head>
      <div className="container-music">
        <Left>
          this project was simple was but interesting. also during my internship
          at WPinaday and took more time then u would expect. the client was not
          sure about certain things that i came up with and eventually a
          co-worker finished it because of my internship coming to an end.
          <Link to="/portfolio">
            <High> portfolio</High>
          </Link>
        </Left>
        <Right>
          <a
            href="https://mtkalkhoven.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={Screen} />
          </a>
        </Right>
      </div>
    </>
  );
}

export default <Mtkalk />;
