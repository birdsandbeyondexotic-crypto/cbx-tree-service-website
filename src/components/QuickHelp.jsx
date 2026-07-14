import React, {useState} from 'react';
import {MessageCircle, X, Phone, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const answers={
  estimate:'Yes. CBX provides free on-site estimates. Share your contact information, property address, service needed and any helpful photos through our estimate form.',
  areas:'CBX is based in Naples and serves communities from Bonita Springs and Estero south through Naples and Marco Island, including many surrounding neighborhoods.',
  emergency:'For a fallen tree, storm damage or an immediate hazard, call (239) 238-0783. For any life-threatening danger or downed power line, contact emergency services or the utility provider first.',
  insurance:'CBX Tree Service is licensed and insured. We are happy to discuss project-specific requirements during your estimate.',
  cleanup:'Cleanup is a core part of the CBX standard. The agreed scope will explain whether debris is hauled away, relocated on-site or handled another way.',
};

export default function QuickHelp(){
  const [open,setOpen]=useState(false);
  const [answer,setAnswer]=useState('Choose a question below, or request a free estimate and Haley will follow up.');
  return <div className="quickHelp">
    {open&&<section className="quickHelpPanel" aria-label="CBX quick help">
      <header><div><strong>CBX Quick Help</strong><span>Common questions, answered fast.</span></div><button onClick={()=>setOpen(false)} aria-label="Close quick help"><X/></button></header>
      <div className="quickHelpAnswer">{answer}</div>
      <div className="quickHelpQuestions">
        <button onClick={()=>setAnswer(answers.estimate)}>Do you offer free estimates?</button>
        <button onClick={()=>setAnswer(answers.areas)}>What areas do you serve?</button>
        <button onClick={()=>setAnswer(answers.emergency)}>I have an emergency</button>
        <button onClick={()=>setAnswer(answers.insurance)}>Are you insured?</button>
        <button onClick={()=>setAnswer(answers.cleanup)}>Is cleanup included?</button>
      </div>
      <div className="quickHelpActions"><a href="tel:+12392380783"><Phone/> Call CBX</a><Link to="/estimate" onClick={()=>setOpen(false)}>Free Estimate <ArrowRight/></Link></div>
      <small>This automated website helper provides general information. Final scope and pricing are confirmed by the CBX team.</small>
    </section>}
    <button className="quickHelpToggle" onClick={()=>setOpen(!open)} aria-label="Open CBX quick help"><MessageCircle/> <span>Quick Help</span></button>
  </div>
}
