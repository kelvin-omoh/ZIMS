import React from 'react'
import NormalTicket from '../components/NormalTicket'
import Layout from '../components/Layout'
import NavDashboard from '../components/NavDashboard'

const ManageTickets = () => {
  return (
    <div>
        <Layout/>
        <NavDashboard/>
        <NormalTicket/>
    </div>
  )
}

export default ManageTickets