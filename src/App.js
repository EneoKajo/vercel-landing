import React, { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/home'
import ServiceErea from './views/cs'
import CheckoutPage from './views/checkoutpage'
import Loading from './componenets/loading'
import NotFound from './views/notfound';

function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    // Timer - minimum loading time
    const timer = setTimeout(() => {
      setTimerComplete(true);
    }, 2000); // 2 seconds minimum

    // Asset loading detection
    const handleLoad = () => {
      setAssetsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setAssetsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Only stop loading when BOTH conditions are met
  useEffect(() => {
    if (assetsLoaded && timerComplete) {
      setIsLoading(false);
    }
  }, [assetsLoaded, timerComplete]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const router = createBrowserRouter([
    { path:'/', element:<Home/>},
    { path:'/terms', element:<ServiceErea/>},
    { path:'/checkout', element:<CheckoutPage/>},
    { path:'/pay/checkout', element:<CheckoutPage/>},
    { path:'/*', element:<NotFound/>}

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