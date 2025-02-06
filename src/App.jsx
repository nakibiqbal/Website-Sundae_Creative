import './App.css'
import useLenis from './LENIS/useLenis'
// import Navbar from './NAVBAR/Navbar'
import Section_1 from './PAGES/SECTION_1/Section_1'
import Section_2 from './PAGES/SECTION_2/Section_2'

function App() {
  useLenis()
  return (
    <>
      <Section_1 />
      <Section_2 />
      <div style={{ width: "100%", height: "100vh", background: "white" }}></div>
    </>
  )
}

export default App



