import React from "react";
import styled from "styled-components";

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

function OtherThings() {
  return (
    <>
      <Head>other things i am involved into</Head>
      <div className="container-music">
        <Left>
          <Hover>
            <High>treifffa </High>since 2020 i run a studio in beverwijk
            together with 2 members of my band klaplong. we record and work on
            music here. our main focus for the coming time is preparing it for
            professional recording, dj practice possibilities and a branded
            occasional live stream.
          </Hover>
        </Left>
        <Right>
          <Hover
            href="https://o6a-gallery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <High>o6a gallery </High>an online art gallery i am building with an
            artist. in most cases, art gallery’s ask 50% of the final sold price
            of an artwork. since we are based online we can ask much less in a
            world where everybody is already constantly connected to the
            internet. so much, that artworks worth millions are sold over
            instagram direct messages. we additionally organize local temporary
            art gallery’s around amsterdam and beverwijk, to push the works to
            the public and have fun.
          </Hover>
        </Right>
      </div>
    </>
  );
}

export default <OtherThings />;
