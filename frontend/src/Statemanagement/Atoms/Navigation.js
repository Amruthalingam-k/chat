import { atom } from "recoil";

const selectedNavState = atom({
    key:'selectedNavState',
    default:1,
})

export {selectedNavState}