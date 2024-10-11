import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Login from "./pages/Loginpage"
import Register from "./pages/Registerpage"
import AddCard from "./pages/AddCardpage"
import ViewCardspage from './pages/ViewCardspage'
import ViewStatementspage from './pages/ViewStatementspage'
import PayBillpage from './pages/PayBillpage'

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/login" element={<Login/>}/>
  
      <Route exact path="/register" element={<Register/>} />
        <Route exact path="/addcard" element={<AddCard/>} />
        <Route exact path="/viewcards" element={<ViewCardspage/>} />
   <Route path="/view-statement/:cardId" element={<ViewStatementspage />} />
   <Route path="/pay/:cardId" element={<PayBillpage/>} />
    </Routes>
  )
}

export default App