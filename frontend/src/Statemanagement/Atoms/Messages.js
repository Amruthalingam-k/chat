import { atom } from "recoil";

var d = new Date();
d.setDate(d.getDate()-1);
const mesagesState = atom({
    key:'mesagesState',
    default:[
        {
        message :"hai",
        time : d.toJSON(),
        type : "from",
    },
    {
        message :"hello",
        time : new Date().toJSON(),
        type : "to",
    }

],
})

export {mesagesState}