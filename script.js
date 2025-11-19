document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  const phoneBtn = document.getElementById('phone-cta');
  if(phoneBtn){
    phoneBtn.addEventListener('click', () => {
      window.location.href = 'tel:+15551234567'; // replace with real number
    });
  }

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
});
