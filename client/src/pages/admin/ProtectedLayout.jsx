import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const ProtectedLayout = () => {
    const user = null;
    const navigate = useNavigate();
    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [navigate])
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default ProtectedLayout