import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  font-weight: normal;
  padding-bottom: 2%;
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

const Hover = styled.a`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin: 0;
  padding: 0;
  display: block;
  margin-bottom: 1rem;
  :hover {
    color: blue;
  }
`;

const HoverBottom = styled.a`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin: 0;
  padding: 0;
  display: block;
  :hover {
    color: blue;
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

function LinkMar() {
  return (
    <>
      <Link to="/portfolio/mariellekuin">
        <Hover>
          <High>mariellkuin.com </High>
          advertising student based in rotterdam. build this website based on
          her design.
        </Hover>
      </Link>
    </>
  );
}
function LinkTott() {
  return (
    <>
      <Link to="/portfolio/tott">
        <Hover>
          <High>wearetott.com </High>
          co designed and build this website during my internship at WPinaday.
        </Hover>
      </Link>
    </>
  );
}
function Linko() {
  return (
    <>
      <Link to="/portfolio/o6a">
        <Hover>
          <High>o6a livestream from broedmachine </High>
          graphic design for social media for a 2 day livestream
        </Hover>
      </Link>
    </>
  );
}

function Linkmt() {
  return (
    <>
      <Link to="/portfolio/mt">
        <HoverBottom>
          <High> mtkalkhoven.com </High>
          website for a cinematographer and director based in the netherlands
        </HoverBottom>
      </Link>
    </>
  );
}

function PortFolio() {
  return (
    <>
      <Head>this is my current portfolio</Head>
      <div className="container-music">
        <Left>
          <LinkMar />
          <LinkTott />
          <Linkmt />
        </Left>
        <Right>
          <Linko />
        </Right>
      </div>
    </>
  );
}

export default <PortFolio />;
