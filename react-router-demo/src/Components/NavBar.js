import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const NavBar = () => {
  
  const navLinkStyler = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underlined'
    }
  }

  const auth = useAuth()

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyler}> Home </NavLink> <br />
      <NavLink to='/about' style={navLinkStyler}> About </NavLink>  <br />
      <NavLink to='/products' style={navLinkStyler}> Products </NavLink>  <br />
      <NavLink to='/users' style={navLinkStyler}> Users </NavLink>  <br />
      <NavLink to='/profile' style={navLinkStyler}> Profile </NavLink>  <br />
      {
        !auth.user && <NavLink to='/login' style={navLinkStyler}> Log-In </NavLink>  
      }
    </nav>
  )
}
