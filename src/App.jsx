import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/NavigationBar.jsx";
import { Controller } from "./components/Controller.jsx";
import { Footer } from "./components/Footer.jsx";
import { AlgorithmDisplay } from "./components/AlgorithmDisplay.jsx";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export default function App() {
  return (
    <Container>
      <NavBar />
      <Controller />
      <AlgorithmDisplay />
      <Footer />
    </Container>
  );
}