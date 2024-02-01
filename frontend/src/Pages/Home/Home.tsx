import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Outlet />

    </>
  )
}

export default React.memo(Home);