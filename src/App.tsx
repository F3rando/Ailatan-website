import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BifoldPage } from './pages/BifoldPage'
import { EntryPage } from './pages/EntryPage'
import { HomePage } from './pages/HomePage'
import { PivotPage } from './pages/PivotPage'

function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation()

  // Scroll to top on route changes, unless we have a hash target.
  // Hash scrolling is handled below.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    // Let layout paint first so sticky nav sizes are correct.
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [hash, pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndHash />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entry" element={<EntryPage />} />
          <Route path="/pivot" element={<PivotPage />} />
          <Route path="/bifold" element={<BifoldPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
