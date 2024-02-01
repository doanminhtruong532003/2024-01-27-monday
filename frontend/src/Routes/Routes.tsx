import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Register from '../Pages/Auth/Register'
import SignUpNew from '../Pages/Auth/Register/Components/SignUpNew'
import CreateAccount from '../Pages/Auth/Register/Components/CreateAccount'
import InvitationStep1 from '../Pages/Auth/Register/Components/Invitation/InvitationStep1'
import InvitationStep2 from '../Pages/Auth/Register/Components/Invitation/InvitationStep2'
import { Result } from '../Pages/Auth/Register/Components/Result'
import Home from '../Pages/Home';
import Loading from '../Components/Loading';

const AppRoutes: React.FC = () => {
  const routes = [
    {
      path: "",
      element: <Home />,
      children: [
        {
          path: "/", element: <Home />
        },
        {
          path: "users",
          element: <Register />,
          children: [
            { path: "sign-up-new", element: <SignUpNew /> },
            { path: "create-account", element: <CreateAccount /> },
            { path: "step1", element: <InvitationStep1 /> },
            { path: "step2", element: <InvitationStep2 /> },
            { path: "result", element: <Result /> },
          ]
        },
        { path: "404", element: <Loading /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ]
    }
  ]

  const routing = useRoutes(routes);
  return (
    <React.Suspense fallback={<Loading />}>
      <div className="w-screen">
        {routing}
      </div>
    </React.Suspense>
  )
}

export default React.memo(AppRoutes)