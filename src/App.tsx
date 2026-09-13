import { Suspense } from "react"
import Footer from "./components/shared/Footer/Footer"
import Nav from "./components/shared/Navbar/Nav"
import Techs from "./components/Techs/Techs"
import Banner from "./components/shared/Banner"
import type { techTypeData } from "./types/Types"

const techDataPromise = async():Promise<techTypeData>=>{
  const res = await fetch("/tech.json")
  const data=await res.json()
  return data
}

function App() {

const sentTechDataPromise  = techDataPromise()


  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
   <Suspense fallback={<p>Data is coming soon ...................</p>}>
     <Techs sentTechDataPromise = {sentTechDataPromise}></Techs>
   </Suspense>
    <Footer></Footer>
      

    </>
  )
}

export default App
