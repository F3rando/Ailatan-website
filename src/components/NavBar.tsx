import { useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const onContact = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/#contact')
      return
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, navigate])

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center px-[4vw] z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <Link
        to="/"
        className="font-brand text-2xl tracking-[0.1em] text-primary hover:opacity-80 transition-opacity uppercase"
      >
        Ailatan
      </Link>
      <div className="hidden md:flex gap-[3vw]">
        <Link
          to="/entry"
          className="nav-link relative text-xs uppercase tracking-[0.15em] text-primary"
        >
          Entry
        </Link>
        <Link
          to="/pivot"
          className="nav-link relative text-xs uppercase tracking-[0.15em] text-primary"
        >
          Pivot
        </Link>
        <Link
          to="/bifold"
          className="nav-link relative text-xs uppercase tracking-[0.15em] text-primary"
        >
          Bifold
        </Link>
        <button
          type="button"
          onClick={onContact}
          className="nav-link relative text-xs uppercase tracking-[0.15em] text-primary"
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

