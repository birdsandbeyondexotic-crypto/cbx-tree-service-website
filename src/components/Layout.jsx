import React, {useEffect,useState} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import QuickHelp from './QuickHelp';
import EmergencyBanner from './EmergencyBanner';

export default function Layout({children}) {
  const [open,setOpen]=useState(false);
  const location=useLocation();
  useEffect(()=>{setOpen(false);window.scrollTo({top:0,behavior:'smooth'})},[location.pathname]);
  const handleHomeClick = () => {setOpen(false);window.scrollTo({ top: 0, behavior: 'smooth' });};
  return <>
    <div className="topbar"><span>Serving Naples • Marco Island • Bonita Springs • Estero</span><div className="topbarLinks"><a href="sms:+12392380783"><MessageCircle size={14}/> Text Us</a><a href="tel:+12392380783"><Phone size={15}/> (239) 238-0783</a></div></div>
    <header className="header">
      <Link className="brand" to="/" onClick={handleHomeClick} aria-label="CBX Tree Service home — return to top"><img src="/images/logo.webp" alt="CBX Tree Service logo"/><span>CBX Tree Service</span></Link>
      <div className="headerQuick"><a href="tel:+12392380783" aria-label="Call CBX Tree Service"><Phone size={19}/></a><button className="menuButton" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>
      <nav className={open?'nav open':'nav'} onClick={()=>setOpen(false)}>
        <NavLink to="/">Home</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/gallery">Our Work</NavLink><NavLink to="/about">About</NavLink><NavLink to="/reviews">Reviews</NavLink><NavLink to="/contact">Contact</NavLink>
        <a className="mobileNavAction" href="sms:+12392380783"><MessageCircle size={17}/> Text CBX</a>
        <Link className="navCta" to="/estimate">Free Estimate <ArrowRight size={16}/></Link>
      </nav>
    </header>
    <EmergencyBanner/>
    <main>{children}</main>
    <footer>
      <div className="footerGrid">
        <div><div className="footerBrand"><img src="/images/logo.webp" alt=""/><strong>CBX Tree Service</strong></div><p>Rooted in Naples. Trusted across Southwest Florida.</p></div>
        <div><h4>Contact</h4><a href="tel:+12392380783">(239) 238-0783</a><a href="sms:+12392380783">Text CBX</a><a href="mailto:haley@cbxtreeservice.com">haley@cbxtreeservice.com</a><span>Naples, Florida</span></div>
        <div><h4>Service Area</h4><span>Naples • Bonita Springs</span><span>Marco Island • Estero</span><span>and surrounding communities</span></div>
        <div><h4>Connect</h4><a href="https://www.facebook.com/profile.php?id=61579083944576" target="_blank" rel="noreferrer">Facebook</a><Link to="/estimate">Request a Free Estimate</Link></div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} CBX Tree Service. Licensed & insured.</div>
    </footer>
    <QuickHelp/>
    <div className="mobileActions"><a className="mobileText" href="sms:+12392380783"><MessageCircle size={18}/><span>Text</span></a><Link className="mobileEstimate" to="/estimate">Free Estimate</Link><a className="mobileCall" href="tel:+12392380783"><Phone size={18}/><span>Call</span></a></div>
  </>
}
