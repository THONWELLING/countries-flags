import * as C from './styles'
import logo from '../../assets/img/logo.svg'
import { CgCornerDownLeft } from 'react-icons/cg'

const Header = () => {
  return(
    <C.Container>
      <C.Logo><img src={logo} alt='Logo Marca' /></C.Logo>
      <C.Button>
        <CgCornerDownLeft />
        <button>Voltar</button>
      </C.Button>
    </C.Container>
  )
}


export default Header