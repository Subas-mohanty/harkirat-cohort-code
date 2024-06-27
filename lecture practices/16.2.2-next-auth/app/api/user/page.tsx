'use client';

import { useSession } from "next-auth/react"

function route() {
    const session = useSession();
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  ) 
}

export default route