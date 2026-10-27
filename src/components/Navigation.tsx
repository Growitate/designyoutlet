import { ArrowUpRight, Menu, X } from 'lucide-react'

export type PageRoute = 'home' | 'services' | 'work' | 'about' | 'contact'

interface NavigationProps {
  currentPage: PageRoute
  onNavigate: (page: PageRoute) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const navItems: { id: PageRoute; number: string; label: string }[] = [
  { id: 'home', number: '01', label: 'Home' },
  { id: 'services', number: '02', label: 'Services' },
  { id: 'work', number: '03', label: 'Work / Portfolio' },
  { id: 'about', number: '04', label: 'About Us' },
  { id: 'contact', number: '05', label: 'Contact' },
]

export function Navigation({ currentPage, onNavigate, menuOpen, setMenuOpen }: NavigationProps) {
  const handleItemClick = (page: PageRoute) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="topbar">
      <button
        className="wordmark"
        onClick={() => handleItemClick('home')}
        aria-label="Designy Outlet Home"
      >
        <span className="wordmark-mark">
          <span />
          <span />
          <span />
        </span>
        <span>
          designy<span className="wordmark-dot"> outlet.</span>
        </span>
      </button>

      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              className={`nav-link-btn ${isActive ? 'nav-link-active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="nav-item-num">{item.number}</span>
              <span className="nav-item-text">{item.label}</span>
              {isActive && <span className="nav-active-pill" />}
            </button>
          )
        })}

        <button
          className="nav-contact"
          onClick={() => handleItemClick('contact')}
        >
          <span>Ready to stand out?</span>
          <ArrowUpRight size={15} />
        </button>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
