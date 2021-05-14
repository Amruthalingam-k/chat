import React, { useState } from 'react';
import TabHeader from './Tabs/Header';

const Header = () => {
    return ( 
        <div className="header">
        <div className="profile-pic" style={{backgroundImage:`url('static/assets/images/user.svg')`}} ></div>

<div className="online on" ></div>


        <div className="name">Amruth</div>
        {/* <div className="selected" id="selected-section-heading" >Chat</div> */}
        <div className="header-wrapper">
        <TabHeader/>

        </div>

    </div>
     );
}
 
export default Header;