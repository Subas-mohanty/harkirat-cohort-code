
import { useMemo } from "react";
import { NotificationAtom, jobsAtom, networkAtom, messagingAtom, totalValueSelector } from "./atoms/atoms";
import {RecoilRoot, useRecoilValue} from 'recoil'
import AsyncQueries from "./AsyncQueries";

function App() {
  return <>
    <RecoilRoot>
      {/* <MyApp/> */}

    <AsyncQueries/>
    </RecoilRoot>
  </>
}

function MyApp(){

  const NotificationCount = useRecoilValue(NotificationAtom);
  const jobsCount =  useRecoilValue(jobsAtom);
  const messagingCount =  useRecoilValue(messagingAtom);
  const networkCount =  useRecoilValue(networkAtom);

  // const totalValue = useMemo(()=> NotificationCount + jobsCount + messagingCount + networkCount,[NotificationCount, jobsCount, messagingCount, networkCount])

  const totalValue = useRecoilValue(totalValueSelector);
  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount > 99 ? "99+" : jobsCount})</button>
      <button>Messaging ({messagingCount > 99 ? "99+" : messagingCount})</button>
      <button>Notifications ({NotificationCount > 99 ? "99+" : NotificationCount})</button>

      <button>Me({totalValue})</button>
    </>
  );
}
export default App;
