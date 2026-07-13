import React, {useEffect} from 'react';

export default function JobberForm(){
  useEffect(()=>{
    const id='jobber-embed-script';
    if(!document.getElementById(id)){
      const link=document.createElement('link'); link.rel='stylesheet'; link.href='https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'; document.head.appendChild(link);
      const s=document.createElement('script'); s.id=id; s.src='https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'; s.setAttribute('clienthub_id','9aa7b0e1-ca52-43c5-baff-a3a668c95dec-4979134'); s.setAttribute('form_url','https://clienthub.getjobber.com/client_hubs/9aa7b0e1-ca52-43c5-baff-a3a668c95dec/public/work_request/embedded_work_request_form?form_id=4979134'); document.body.appendChild(s);
    }
  },[]);
  return <div className="jobberWrap"><div id="9aa7b0e1-ca52-43c5-baff-a3a668c95dec-4979134"></div></div>
}
