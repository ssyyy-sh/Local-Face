import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SearchIcon, UserIcon, HeartIcon, BagIcon, MenuIcon, CloseIcon } from './Icons.jsx';
import { useShop } from '../context/ShopContext.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist } = useShop();
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">Local Face</Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__icons">
          <button className="icon-btn" aria-label="Search"><SearchIcon /></button>
          <button className="icon-btn" aria-label="Account"><UserIcon /></button>
          <button className="icon-btn" aria-label="Wishlist">
            <HeartIcon />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </button>
          <button className="icon-btn" aria-label="Bag">
            <BagIcon />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button className="icon-btn burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
