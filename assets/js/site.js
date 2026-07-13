
const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.main-nav');if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();const form=document.getElementById('estimate-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('CBX Website Estimate Request - '+(d.get('name')||'New Lead'));const body=encodeURIComponent(`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Service address: ${d.get('address')}
Service needed: ${d.get('service')}

Project details:
${d.get('details')}`);window.location.href=`mailto:haley@cbxtreeservice.com?subject=${subject}&body=${body}`;});
