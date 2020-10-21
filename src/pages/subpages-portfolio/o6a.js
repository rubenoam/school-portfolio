import React from "react";
import styled from "styled-components";

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

function O6a() {
  return (
    <>
      <Head>o6a gallery live from broedmachine</Head>
      <div className="container-music">
        <Left>
          o6a organized a livestream live from the art gallery in “de
          broedmachine”, based in beverwijk. the streams happened on 2 saturdays
          and i designed 3 instagram story posts and 2 4 other instagram posts
          regarding the event.
        </Left>
        <Right></Right>
      </div>
    </>
  );
}

export default <O6a />;
