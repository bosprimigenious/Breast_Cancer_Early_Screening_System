import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResponsiveLayout from './components/ResponsiveLayout'
import Home from './pages/Home'
import DataUpload from './pages/DataUpload'
import RiskPrediction from './pages/RiskPrediction'
import PersonalizedAdvice from './pages/PersonalizedAdvice'
import HealthEducation from './pages/HealthEducation'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ContactUs from './pages/ContactUs'
import { SidebarProvider } from './contexts/SidebarContext'

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<DataUpload />} />
          <Route path="/prediction" element={<RiskPrediction />} />
          <Route path="/advice" element={<PersonalizedAdvice />} />
          <Route path="/education" element={<HealthEducation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </ResponsiveLayout>
    </SidebarProvider>
  )
}

export default App
