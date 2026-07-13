const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const form = document.getElementById('estimateForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Free estimate request from ${data.get('name') || 'website visitor'}`);
  const body = encodeURIComponent([
    `Name: ${data.get('name') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Property location: ${data.get('location') || ''}`,
    `Service: ${data.get('service') || ''}`,
    '',
    `${data.get('message') || ''}`
  ].join('\n'));
  window.location.href = `mailto:haley@cbxtreeservice.com?subject=${subject}&body=${body}`;
});
