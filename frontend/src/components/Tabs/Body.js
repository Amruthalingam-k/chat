import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedNavState } from '../../Statemanagement/Atoms/Navigation';
import Section1 from './Section1';

const Body = () => {
   const selectedNav =  useRecoilValue(selectedNavState)
   var element = ""
    if (selectedNav == 1) {
        var element =  <Section1/> 
    }
    return  element;
}
 
export default Body;