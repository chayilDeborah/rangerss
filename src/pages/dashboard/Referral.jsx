import React from 'react'
import DashboardSideBar from '../../layouts/dashboard/Sidebar';
import NavbarLogo from '../../layouts/NavbarLogo'
import Side from '../../../src/assets/dashboard_img/undraw_referral_4ki4 1referalillustration.png'

const Referral = () => {
  return (
    <div>
      <NavbarLogo/>
      <h2 className=''>Referrals</h2>
      <DashboardSideBar/>
      <div>
        <h1>Refer People on Renager, and earn a commission once the transaction is completed</h1>
        <img src={Side} alt=''/>
      </div>
      <div>
        <h6>Share your Referral Code</h6>
        <input type='text' placeholder='2xUwjsoi0DGSHWKAMSB' />
      </div>
      <div>
        <h6>Share to</h6>
      </div>
    </div>
  )
}

export default Referral