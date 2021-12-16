import * as C from './styles'



const Details = () => {
  return(
    <>
      <C.Container>
        <C.Selected>
          {<h2>selected flag here</h2>}
        </C.Selected>
        <C.Info>
          {<h4>selected name here</h4>}
          {<h4>selected capital here</h4>}
          {<h4>selected region here</h4>}
          {<h4>selected subregion here</h4>}
          {<h4>selected population here</h4>}
          {<h4>selected languages here</h4>}
        </C.Info>
      </C.Container>
      <C.Container>
        <C.Borders>
          <C.FlagItem></C.FlagItem>
          <C.FlagItem></C.FlagItem>
          <C.FlagItem></C.FlagItem>
        </C.Borders>
      </C.Container>

    </>
  )
}


export default Details





