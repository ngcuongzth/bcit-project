import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import { HomePage, AboutPage, ErrorPage, ContactPage, DocumentPage, DetailDocPage } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/documents" element={<DocumentPage />} />
          <Route path="/documents/:id" element={<DetailDocPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App