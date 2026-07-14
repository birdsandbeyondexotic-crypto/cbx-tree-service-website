import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import QuickHelp from './QuickHelp';

export default function Layout({children}) {
  const [open,setOpen]=useState(false);
  const handleHomeClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <>
    <div className="topbar"><span>Serving Naples • Marco Island • Bonita Springs • Estero</span><a href="tel:+12392380783"><Phone size={15}/> (239) 238-0783</a></div>
    <header className="header">
      <Link className="brand" to="/" onClick={handleHomeClick} aria-label="CBX Tree Service home — return to top"><img src="/images/logo.webp" alt="CBX Tree Service logo"/><span>CBX Tree Service</span></Link>
      <button className="menuButton" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
      <nav className={open?'nav open':'nav'} onClick={()=>setOpen(false)}>
        <NavLink to="/">Home</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/gallery">Our Work</NavLink><NavLink to="/about">About</NavLink><NavLink to="/reviews">Reviews</NavLink><NavLink to="/contact">Contact</NavLink>
        <Link className="navCta" to="/estimate">Free Estimate <ArrowRight size={16}/></Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <div className="footerGrid">
        <div><div className="footerBrand"><img src="/images/logo.webp"/><strong>CBX Tree Service</strong></div><p>Rooted in Naples. Trusted across Southwest Florida.</p></div>
        <div><h4>Contact</h4><a href="tel:+12392380783">(239) 238-0783</a><a href="mailto:haley@cbxtreeservice.com">haley@cbxtreeservice.com</a><span>Naples, Florida</span></div>
        <div><h4>Service Area</h4><span>Naples • Bonita Springs</span><span>Marco Island • Estero</span><span>and surrounding communities</span></div>
        <div><h4>Connect</h4><a href="https://www.facebook.com/profile.php?id=61579083944576" target="_blank" rel="noreferrer">Facebook</a><Link to="/estimate">Request a Free Estimate</Link></div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} CBX Tree Service. Licensed & insured.</div>
    </footer>
    <QuickHelp/>
    <div className="mobileActions"><a className="mobileEstimate" href="/estimate">Free Estimate</a><a className="mobileCall" href="tel:+12392380783"><Phone size={18}/> Call CBX</a></div>
  </>
}
