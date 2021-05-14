import React from 'react';

const Message = (props) => {
    const {message,time,type} = props
    return ( 
        <div className={"hover-scale chat-" + type} >
        <div className="message">{message}</div>
        <div className="time">{new Date(time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
    </div>
     );
}
 
export default Message;