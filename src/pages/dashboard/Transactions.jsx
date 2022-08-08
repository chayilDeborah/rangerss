import React from 'react'
import DashboardSideBar from '../../layouts/dashboard/Sidebar';
import NavbarLogo from '../../layouts/NavbarLogo'

const Transactions = () => {
  return (
    <div>
      <NavbarLogo/>
      <h3 className=''> Transactions</h3>
        <DashboardSideBar/>
        <div>
          <h3>View all your transactions on Renager</h3>
          <img src='' alt=''/>
        </div>
        <div>
          <h5>Details</h5>
          <h5>Type</h5>
          <h5>Status</h5>
          <h5>Amount</h5>
        </div>
    </div>
  )
}

export default Transactions