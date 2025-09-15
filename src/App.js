import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/home'
import ServiceErea from './views/cs'
import CheckoutPage from './views/checkoutpage'

//comment

function App(){
  const router = createBrowserRouter([
  { path:'/', element:<Home/>},
  { path:'/terms', element:<ServiceErea/>},
  { path:'/checkout', element:<CheckoutPage/>}, // Add this route
  { path:'/pay/checkout', element:<CheckoutPage/>}, // Alternative route
])


  return(
  
  
  <RouterProvider router={router}/>


)
}

export default App