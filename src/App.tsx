import { Suspense } from "react"
import Footer from "./components/shared/Footer/Footer"
import Nav from "./components/shared/Navbar/Nav"
import Techs from "./components/Techs/Techs"

const techDataPromise = async()=>{
  const res = await fetch("/tech.json")
  const data=await res.json()
  return data
}

function App() {

const sentTechDataPromise  = techDataPromise()


  return (
    <>
    <Nav></Nav>
   <Suspense fallback={<p>Data is coming soon ...................</p>}>
     <Techs sentTechDataPromise = {sentTechDataPromise}></Techs>
   </Suspense>
    <Footer></Footer>
      

    </>
  )
}

export default App
