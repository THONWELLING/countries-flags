import styled from "styled-components";


export const Container = styled.div`
  max-width: 100vw;
  height: auto;
  margin: 0;
  display: flex;
  padding-left: 130px;
`
export const Selected = styled.aside`
  width: 450px;
  height: 260px;
  background-color: #999;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;  
`
export const Info =styled.div`
  width: 260px;
  height: 260px;
  font-size: 15px;
  line-height: 18px;
  color: #454545;
  font-style: italic;
  margin-left: 25px;
  padding-left: 20px;
  background-color: #DDD;
`

export const Borders = styled.div`
  display: flex;

`

export const FlagItem = styled.div`
  width: 316px;
  height: 181px;
  background-color: #252525;
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(0.9);

    &:hover {
      transform: scale(1);
      transition: all ease 0.3s;
    }
  }
`