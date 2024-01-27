import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from '../Pages/Auth/Register'
import SignUpNew from '../Pages/Auth/Register/Components/SignUpNew'
import CreateAccount from '../Pages/Auth/Register/Components/CreateAccount'
import InvitationStep1 from '../Pages/Auth/Register/Components/Invitation/InvitationStep1'
import InvitationStep2 from '../Pages/Auth/Register/Components/Invitation/InvitationStep2'
import { Result } from '../Pages/Auth/Register/Components/Result'

const AppRoutes:React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route index path="" element={<Register/>} />
      <Route path="/sign-up-new" element={<SignUpNew/>} />
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="/step1" element={<InvitationStep1/>} />
      <Route path="/step2" element={<InvitationStep2/>} />
      <Route path="/result" element={<Result/>} />
    </Routes>
    </Router>
  )
}

export default React.memo(AppRoutes)