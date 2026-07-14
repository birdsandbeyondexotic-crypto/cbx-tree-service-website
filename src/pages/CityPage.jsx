import React from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import {ArrowRight, CheckCircle2, MapPin, Phone} from 'lucide-react';

const cities={
  naples:{name:'Naples',intro:'Owner-operated tree trimming, removal, palm care and storm cleanup for Naples homes, communities and commercial properties.',areas:'Naples and surrounding Collier County communities'},
  'north-naples':{name:'North Naples',intro:'Professional tree trimming, removal and palm care for North Naples homes, gated communities and commercial properties.',areas:'North Naples and nearby neighborhoods'},
  'bonita-springs':{name:'Bonita Springs',intro:'Dependable tree trimming, removal, palm care and storm cleanup for Bonita Springs homeowners and property managers.',areas:'Bonita Springs and nearby communities'},
  'marco-island':{name:'Marco Island',intro:'Professional tree and palm service for Marco Island properties, with careful planning around homes, pools, landscaping and coastal conditions.',areas:'Marco Island and nearby coastal properties'},
  estero:{name:'Estero',intro:'Local, fully insured tree care for Estero properties, backed by owner involvement, honest recommendations and complete cleanup.',areas:'Estero and surrounding neighborhoods'},
  'golden-gate':{name:'Golden Gate',intro:'Responsive tree trimming, removal, palm care and debris cleanup for Golden Gate homes and properties.',areas:'Golden Gate and nearby Naples communities'},
  'golden-gate-estates':{name:'Golden Gate Estates',intro:'Tree removal, trimming, land clearing and storm cleanup for larger Golden Gate Estates properties.',areas:'Golden Gate Estates and nearby acreage properties'},
  'ave-maria':{name:'Ave Maria',intro:'Professional tree and palm care for Ave Maria homes and communities, with straightforward estimates and careful cleanup.',areas:'Ave Maria and surrounding eastern Collier County communities'},
  'port-royal':{name:'Port Royal',intro:'Discreet, careful tree trimming, removal and palm care for Port Royal properties and established landscapes.',areas:'Port Royal and nearby Naples waterfront communities'},
  'royal-harbor':{name:'Royal Harbor',intro:'Professional tree and palm service for Royal Harbor homes, with careful attention around waterfront access, pools and landscaping.',areas:'Royal Harbor and nearby Naples waterfront neighborhoods'},
  'aqualane-shores':{name:'Aqualane Shores',intro:'Owner-led tree trimming, removal and palm care for Aqualane Shores properties, with meticulous property protection and cleanup.',areas:'Aqualane Shores and nearby Old Naples communities'},
  'isles-of-capri':{name:'Isles of Capri',intro:'Reliable tree trimming, removal and palm care for Isles of Capri properties, including storm preparation and debris cleanup.',areas:'Isles of Capri and nearby Marco Island communities'},
};

export default function CityPage(){
  const {city}=useParams();
  const data=cities[city];
  if(!data) return <Navigate to="/service-areas" replace/>;
  return <>
    <section className="cityHero"><div><span className="eyebrow">Tree service in {data.name}, Florida</span><h1>Professional Tree Trimming &amp; Removal in {data.name}.</h1><p>{data.intro}</p><div className="heroActions"><Link className="button primary" to="/estimate">Request a Free Estimate <ArrowRight/></Link><a className="button ghost" href="tel:+12392380783"><Phone/> (239) 238-0783</a></div></div></section>
    <section className="cityContent section"><div><span className="kicker">Local, owner-operated service</span><h2>Tree care built around your property.</h2><p>Southwest Florida trees require local experience, careful access planning and respect for nearby roofs, pools, driveways and landscaping. Giovani remains personally involved from estimate through completion so recommendations stay practical and the work meets the CBX standard.</p><ul><li><CheckCircle2/> Tree trimming and structural pruning</li><li><CheckCircle2/> Hazardous and unwanted tree removal</li><li><CheckCircle2/> Palm trimming and hurricane preparation</li><li><CheckCircle2/> Storm cleanup and emergency response</li><li><CheckCircle2/> Stump grinding and debris removal</li></ul></div><aside><MapPin/><h3>Serving {data.name}</h3><p>{data.areas}</p><Link className="button primary" to="/estimate">Get Your Free Estimate</Link></aside></section>
  </>;
}
