import React, {useState} from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
  ['Are estimates free?','Yes. CBX provides free on-site estimates so the owner can evaluate the tree, access, surrounding structures and cleanup needs before recommending a scope of work.'],
  ['Is CBX Tree Service insured?','Yes. CBX is licensed and fully insured. We approach every project with safety, property protection and professional cleanup in mind.'],
  ['Do you haul away the debris?','Yes, debris removal and complete cleanup can be included in your quote. If you prefer material to remain on-site, let us know during the estimate.'],
  ['Do you offer emergency tree service?','Yes. Call (239) 238-0783 for storm damage, fallen limbs or an urgent tree hazard. Availability depends on current conditions and crew safety.'],
  ['What areas do you serve?','CBX is based in Naples and serves communities from Bonita Springs south to Marco Island, including Estero, North Naples, Golden Gate, Ave Maria and nearby neighborhoods.'],
  ['Can I send photos with my estimate request?','Yes. The Jobber request form lets you provide project details and photos, helping our team understand your needs before following up.'],
];

export default function FAQ(){
  const [open,setOpen]=useState(0);
  return <div className="faqList">{questions.map(([q,a],i)=><article className={open===i?'faqItem open':'faqItem'} key={q}>
    <button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown/></button>
    <div className="faqAnswer"><p>{a}</p></div>
  </article>)}</div>
}
