
import './App.css'
import AppFooter from './layout/AppFooter/AppFooter'

import MainHeader from './layout/MainHeader'
import { Contact } from './pages/Contact'
import AboutSetps from './Views/AboutSetps'
import Features from './Views/Features'
import OverviewSteps from './Views/OverviewSteps'
import { Pricing } from './Views/Pricing'
import { Recommendation } from './Views/Recommendation'
// import Sppiner from './Sppiner'


function App() {

  return (
    <>
    {/* <Sppiner/> */}
    <MainHeader/>
    <Features/>
    <AboutSetps/>
    <OverviewSteps/>
    <Recommendation/>
    <Pricing/>
    <Contact/>
    <AppFooter />
    
    </>
  )
}

export default App
