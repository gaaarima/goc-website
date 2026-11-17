// scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// close mobile nav on link click
document.querySelectorAll('#nl a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('nl').classList.remove('open')));

// floating email button (bottom right, all pages)
const fab = document.createElement('a');
fab.className = 'fab';
fab.href = 'mailto:goc@ntc.net.np?subject=' + encodeURIComponent('Workforce Enquiry — via gocnepal.com');
fab.title = 'Email Gandaki Overseas Concern';
fab.innerHTML = '<span class="ic">✉</span><span class="t">Email Us</span>';
document.body.appendChild(fab);

// ISO certificate lightbox
const certLinks = document.querySelectorAll('.certlink');
if (certLinks.length) {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<div class="box"><button class="x" aria-label="Close">✕</button>' +
    '<img src="assets/iso-9001.jpg" alt="QSI ISO 9001:2000 certificate issued to Gandaki Overseas Concern (P) Ltd.">' +
    '<div class="cap">QSI ISO 9001:2000 — Quality Management System certificate, Gandaki Overseas Concern (P) Ltd.</div></div>';
  document.body.appendChild(lb);
  const open = () => lb.classList.add('show');
  const close = () => lb.classList.remove('show');
  certLinks.forEach(el => {
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lb.querySelector('.x').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
