import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AddCoursePage from './Components/AddCoursePage'
import UpdateCourse from './Components/UpdateCourse'
import ViewCourse from './Components/ViewCourse'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/courses' element={<AddCoursePage/>}/>
        <Route exact path='/course/update/:id' element={<UpdateCourse/>}/>
        <Route exact path='/course/view/:id' element={<ViewCourse/>}/>
      </Routes>
      
    </BrowserRouter> 
    </>
  )
}

export default App
