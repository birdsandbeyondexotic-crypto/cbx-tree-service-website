import React, {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Star} from 'lucide-react';
import {reviews} from '../content';

export default function ReviewCarousel(){
  const [index,setIndex]=useState(0);
  useEffect(()=>{
    const timer=setInterval(()=>setIndex((value)=>(value+1)%reviews.length),7000);
    return ()=>clearInterval(timer);
  },[]);
  const review=reviews[index];
  const move=(direction)=>setIndex((index+direction+reviews.length)%reviews.length);
  return <div className="reviewCarousel" aria-live="polite">
    <button type="button" onClick={()=>move(-1)} aria-label="Previous review"><ChevronLeft/></button>
    <article>
      <div className="reviewStars" aria-label={`${review.stars} out of 5 stars`}>{Array.from({length:review.stars}).map((_,i)=><Star key={i} fill="currentColor"/>)}</div>
      <blockquote>“{review.text}”</blockquote>
      <strong>{review.name}</strong><span>Google Review</span>
      <div className="reviewDots">{reviews.map((_,i)=><button key={i} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Show review ${i+1}`}/>)}</div>
    </article>
    <button type="button" onClick={()=>move(1)} aria-label="Next review"><ChevronRight/></button>
  </div>
}
