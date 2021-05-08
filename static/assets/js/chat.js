docReady(function() {
    // DOM is loaded and ready for manipulation here
    // attach event for onclick in nav-child
    document.querySelectorAll('.nav-child').forEach(element => {
       element.addEventListener('click',(event)=>{
        document.querySelectorAll('.nav-child').forEach(nav => {
            nav.classList.remove("selected")
        })
        event.target.classList.add('selected')
        document.querySelectorAll('.message-container').forEach(messageContainers=>{
         
          const listArray = Array.from(messageContainers.children);
          listArray.forEach(message => {
              if(message.classList.contains('container')){
                message.classList.add('no-display')

              }
            }); 
        })
           console.log(event.target.classList.contains("selected"));
           document.getElementById('selected-section-heading').innerHTML = event.target.dataset.heading
           
           document.getElementById(event.target.dataset.area).classList.remove('no-display')
       })
    });
    
    //replace this in html with django id
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    subscribe_id = urlParams['id']

    //establishing ably connection 
    var ably = new Ably.Realtime('3ICEEg.v0ep1A:GSBripJpj1Fvl57Z');
    var channel = ably.channels.get('chat_subscribe_id');

    //add event listner on message send
    document.getElementById('chat_message_send').addEventListener('click',()=>{
      message = document.getElementById('input-message-chat').value
      date = new Date()
      channel.publish('chat', {message,date:date.toLocaleDateString(),time:date.toLocaleTimeString()});
    })



});

//adding message to chat area
var addMessage = (message,type,time) =>{

  message_area_chat = document.getElementById('message_area_chat')

  message_area_chat.querySelectorAll('.chat-date').forEach(element => {
    
  });

}