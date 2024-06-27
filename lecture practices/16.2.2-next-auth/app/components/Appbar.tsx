"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

function Appbar() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/api/auth/signin")}>Signin</button>
  )
}

export default Appbar