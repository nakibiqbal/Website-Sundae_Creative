import { Suspense, lazy } from 'react'
import './App.css'
import useLenis from './LENIS/useLenis'
// import Right_Img from './PAGES/RIGHT_IMG_SEC/Right_Img'
// import Section_1 from './PAGES/SECTION_1/Section_1'
// import Section_2 from './PAGES/SECTION_2/Section_2'
// import Section_3 from './PAGES/SECTION_3/Section_3'
// import Section_4 from './PAGES/SECTION_4/Section_4'
// import Section_5 from './PAGES/SECTION_5/Section_5'
// import Section_6 from './PAGES/SECTION_6/Section_6'
// import Section_7 from './PAGES/SECTION_7/Section_7'
// import Section_10 from './PAGES/SECTION_10/Section_10'
// import Section_9 from './PAGES/SECTION_9/Section_9'
// import Section_8 from './PAGES/SECTION_8/Section_8'
import FallbackLogic from './FallbackLogic'

const Section_1 = lazy(() => import("./PAGES/SECTION_1/Section_1"))
const Section_2 = lazy(() => import("./PAGES/SECTION_2/Section_2"))
const Section_3 = lazy(() => import("./PAGES/SECTION_3/Section_3"))
const Section_4 = lazy(() => import("./PAGES/SECTION_4/Section_4"))
const Section_5 = lazy(() => import("./PAGES/SECTION_5/Section_5"))
const Section_6 = lazy(() => import("./PAGES/SECTION_6/Section_6"))
const Section_7 = lazy(() => import("./PAGES/SECTION_7/Section_7"))
const Section_8 = lazy(() => import("./PAGES/SECTION_8/Section_8"))
const Section_9 = lazy(() => import("./PAGES/SECTION_9/Section_9"))
const Section_10 = lazy(() => import("./PAGES/SECTION_10/Section_10"))
const Right_Img = lazy(() => import("./PAGES/RIGHT_IMG_SEC/Right_Img"))

function App() {
  useLenis()
  return (
    <>
      <Suspense fallback={<FallbackLogic />}>
        <Section_1 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_2 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_3 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_4 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_5 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Right_Img />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_6 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_7 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_8 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_9 />
      </Suspense>
      <Suspense fallback={<FallbackLogic />}>
        <Section_10 />
      </Suspense>
    </>
  )
}

export default App



