import styled from "styled-components";


export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    margin-top: -35px;
  }
`