import React from 'react'
import DashboardSideBar from '../../layouts/dashboard/Sidebar';
import NavbarLogo from '../../layouts/NavbarLogo'
const Wallet = () => {
  return (
    <div>
      <NavbarLogo/>
      <h2 className=''>Wallet</h2>
        <DashboardSideBar/>
        <div>
          <h3>Make Transactions by Funding and Withdrawing from your Wallet</h3>
          <img src='' alt=''/>
        </div>
        <div>
          <h5>Fund your Wallet</h5>
          <h5>Withdraw Funds</h5>
        </div>
        <div>
          <h4>+ Add Money to your Wallet</h4>
          <h4>Withdraw your Money</h4>
        </div>
    </div>
  )
}

export default Wallet