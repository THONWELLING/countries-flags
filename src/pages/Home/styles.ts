import styled from "styled-components";



export const Container = styled.div`
  max-width: 100vw;
  height: auto;
  margin: 0;
  display: block;
`
export const Nav = styled.aside`
  max-width: 100vw;
  margin-left: 0;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  fieldset {
    border: none;
  }

  legend {
    font-size: 14px;
    color: #6D2080;
  }
  select {
    width: 328px;
    font-size: 16px;
    font-weight: bld;
    color: #8D8D8D;
    padding: 5px;

    option {
      height: 48px;
      font-weight: bold;
      line-height: 30px;
      display: flex;
      align-items: center;
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-left: 30px;
`

export const FlagItem = styled.div`
  width: 350px;
  height: 225px;

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