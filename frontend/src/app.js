import React from 'react';
import RecoilizeDebugger from 'recoilize';
import {RecoilRoot,} from 'recoil';
import ChatRoot from './root/Chat';

const App = () => {
    return (
        <RecoilRoot>
            {/* <RecoilizeDebugger /> */}
        <ChatRoot/>
      
        </RecoilRoot>
         );
}
 
export default App;