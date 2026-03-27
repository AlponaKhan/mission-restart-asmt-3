import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/root/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppsPage from './components/AppsPage/AppsPage.jsx'
import InstallationPage from './components/InstallationPage/InstallationPage.jsx'
import AppDetail from './components/AppDetailPage/AppDetail.jsx'
import PageError from './components/ErrorPages/PageError.jsx'
import Loader from './components/Loader.jsx'


const dataPromise = fetch('/AppData.json').then(res=>res.json());


const router= createBrowserRouter([{
  path:'/',
  Component: Root,
  children:[
    {
      index:true,
      element: <Suspense fallback={<Loader></Loader>}>
        <Home dataPromise={dataPromise}></Home>
      </Suspense>
      },
    {
      path:'appsPage',
      element: <Suspense fallback={<Loader></Loader>}>
        <AppsPage dataPromise={dataPromise}></AppsPage>
      </Suspense>
      },
    {
      path:'installationPage', 
      element: <Suspense fallback={<Loader></Loader>}>
                  <InstallationPage dataPromise={dataPromise} ></InstallationPage>
      </Suspense>
    },
    {
      path:"detail/:id",
      element: <Suspense fallback={<Loader></Loader>}>
                <AppDetail dataPromise={dataPromise}></AppDetail>
      </Suspense>
    },
    {
      path: "*",
      Component: PageError
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
