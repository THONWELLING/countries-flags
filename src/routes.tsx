import { Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import  Details  from './pages/Details'
import NotFound from './pages/NotFound'


export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/Details' element={ <Details /> } />
      <Route path='/NotFound' element={ <NotFound /> } />
    </Routes>
  )
}