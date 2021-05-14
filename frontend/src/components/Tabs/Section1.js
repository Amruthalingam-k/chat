import React from 'react';
import { useRecoilValue } from 'recoil';
import Message from './Message';
import {mesagesState} from '../../Statemanagement/Atoms/Messages'
import ChatInput from './ChatInput';
var _ = require('lodash');

const Section1 = () => {
    const mesages = useRecoilValue(mesagesState)
    const groupedMessage = _.groupBy(mesages,elem=>new Date(elem.time).toDateString())
    console.log(groupedMessage);
    const message_list = _.map(groupedMessage,(value,key)=>{
        return (
            <div style={{    display: "flex",
                flexDirection: "column"}}>
        <div class="chat-date hover-scale" >{key}</div>
       { value.map(element=> <Message 
        message = {element.message}
        time = {element.time}
        type = {element.type}
        />)}
        </div>
        )
    })
 

    return ( 
        <div className="message-area">
           {message_list}
           <ChatInput/>
        </div>
     );
}
 
export default Section1;