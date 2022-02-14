import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Components/auth'
//import About from './Components/About'
import { Admin } from './Components/DynamicRoutes/Admin'
import { UserDetails } from './Components/DynamicRoutes/UserDetails'
import { Users } from './Components/DynamicRoutes/Users'
import { FeaturedProducts } from './Components/FeaturedProducts'
import Home from './Components/Home'
import { Login } from './Components/Login'
import { NavBar } from './Components/NavBar'
import { NewProducts } from './Components/NewProducts'
import { NoMatch } from './Components/NoMatch'
import { OrderSummary } from './Components/OrderSummary'
import { Products } from './Components/Products'
import { Profile } from './Components/Profile'
import { RequiredAuth } from './Components/RequiredAuth'
const LazyAbout = React.lazy(() => import('./Components/About'))
function App () {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route
            path='about'
            element={
              <React.Suspense fallback='Loading....'>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path='order-summary' element={<OrderSummary />} />

          <Route path='products' element={<Products />}>
            {/* index route  */}
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>

          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>

          <Route
            path='profile'
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
