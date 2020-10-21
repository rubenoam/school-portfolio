import React from "react";
import "./styles.css";
import styled from "styled-components";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";

import HomePage from "./pages/home";
import PortFolio from "./pages/portfolio";
import AboutMe from "./pages/aboutme";
import Music from "./pages/music";
import OtherThings from "./pages/other";

import Marielle from "./pages/subpages-portfolio/marielle";
import Tott from "./pages/subpages-portfolio/tott";
import Mtkalk from "./pages/subpages-portfolio/mtkalk";
import O6a from "./pages/subpages-portfolio/o6a";

const Navigatie = styled.nav`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: space-between;
`;

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigatie>
          <NavLink
            className="nav-item"
            activeClassName="activeLink"
            to="/"
            exact
          >
            home
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="activeLink"
            to="/portfolio"
          >
            portfolio
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="activeLink"
            to="/music"
          >
            music
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="activeLink"
            to="/other"
          >
            other
          </NavLink>
          <NavLink className="nav-item" activeClassName="activeLink" to="/info">
            info
          </NavLink>
        </Navigatie>
        <Route path="/" exact>
          {HomePage}
        </Route>
        <Route path="/portfolio" exact>
          {PortFolio}
        </Route>
        <Route path="/music">{Music}</Route>
        <Route path="/other">{OtherThings}</Route>
        <Route path="/info">{AboutMe}</Route>

        <Route path="/portfolio/mariellekuin">{Marielle}</Route>
        <Route path="/portfolio/tott">{Tott}</Route>
        <Route path="/portfolio/mt">{Mtkalk}</Route>
        <Route path="/portfolio/o6a">{O6a}</Route>
      </div>
    </Router>
  );
}
