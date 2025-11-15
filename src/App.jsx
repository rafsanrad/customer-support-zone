import { Suspense } from 'react'
import './App.css'
import CustomerContainer from './Components/CustomerContainer'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Loading from './Components/Loading'

const loadCustomers=()=>fetch("/customers.json").then(res=>res.json())
function App() {
  const customersPromise=loadCustomers()
 
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<Loading></Loading>}>
        <CustomerContainer promise={customersPromise}></CustomerContainer>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
