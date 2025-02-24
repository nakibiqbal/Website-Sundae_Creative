import './App.css'
import useLenis from './LENIS/useLenis'
import Right_Img from './PAGES/RIGHT_IMG_SEC/Right_Img'
import Section_1 from './PAGES/SECTION_1/Section_1'
import Section_2 from './PAGES/SECTION_2/Section_2'
import Section_3 from './PAGES/SECTION_3/Section_3'
import Section_4 from './PAGES/SECTION_4/Section_4'
import Section_5 from './PAGES/SECTION_5/Section_5'
import Section_6 from './PAGES/SECTION_6/Section_6'
import Section_7 from './PAGES/SECTION_7/Section_7'
import Section_9 from './PAGES/SECTION_9/Section_9'

function App() {
  useLenis()
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Right_Img />
      <Section_6 />
      <Section_7 />
      <Section_9 />
      <div style={{ width: "100%", height: "100vh", background: "white" }}></div>
    </>
  )
}

export default App



