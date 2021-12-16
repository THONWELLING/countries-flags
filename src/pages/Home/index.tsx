import { useEffect, useState } from 'react'
import * as C from './styles'
import {api} from '../api'
import { Countries } from '../../types/types'
import Loading from '../../components/Loading'
import { SearchContext } from '../../contexts/searchContext'


const Home = () => {
  const [flags, setFlags] = useState<Countries[]>([])


  useEffect(() => {
    loadFlags()
  }, [])

  const loadFlags = async () => {
    setFlags([])
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
          <C.Nav>
            <fieldset>
              <legend>Filtrar Por</legend>
              <select >
                <option>Escolha Uma Opção</option>
                <option>Todos</option>
                <option>Região</option>
                <option>Capital</option>
                <option>Lingua</option>
                <option>País</option>
                <option>Código De Ligação</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>segundo campo </legend>
              <select></select>
            </fieldset>
            Total de Países: {flags.length}
          </C.Nav>
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