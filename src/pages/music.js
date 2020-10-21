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

function Music() {
  return (
    <>
      <Head>music that i make</Head>
      <div className="container-music">
        <Left>
          i play drums since i was 12 years old. soon after that i introduced
          myself into electronic music and also fell in love with the electric
          guitar. i love things experimental. since 2020 i also run a studio,
          together with 2 other guys.
        </Left>
        <Right>
          <Hover
            href="https://open.spotify.com/album/1oAYC2onBHkJbXVomKYzZD?si=460Jw5ZcTJqw_U2GyQQlDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <High>paula </High>
            my main music project. electronic inspired (folk) music with mostly
            electric guitar and catchy melodies. i also produce music for other
            people under this alias.
          </Hover>
          <Hover
            href="https://open.spotify.com/album/6EQAu0Aaw7ZnJNJ8FIgrJS?si=ulbmgoMtTdG008-7elkA9Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <High> klaplong </High>
            garagepunk band. here i play guitar and write most parts of the
            instrumentals. we are selected for both the NMTH and 3voor12
            selection of popronde 2020 (which, corona). we’ve built a cult
            following with our jewish and middle eastern inspired themes
            combined with hiphop aesthetics and love for the city of beverwijk.
          </Hover>
          <Hover>
            <High> dpdfh </High>
            avant garde 3 piece performance art group together with an artist
            and another musician. we provide live shows with heavy ambient
            textures, haunting drumsounds and the use of both analog and digital
            sources and effects in combination with live expressive painting.
          </Hover>
        </Right>
      </div>
    </>
  );
}

export default <Music />;
