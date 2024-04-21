import { notificationsAtom, totalNotificationsSelector } from "./atoms/asyncAtom";
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from "recoil";
import React, { useEffect } from "react";
import axios from "axios";

function AsyncQueries() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
  //     // console.log(res);
  //     setNetworkCount(res.data);
  //   });
  // }, []);

  // const totalValue = useRecoilValue(totalValueSelector);
  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount.network > 99 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging({networkCount.messaging})</button>
      <button>Notifications({networkCount.notifications})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  );
}
export default AsyncQueries;
