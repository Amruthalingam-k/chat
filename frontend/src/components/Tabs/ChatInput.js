import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { mesagesState } from '../../Statemanagement/Atoms/Messages';



const ChatInput = () => {
    const [message,setMessage] = useState('')
    const [messageState,setmessageState] = useRecoilState(mesagesState)

    var sendMessage = ()=>{
        var d = new Date().toJSON()
        var newMessages = [...messageState,{message,time:d,type:"from"}]
        setmessageState(newMessages)
        setMessage('')
    }
   
    return (   <div className="type-are">
    <input type="text" value={message} name="message" onKeyPress={(e)=>e.code=="Enter" ? sendMessage() : void(0) } onChange={(e)=>setMessage(e.target.value)} id="input-message-chat"/> 
    <div className="send-button hover-scale" onClick={()=>sendMessage()} id="chat_message_send" ></div>
</div> );
}
 
export default ChatInput;