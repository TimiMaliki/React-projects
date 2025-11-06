import './App.css'
import { Navbar } from './component/Navbar'
import HamburgerContextProvider from './context/HamburgerContext'

function App() {

  return (
    <>
    <HamburgerContextProvider>
        <Navbar/>
    </HamburgerContextProvider>
  
    </>
  )
}

export default App
