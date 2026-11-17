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

// certificate lightbox: .certlink opens the ISO certificate, [data-cert] opens its own image
const ISO_SRC = 'assets/iso-9001.jpg';
const ISO_CAP = 'QSI ISO 9001:2000 — Quality Management System certificate, Gandaki Overseas Concern (P) Ltd.';
const certLinks = document.querySelectorAll('.certlink, [data-cert]');
if (certLinks.length) {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<div class="box"><button class="x" aria-label="Close">✕</button>' +
    '<img src="" alt=""><div class="cap"></div></div>';
  document.body.appendChild(lb);
  const img = lb.querySelector('img');
  const cap = lb.querySelector('.cap');
  const open = el => {
    img.src = el.dataset.cert || ISO_SRC;
    cap.textContent = el.dataset.cap || ISO_CAP;
    img.alt = cap.textContent;
    lb.classList.add('show');
  };
  const close = () => lb.classList.remove('show');
  certLinks.forEach(el => {
    el.addEventListener('click', () => open(el));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el); } });
  });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  lb.querySelector('.x').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
