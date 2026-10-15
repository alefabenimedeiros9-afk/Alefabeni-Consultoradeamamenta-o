// Configure os links reais antes de publicar.
const SITE_CONFIG = {
  whatsapp: '', // Ex.: '5547999999999' (código do país + DDD + número, só dígitos)
  instagram: '', // Ex.: 'https://www.instagram.com/seuperfil/'
  email: '',
  courses: { gestantes: '', pega: '', trabalho: '' }
};

const menu = document.querySelector('#navLinks');
const toggle = document.querySelector('#menuToggle');
toggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.innerHTML = isOpen ? '× <span class="sr-only">Fechar menu</span>' : '☰ <span class="sr-only">Abrir menu</span>';
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

function whatsappUrl(message) {
  const number = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '';
}
document.querySelectorAll('[data-whatsapp]').forEach(link => link.addEventListener('click', event => {
  const url = whatsappUrl(link.dataset.whatsapp);
  if (url) { event.preventDefault(); window.open(url, '_blank', 'noopener,noreferrer'); }
}));
document.querySelectorAll('.course-link').forEach(link => link.addEventListener('click', event => {
  const url = SITE_CONFIG.courses[link.dataset.course];
  if (url) { event.preventDefault(); window.open(url, '_blank', 'noopener,noreferrer'); }
}));
const instagram = document.querySelector('[data-instagram]');
if (SITE_CONFIG.instagram && instagram) instagram.href = SITE_CONFIG.instagram;
const email = document.querySelector('[data-email]');
if (SITE_CONFIG.email && email) email.href = `mailto:${SITE_CONFIG.email}`;

document.querySelector('#contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Olá! Meu nome é ${form.get('name')} e meu telefone é ${form.get('phone')}. Meu momento: ${form.get('topic')}. Mensagem: ${form.get('message') || 'Gostaria de mais informações.'}`;
  const url = whatsappUrl(message);
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
  else alert('Configure o número oficial do WhatsApp em js/main.js antes de usar o formulário.');
});
