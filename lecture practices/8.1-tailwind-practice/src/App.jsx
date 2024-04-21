import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount pending"} amount={"83,393"} orders={10} />
    </div>
  )
}

export default App
