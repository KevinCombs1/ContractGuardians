document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Phone CTA
  const phoneBtn = document.getElementById('phone-cta');
  phoneBtn && phoneBtn.addEventListener('click', () => {
    window.location.href = 'tel:+15551234567';
  });

  // Form submit feedback
  const form = document.getElementById('contact-form');
  form && form.addEventListener('submit', function(){
    const submit = form.querySelector('button[type="submit"]');
    submit && (submit.textContent = 'Sending…', submit.disabled = true);
  });

  // Fade-in on scroll + stagger
  const faders = document.querySelectorAll('.fade-init');
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach((entry, idx) => {
      if(entry.isIntersecting){
        setTimeout(()=>entry.target.classList.add('fade-in'), idx*150);
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Hero parallax
  const heroImg = document.querySelector('.hero img');
  window.addEventListener('scroll', function(){
    if(heroImg){
      const offset = window.pageYOffset;
      heroImg.style.transform = `translateY(${offset * 0.3}px)`;
    }
  });
});
