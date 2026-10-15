'use client';

import { FormEvent, useState } from 'react';

const config = {
  whatsapp: '', // Ex.: 5547999999999
  instagram: 'https://www.instagram.com/',
  courses: { gestantes: '', pega: '', trabalho: '' },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  function openWhatsApp(message: string) {
    const number = config.whatsapp.replace(/\D/g, '');
    if (!number) { setNotice('Configure o número de WhatsApp no arquivo src/app/page.tsx.'); return; }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openWhatsApp(`Olá! Meu nome é ${data.get('name')}. Telefone: ${data.get('phone')}. Momento: ${data.get('topic')}. Mensagem: ${data.get('message') || 'Gostaria de mais informações.'}`);
  }
  return <>
    <div className="announcement">Um cuidado de cada vez. Você não precisa passar por essa fase sozinha. ♡</div>
    <header className="site-header"><a className="brand" href="#inicio">♡ <span>Amor que Nutre<small>Consultoria em amamentação</small></span></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>☰</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#sobre">Sobre</a><a href="#servicos">Atendimentos</a><a href="#cursos">Cursos</a><a href="#contato">Contato</a></nav></header>
    <main>
      <section className="hero" id="inicio"><div><p className="eyebrow">Acolhimento, informação e confiança</p><h1>Amamentar com mais confiança, no <em>seu tempo.</em></h1><p>Orientação individualizada para você e seu bebê viverem a amamentação com mais tranquilidade e acolhimento sem julgamentos.</p><div className="actions"><button className="button" onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre a consultoria em amamentação.')}>♡ Quero conversar</button><a className="button button-outline" href="#servicos">Conheça os atendimentos ↓</a></div></div><div className="hero-art"><div className="sun"/><div className="leaf leaf-one"/><div className="leaf leaf-two"/><div className="hero-caption">Seu caminho é único.<small>Apoio que respeita a sua família.</small></div></div></section>
      <section className="section section-soft" id="servicos"><div className="section-heading"><p className="eyebrow">Como posso ajudar</p><h2>Você merece apoio em cada etapa.</h2></div><div className="cards"><article className="card"><h3>Pré-natal e preparação</h3><p>Expectativas, primeiros dias, pega e rede de apoio.</p></article><article className="card"><h3>Consultoria individual</h3><p>Acolhimento para dúvidas sobre pega, conforto e rotina.</p></article><article className="card"><h3>Retorno ao trabalho</h3><p>Planejamento de rotina e ordenha conforme orientação profissional.</p></article></div></section>
      <section className="section about" id="sobre"><p className="eyebrow">Prazer, sou sua consultora</p><h2>Conhecimento técnico com um olhar humano.</h2><p>Adicione aqui a biografia, formação, certificações e experiência reais da consultora.</p></section>
      <section className="section section-soft" id="cursos"><div className="section-heading"><p className="eyebrow">Aprenda no seu ritmo</p><h2>Cursos e conteúdos para sua jornada.</h2></div><div className="cards">{([{id:'gestantes',name:'Amamentação sem mistérios'},{id:'pega',name:'Pega, posição e conforto'},{id:'trabalho',name:'Amamentação e volta ao trabalho'}] as const).map(course => <article className="card" key={course.id}><h3>{course.name}</h3><p>Adicione descrição, preço e link oficial de inscrição.</p><button className="button" onClick={() => config.courses[course.id] ? window.open(config.courses[course.id], '_blank', 'noopener,noreferrer') : setNotice('Adicione o link de compra do curso em src/app/page.tsx.')}>Ver curso ↗</button></article>)}</div></section>
      <section className="section" id="contato"><div className="section-heading"><p className="eyebrow">Vamos conversar</p><h2>Seu próximo passo começa com uma conversa.</h2></div><form className="form-card" onSubmit={submitContact}><label>Seu nome<input name="name" required /></label><label>Telefone<input name="phone" type="tel" required /></label><label>Qual é o seu momento?<select name="topic"><option>Estou grávida e quero me preparar</option><option>Meu bebê já nasceu e tenho dúvidas</option><option>Quero saber sobre os cursos</option><option>Estou planejando voltar ao trabalho</option><option>Outro assunto</option></select></label><label>Mensagem<textarea name="message" /></label><button className="button" type="submit">Continuar pelo WhatsApp ↗</button>{notice && <p role="status">{notice}</p>}</form></section>
    </main><footer>© {new Date().getFullYear()} Amor que Nutre · Consultoria em amamentação</footer>
  </>;
}
