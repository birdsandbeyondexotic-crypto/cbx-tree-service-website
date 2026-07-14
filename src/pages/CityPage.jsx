import React from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import {ArrowRight, CheckCircle2, MapPin, Phone} from 'lucide-react';

const cities={
  naples:{name:'Naples',intro:'Owner-operated tree trimming, removal, palm care and storm cleanup for Naples homes, communities and commercial properties.',areas:'North Naples, Golden Gate, Golden Gate Estates, Port Royal, Royal Harbor and Aqualane Shores'},
  'marco-island':{name:'Marco Island',intro:'Professional tree and palm service for Marco Island properties, with careful planning around homes, pools, landscaping and coastal conditions.',areas:'Marco Island and Isles of Capri'},
  'bonita-springs':{name:'Bonita Springs',intro:'Dependable tree trimming, removal, palm care and storm cleanup for Bonita Springs homeowners and property managers.',areas:'Bonita Springs and nearby communities'},
  estero:{name:'Estero',intro:'Local, fully insured tree care for Estero properties, backed by owner involvement, honest recommendations and complete cleanup.',areas:'Estero and surrounding neighborhoods'},
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
