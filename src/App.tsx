import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from "@/components/navbar"
import Home from "@/pages/Home"
import Events from "@/pages/Events"
import RSVP from "@/pages/RSVP"
import Travel from "@/pages/Travel"
import Hawaii from "@/pages/Hawaii"
import Registry from "@/pages/Registry"
import FAQ from "@/pages/FAQ"

export default function App() {
  const location = useLocation()

  return (
    <div>
      <Navbar />
      <div key={location.pathname} className="page-enter">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/hawaii" element={<Hawaii />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </div>
  )
}
