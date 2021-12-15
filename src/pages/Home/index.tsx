import { useEffect, useState } from 'react'
import * as C from './styles'
import {api} from '../api'
import { Countries } from '../../types/types'
import Loading from '../../components/Loading'


const Home = () => {
  const [flags, setFlags] = useState<Countries[]>([])


  useEffect(() => {
    loadFlags()
  }, [])

  const loadFlags = async () => {
    let json = await api.getAll()

    setFlags(json)
  }

  return(
    <C.Container>

      {flags.length <= 0 &&
        < Loading />
      }
      {flags.length !== 0 &&
        <>
          <h1>aqui vai ser a página inicial com os conteúdos primários</h1>
          <input type="search" />
          Total de Países: {flags.length}
          <C.List>
            {flags.map((item, index) => {
              return(
                <C.FlagItem key={index}>
                  <img src={item.flags.png} alt={item.name} />
                </C.FlagItem>        
              )
            })}
          </C.List>
        </>
      }
    </C.Container>
  )
}

export default Home