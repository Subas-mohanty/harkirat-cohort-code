
import axios from "axios";
import { atom, selector } from "recoil";

const temp = selector({
  key : "notificationsAtomSelector",
  get : async ({get})=>{

    // await new Promise(time => setTimeout(time,5000)) // sleep for 5 seconds, make the fetch request after 5 seconds
    const res = await axios.get("https://sum-server.100xdevs.com/notifications");
    return res.data;
  }
})

export const notificationsAtom = atom({
  key : "notifications",
  // default : {
  //   jobs : 0,
  //   messaging : 0,
  //   network : 0,
  //   notifications : 0,
  // } 
  default : temp // we can directly put the async function here also
});

export const totalNotificationsSelector = selector({
  key : "totalNotificationsSelector",
  get : ({get})=>{
    const allNotifications = get(notificationsAtom);
    return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging
  }
})

