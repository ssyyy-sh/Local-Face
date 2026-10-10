import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, LinkedIn, Instagram } from './Icons.jsx';

const columns = [
  { title: 'Categories', items: ['Fashion', 'Jewelry', 'Sports', 'Electronics', 'Indoor'] },
  { title: 'Shopping', items: ['Payments', 'Delivery options', 'Buyer protection'] },
  { title: 'Customer care', items: ['Help center', 'Terms & Conditions', 'Privacy policy', 'Returns & refund', 'Survey & feedback'] },
];

const pages = [
  { to: '/about', label: 'About Us' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Contact Us' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__subscribe">
            <Link to="/" className="logo">Local Face</Link>
            <h4>Subscribe to Our Newsletter:</h4>
            <p>Receive Updates on New Arrivals and Special Promotions!</p>
            <form className="subscribe" onSubmit={submit}>
              <input type="email" placeholder="Your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="btn btn--accent btn--sm" type="submit">Submit</button>
            </form>
            {sent && <p className="subscribe__ok">Thank you for subscribing!</p>}
            <div className="socials">
              <Twitter /><Facebook /><LinkedIn /><Instagram />
            </div>
          </div>

          <div className="footer__cols">
            {columns.map((c) => (
              <div key={c.title} className="footer__col">
                <h5>{c.title}</h5>
                {c.items.map((i) => <a key={i} href="#" onClick={(e) => e.preventDefault()}>{i}</a>)}
              </div>
            ))}
            <div className="footer__col">
              <h5>Pages</h5>
              {pages.map((p) => <Link key={p.label} to={p.to}>{p.label}</Link>)}
            </div>
          </div>
        </div>
        <div className="footer__bottom">© 2023 Local Face Inc. All rights reserved</div>
      </div>
    </footer>
  );
}
