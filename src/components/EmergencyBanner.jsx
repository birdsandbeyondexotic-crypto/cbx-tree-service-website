import React, {useState} from 'react';
import { AlertTriangle, Phone, X } from 'lucide-react';

export default function EmergencyBanner(){
  const [visible,setVisible]=useState(true);
  if(!visible) return null;
  return <aside className="emergencyBanner" aria-label="Emergency tree service">
    <div><AlertTriangle size={18}/><strong>Storm damage or an urgent tree hazard?</strong><span>Fast local response is available.</span></div>
    <a href="tel:+12392380783"><Phone size={16}/> Call Emergency Line</a>
    <button onClick={()=>setVisible(false)} aria-label="Dismiss emergency banner"><X size={17}/></button>
  </aside>
}
