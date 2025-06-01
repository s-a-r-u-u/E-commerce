import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Login from './login/loginPage'
import Register from './register/registerPage'
import Webpage from './webPage/webpage'
// import Items  from './itemsCheck/item'
const router = createBrowserRouter([{
  path:"/Login",
  Component:Login
},{
  path:"/Register",
  Component:Register
},{
  path:"/E-comm",
  Component:Webpage
},
// {
//   path:"/itemcheck",
//   Component:Items
// }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
