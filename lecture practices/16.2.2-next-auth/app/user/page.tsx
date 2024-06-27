import Appbar from "@/app/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

async function route() {
    const session = await getServerSession(NEXT_AUTH);
    console.log(session);
  return (
    <div>
      <Appbar></Appbar>
      {JSON.stringify(session)}
    </div>
  ) 
}

export default route