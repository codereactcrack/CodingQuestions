import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainScreen from './MainScreen'
import Question1 from './Question/Question1'
import Solution1 from './Question/Solution1'

const NavigationScreen = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route >
                <Route path='/' element={<MainScreen />} />
                <Route path='/Question:-1' element ={<Question1 />} />
                <Route path='/Solution:-1' element ={<Solution1 />} />
            </Route>
        )
    )

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default NavigationScreen