import './styles.css';
import portraitUrl from './assets/lawyer-placeholder.jpg';
import { contact, services, trustPoints, workSteps } from './content';
import { icon } from './icons';

const serviceCards = services
  .map(
    (service) => `
      <article class="service-card">
        <div class="service-card__icon">${icon(service.icon)}</div>
        <div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      </article>`,
  )
  .join('');

const trustCards = trustPoints
  .map(
    ([title, description], index) => `
      <article class="trust-card">
        <span class="trust-card__number">0${index + 1}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </article>`,
  )
  .join('');

const stepCards = workSteps
  .map(
    ([number, title, description]) => `
      <article class="step-card">
        <span>${number}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </article>`,
  )
  .join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <a class="header__name" href="#top" aria-label="На главную">${contact.shortName}</a>
    <nav class="header__nav" aria-label="Основная навигация">
      <a href="#services">Услуги</a>
      <a href="#about">Обо мне</a>
      <a href="#process">Как работаю</a>
    </nav>
    <a class="header__phone" href="tel:${contact.phoneLink}">${contact.phoneDisplay}</a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__content">
        <div>
          <p class="eyebrow">Юридическая помощь</p>
          <h1 id="hero-title">Юрист по<br />гражданским делам</h1>
          <p class="hero__city">${contact.city}</p>
          <p class="hero__lead">Помогаю защитить ваши права и интересы в спорах, найти законное решение и добиться результата.</p>
          <a class="button button--primary" href="#contact">
            Разобрать ситуацию
            ${icon('arrow')}
          </a>
        </div>
        <div class="hero__benefits">
          <article>${icon('shield')}<div><strong>Конфиденциально</strong><span>Ваши данные под защитой</span></div></article>
          <article>${icon('message')}<div><strong>Понятные решения</strong><span>Объясняю право человеческим языком</span></div></article>
          <article>${icon('check')}<div><strong>Ориентирован на результат</strong><span>Работаю на ваш конкретный итог</span></div></article>
        </div>
      </div>

      <div class="hero__visual">
        <img src="${portraitUrl}" alt="${contact.fullName}, юрист" />
        <div class="hero__badges" aria-label="Ключевая информация">
          <article>${icon('map')}<span>${contact.city}</span></article>
          <article>${icon('scales')}<span>Гражданские<br />споры</span></article>
          <article>${icon('lock')}<span>Конфиденциальная<br />консультация</span></article>
        </div>
      </div>
    </section>

    <section class="services" id="services" aria-labelledby="services-title">
      <h2 class="visually-hidden" id="services-title">Направления юридической помощи</h2>
      <div class="services__grid">${serviceCards}</div>
    </section>

    <section class="trust" id="about" aria-labelledby="trust-title">
      <div class="trust__intro">
        <p class="eyebrow">Принципы работы</p>
        <h2 id="trust-title">Спокойно.<br />Последовательно.<br />В ваших интересах.</h2>
        <p>Моя задача — снять правовую неопределённость и дать вам ясное понимание следующего шага.</p>
        <a class="text-link" href="#contact">Обсудить вашу ситуацию ${icon('arrow')}</a>
      </div>
      <div class="trust__cards">${trustCards}</div>
    </section>

    <section class="process" id="process" aria-labelledby="process-title">
      <div class="section-heading section-heading--row">
        <div>
          <p class="eyebrow">Как проходит работа</p>
          <h2 id="process-title">От первого разговора<br />до решения вопроса</h2>
        </div>
        <p>Вы понимаете, что происходит, какие действия предпринимаются и какого результата можно ожидать.</p>
      </div>
      <div class="process__grid">${stepCards}</div>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow eyebrow--light">Первая консультация</p>
        <h2 id="contact-title">Разберём вашу ситуацию</h2>
        <p>Позвоните или напишите. Я уточню обстоятельства и предложу возможный порядок действий.</p>
      </div>
      <div class="contact__actions">
        <a class="button button--light" href="tel:${contact.phoneLink}">${contact.phoneDisplay}</a>
        <a href="mailto:${contact.email}">${contact.email}</a>
        <a href="${contact.telegram}" target="_blank" rel="noreferrer">Написать в Telegram</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div><strong>${contact.fullName}</strong><span>Юридическая помощь</span></div>
    <p>Информация на сайте не является публичной офертой.</p>
    <a href="#top">Наверх ↑</a>
  </footer>
`;

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
