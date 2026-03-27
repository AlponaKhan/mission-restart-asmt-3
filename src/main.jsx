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


const dataPromise = fetch('/AppData.json').then(res=>res.json());


const router= createBrowserRouter([{
  path:'/',
  Component: Root,
  children:[
    {
      index:true,
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <Home dataPromise={dataPromise}></Home>
      </Suspense>
      },
    {
      path:'appsPage',
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <AppsPage dataPromise={dataPromise}></AppsPage>
      </Suspense>
      },
    {path:'installationPage', Component: InstallationPage},
    {
      path:"detail/:id",
      element: <Suspense fallback={<h2>Loading...</h2>}>
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
