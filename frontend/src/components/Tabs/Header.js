import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {selectedNavState} from '../../Statemanagement/Atoms/Navigation'

const TabHeader = () => {
    const [selectedHeader, setselectedHeader] = useRecoilState(selectedNavState)
 

    return (

         <div className="header">
             
             <p className={selectedHeader == 1 ? "selected":""} onClick={()=>setselectedHeader(1)} >Chat</p>
             <p className={selectedHeader == 2 ? "selected":""} onClick={()=>setselectedHeader(2)} >Files</p>
             <p className={selectedHeader == 3 ? "selected":""} onClick={()=>setselectedHeader(3)}>Certificate</p>
        </div> 
    
    )
}
 
export default TabHeader;
