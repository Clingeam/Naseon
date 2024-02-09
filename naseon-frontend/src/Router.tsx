import { Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { Home } from './pages/Presentation'
import { Redefinir_senha } from './pages/Redefinir_senha'
import { Redefinir_senha2 } from './pages/Redefinir_senha2'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path='/redefinir_senha' element={<Redefinir_senha/>}/>
      <Route path='/redefinir_senha2' element={<Redefinir_senha2/>}/>
    </Routes>
  )
}
