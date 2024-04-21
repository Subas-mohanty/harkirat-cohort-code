import {atom, selector} from 'recoil'

export const NotificationAtom = atom({
  key : 'NotificationAtom',
  default : 12
})
export const networkAtom = atom({
  key : 'networkAtom',
  default : 102
})
export const jobsAtom = atom({
  key : 'jobsAtom',
  default : 0
})
export const messagingAtom = atom({
  key : 'messagingAtom',
  default : 0
})


export const totalValueSelector = selector({
  key : 'totalValueSelector',
  get : ({get})=>{
    const NotificationCount = get(NotificationAtom);
    const jobsCount =  get(jobsAtom);
    const messagingCount =  get(messagingAtom);
    const networkCount =  get(networkAtom);

    return NotificationCount + jobsCount + messagingCount + networkCount;
  }
})