// Simple nav toggle and basic form UX
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Fake phone CTA - replace with real phone link if desired
  const phoneBtn = document.getElementById('phone-cta');
  if(phoneBtn){
    phoneBtn.addEventListener('click', () => {
      window.location.href = 'tel:+15551234567'; // replace with real number
    });
  }

  // Simple form confirmation (works with Formspree or any server)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // allow normal submission to server; show a quick JS notice for UX
      const submit = form.querySelector('button[type="submit"]');
      if(submit){
        submit.textContent = 'Sending…';
        submit.disabled = true;
      }
      // After network response the page will redirect or show a message depending on your form backend.
      // No preventDefault here to keep workflow simple for static hosting with Formspree or similar.
    });
  }
});
