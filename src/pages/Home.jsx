import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Sparkles,
  MapPin,
  Phone,
  UserRoundCheck,
  BadgeDollarSign,
  Trees,
  ClipboardCheck,
  FileText,
  Hammer,
  BrushCleaning,
} from 'lucide-react';
import {services, areas} from '../content';
import ReviewCarousel from '../components/ReviewCarousel';

const chooseReasons = [
  {icon: UserRoundCheck, title: 'Owner Operated', text: 'You work directly with the owner—not a salesperson or distant corporate office.'},
  {icon: ShieldCheck, title: 'Licensed & Fully Insured', text: 'Every project is approached with safety, professionalism and property protection in mind.'},
  {icon: Sparkles, title: 'Respect for Your Property', text: 'We protect surrounding landscaping, clean thoroughly and leave the property ready to enjoy.'},
  {icon: BadgeDollarSign, title: 'Honest Pricing', text: 'Clear recommendations and straightforward estimates without unnecessary surprises.'},
];

const process = [
  {icon: FileText, title: 'Request an Estimate', text: 'Tell us what you need through our online form or by phone.'},
  {icon: Trees, title: 'On-Site Inspection', text: 'Giovani evaluates the trees, access and surrounding property.'},
  {icon: ClipboardCheck, title: 'Transparent Quote', text: 'You receive a clear scope of work and straightforward pricing.'},
  {icon: Hammer, title: 'Professional Service', text: 'Our team completes the work safely, efficiently and with care.'},
  {icon: BrushCleaning, title: 'Complete Cleanup', text: 'We finish by clearing debris and leaving the site clean and orderly.'},
];

export default function Home(){ return <>
  <section className="hero">
    <img src="/images/pine-climber.webp" alt="CBX tree professional climbing a pine tree in Southwest Florida"/>
    <div className="heroShade"></div>
    <div className="heroContent">
      <span className="eyebrow">Naples-grown expertise • Nearly 15 years of experience</span>
      <h1>Professional Tree Trimming &amp; Removal Done Right.</h1>
      <p className="heroLead"><strong>Safe. Fully Insured. Owner Operated.</strong><br/>Honest pricing. Meticulous cleanup. Exceptional workmanship.</p>
      <p className="heroAreas">Proudly serving Naples, Marco Island, Bonita Springs &amp; Estero.</p>
      <div className="heroActions"><Link className="button primary" to="/estimate">Request a Free Estimate <ArrowRight/></Link><a className="button ghost" href="tel:+12392380783"><Phone/> (239) 238-0783</a></div>
    </div>
  </section>

  <section className="trust"><div><ShieldCheck/><strong>Licensed &amp; Insured</strong></div><div><Clock3/><strong>Fast Scheduling</strong></div><div><Sparkles/><strong>Superior Cleanup</strong></div><div><CheckCircle2/><strong>Family Owned</strong></div></section>


  <section className="statsBand" aria-label="CBX Tree Service highlights">
    <article><strong data-count="15">Nearly 15</strong><span>Years of hands-on industry experience</span></article>
    <article><strong>12+</strong><span>Southwest Florida communities served</span></article>
    <article><strong>Owner-Led</strong><span>Personal involvement from estimate to cleanup</span></article>
    <article><strong>Free</strong><span>On-site estimates requested through Jobber</span></article>
  </section>

  <section className="why section">
    <div className="sectionHead"><span className="kicker">Why homeowners choose CBX</span><h2>Professional tree care with personal accountability.</h2><p>From the first estimate through the final cleanup, every detail is handled with the care, communication and responsibility you expect from a local owner-operated company.</p></div>
    <div className="reasonGrid">{chooseReasons.map(({icon:Icon,title,text})=><article className="reasonCard" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>

  <section className="intro section alt"><div><span className="kicker">The CBX difference</span><h2>Your property deserves more than just a tree service.</h2></div><div><p>It deserves a team that protects your home, landscaping and peace of mind. Giovani is personally involved from the estimate through job completion, giving every project the attention of a local owner—not a corporate sales office.</p><Link className="textLink" to="/about">Meet Giovani <ArrowRight size={18}/></Link></div></section>

  <section className="services section"><div className="sectionHead"><span className="kicker">Complete tree care</span><h2>Services built around your property.</h2><p>From routine trimming and palm maintenance to difficult removals and storm cleanup, CBX handles the work safely and leaves the property clean.</p></div><div className="cards">{services.slice(0,6).map((s,i)=><Link className="serviceCard" to={`/services/${s.slug}`} key={s.slug}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.short}</p><ArrowRight/></Link>)}</div><div className="center"><Link className="button outline" to="/services">View All Services</Link></div></section>

  <section className="splitFeature section alt"><div className="featureImage"><img src="/images/poolside-palm-care.webp" alt="Tree care performed carefully beside a Naples pool"/></div><div className="featureText"><span className="kicker">Respect for your property</span><h2>Careful work in the spaces that matter most.</h2><p>Tree work often happens beside pools, roofs, driveways and established landscaping. We plan each project carefully, protect surrounding surfaces and clean up thoroughly when the work is complete.</p><ul><li><CheckCircle2/> Property protection</li><li><CheckCircle2/> Honest recommendations</li><li><CheckCircle2/> Clean, orderly job sites</li></ul><Link className="button primary" to="/gallery">See Our Work</Link></div></section>

  <section className="process section"><div className="sectionHead"><span className="kicker">A simple, professional process</span><h2>From first call to final cleanup.</h2><p>We make it easy to understand what comes next, communicate clearly and keep your property at the center of every decision.</p></div><div className="processGrid">{process.map(({icon:Icon,title,text},i)=><article className="processStep" key={title}><span className="processNumber">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

  <section className="owner section alt"><div><img src="/images/giovani.webp" alt="Giovani, owner and founder of CBX Tree Service"/></div><div><span className="kicker">Meet the owner</span><h2>Local roots. Hands-on leadership.</h2><p>Born and raised in Naples, Giovani has spent nearly 15 years working with the trees and landscapes of Southwest Florida. He remains personally involved in every estimate and project, from the first conversation through final cleanup.</p><blockquote>“My goal is simple: give homeowners honest guidance, do the work safely and treat every property like it’s our own.”</blockquote><Link className="textLink" to="/about">Read our story <ArrowRight size={18}/></Link></div></section>

  <section className="reviews section"><div className="sectionHead"><span className="kicker">Your neighbors trust CBX</span><h2>Real reviews from Southwest Florida homeowners.</h2><p>Customers repeatedly mention prompt service, fair pricing, honesty and cleanup—the standards we work to deliver on every project.</p></div><ReviewCarousel/><div className="center"><Link className="button outline" to="/reviews">Read More Reviews</Link></div></section>

  <section className="areas section dark"><div><span className="kicker light">Proudly serving Southwest Florida</span><h2>Rooted in Naples. Ready when you need us.</h2><p>Our current service area stretches from Bonita Springs south to Marco Island, with trusted service throughout Naples and surrounding communities.</p></div><div className="areaList">{areas.map(a=>{const slug={Naples:'naples','North Naples':'north-naples','Bonita Springs':'bonita-springs','Marco Island':'marco-island',Estero:'estero','Golden Gate':'golden-gate','Golden Gate Estates':'golden-gate-estates','Ave Maria':'ave-maria','Port Royal':'port-royal','Royal Harbor':'royal-harbor','Aqualane Shores':'aqualane-shores','Isles of Capri':'isles-of-capri'}[a]; return <Link key={a} to={`/tree-service/${slug}`}><MapPin size={15}/>{a}</Link>})}</div></section>

  <section className="cta section"><div><span className="kicker">Free estimates</span><h2>Let’s make your property safer and more beautiful.</h2><p>Whether you need routine trimming, emergency removal, palm care or a complete property cleanup, CBX is ready to help.</p></div><div className="ctaActions"><Link className="button primary" to="/estimate">Request Your Free Estimate <ArrowRight/></Link><a className="button outline" href="tel:+12392380783"><Phone/> Call (239) 238-0783</a></div></section>
</> }
