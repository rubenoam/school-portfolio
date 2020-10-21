import React from "react";
import styled from "styled-components";

const Head = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
  font-weight: normal;
  padding-bottom: 2%;
`;

function AboutMe() {
  return (
    <>
      <Head>who am i</Head>
    </>
  );
}

export default <AboutMe />;
