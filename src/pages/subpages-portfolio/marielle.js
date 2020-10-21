import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Screen from "../content/content-mar.png";

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

function Mar() {
  return (
    <>
      <Head>mariellekuin.com</Head>
      <div className="container-music">
        <Left>
          i've build this website based on her design. i used wordpress in
          combination with elementor. because of her tight budget and her being
          a friend, i used the free version of elementor. to make the whole site
          work, i used a lot of workarounds and manual coding. next time i work
          on something similar, i will probably php code it from the ground up,
          as i encountered many bugs the way i did this project.
          <Link to="/portfolio">
            <High> portfolio</High>
          </Link>
        </Left>
        <Right>
          <a
            href="https://mariellekuin.com/"
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

export default <Mar />;
