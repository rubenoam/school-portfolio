import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Screen from "../content/content-tott.png";

const Head = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  font-weight: normal;
  padding-bottom: 2%;
  color: blue;
`;

const Left = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  position: relative;
  margin: 0;
  padding: 0;
  grid-column: 1;
  text-align: justify;
  text-justify: inter-word;
`;

const Right = styled.div`
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

function Tott() {
  return (
    <>
      <Head>wearetott.com</Head>
      <div className="container-music">
        <Left>
          during my internship at WPinaday i worked on different projects. one
          of the most interesting projects i enjoyed the most was wearetott. the
          site was build reletivly quick hence the content was already handed
          in. the graphic elements were also given by them. co-workers from
          WPinaday eventually finished the project because my internship was
          already over en they needed small changes.
          <Link to="/portfolio">
            <High> portfolio</High>
          </Link>
        </Left>
        <Right>
          <a
            href="https://wearetott.com/"
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

export default <Tott />;
