import './App.css'
import useLenis from './LENIS/useLenis'
// import Navbar from './NAVBAR/Navbar'
import Section_1 from './PAGES/SECTION_1/Section_1'

function App() {
  useLenis()
  return (
    <>
      <Section_1 />
      <div style={{ width: "100%", height: "100vh", background: "white" }}></div>
    </>
  )
}

export default App
