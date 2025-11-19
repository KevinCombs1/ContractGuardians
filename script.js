document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  // Mobile nav toggle
  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Phone CTA
  const phoneBtn = document.getElementById('phone-cta');
  if(phoneBtn){
    phoneBtn.addEventListener('click', () => {
      window.location.href = 'tel:+15551234567'; // replace with real number
    });
  }

  // Form submit feedback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(){
      const submit = form.querySelector('button[type="submit"]');
      if(submit){
        submit.textContent = 'Sending…';
        submit.disabled = true;
      }
    });
  }

  // Fade-in sections/cards on scroll
  const faders = document.querySelectorAll('.section, .card, .profile, .steps li');
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('fade-init');
    appearOnScroll.observe(fader);
  });
});
