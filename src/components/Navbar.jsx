function Navbar({ currentPage, onNavigate, onLogout, isAdmin }) {
  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'gallery', label: 'Gallery' },
    ...(isAdmin ? [{ id: 'admin', label: 'Admin' }] : []),
  ]

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <button className="brand" type="button" onClick={() => onNavigate('dashboard')}>framefolk<span>/</span></button>
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            className={currentPage === link.id ? 'nav-link active' : 'nav-link'}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button className="logout-button" type="button" onClick={onLogout}>Sign out</button>
    </nav>
  )
}

export default Navbar;
