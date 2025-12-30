// Minimal script for theme, year, and smooth scroll
(function(){
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('current-year');
  const emailLink = document.getElementById('email-link');

  // Set year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Restore theme
  const stored = localStorage.getItem('theme');
  if (stored === 'light') document.body.classList.add('light');

  // Toggle
  if (toggle) toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Set email if data-email attribute exists on body (optional)
  const body = document.body;
  const email = body.datasetEmail;
  if (email && emailLink) { emailLink.href = `mailto:${email}`; emailLink.textContent = email; }

})();
