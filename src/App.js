import React, { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/home'
import ServiceErea from './views/cs'
import CheckoutPage from './views/checkoutpage'
import Loading from './components/Loading'

function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const router = createBrowserRouter([
    { path:'/', element:<Home/>},
    { path:'/terms', element:<ServiceErea/>},
    { path:'/checkout', element:<CheckoutPage/>},
    { path:'/pay/checkout', element:<CheckoutPage/>},
  ])

  if (showLoading) {
    return (
      <Loading 
        isLoading={isLoading} 
        onLoadingComplete={handleLoadingComplete} 
      />
    );
  }

  return <RouterProvider router={router}/>
}

export default App