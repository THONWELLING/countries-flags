import styled from "styled-components";



export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Logo = styled.div`

  img {
    width: 92px;
    height: 100%;
    margin-left: 20px;
  }
`

export const Button = styled.div`
  width: 134px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;
  font-size: 18px;
  color: #6D2080;
  border: 1px solid #6D2080;

  &:hover{
    border: 2px solid #6D2080;
    transition: all ease 0.2s;
    text-decoration: underline;
  }
  
  button {
    border: none;
    background-color: transparent;
  }
`