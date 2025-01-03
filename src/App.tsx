
import './App.css'
import { useDispatch, useSelector } from 'react-redux'


import { RootState } from './app/store'
import Navbar from './components/layout/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
