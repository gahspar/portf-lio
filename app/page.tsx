import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ChartColumn, CodeXml, MessageCircleIcon, Workflow } from "lucide-react";

const whatsappUrl = "https://wa.me/5547988128912?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const projects = [
  {
    number: "01",
    title: "Blausen Lavanderia",
    category: "Site institucional",
    description: "Experiência comercial para uma rede de lavanderias de autoatendimento, com navegação rápida e foco em conversão.",
    image: "/projects/blausen.png",
    url: "https://blausen-lavanderia.vercel.app/",
  },
  {
    number: "02",
    title: "Lavanderia Tapajós",
    category: "Experiência digital",
    description: "Um site leve e acolhedor que simplifica o primeiro contato, apresenta o espaço e conduz o cliente até o atendimento.",
    image: "/projects/tapajos.png",
    url: "https://lavanderia-tapajos.vercel.app/",
  },
  {
    number: "03",
    title: "Lavanderia Familiar",
    category: "Site de serviços",
    description: "Tradição local traduzida em uma presença contemporânea, organizada para destacar serviços, unidades e orçamento.",
    image: "/projects/familiar.png",
    url: "https://lavanderia-familiar.vercel.app/",
  },
  {
    number: "04",
    title: "Gonçalves & Duwe",
    category: "Posicionamento premium",
    description: "Uma experiência sofisticada para lavanderia profissional, equilibrando confiança, tradição e abordagem comercial.",
    image: "/projects/goncalves-duwe.png",
    url: "https://site-lavanderia-tau.vercel.app/",
  },
  {
    number: "05",
    title: "Mecânica Boing",
    category: "Site automotivo",
    description: "Presença digital de alto impacto para uma oficina especializada, com foco em autoridade técnica, serviços e agendamento de avaliações.",
    image: "/projects/mecanica-boing.png",
    url: "https://mecanica-boing.vercel.app/",
  },
];

function ProjectSlide({ project, duplicate = false }: { project: (typeof projects)[number]; duplicate?: boolean }) {
  return (
    <article className="carousel-card" aria-hidden={duplicate || undefined}>
      <a className="carousel-visual" href={project.url} target="_blank" rel="noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={`Abrir ${project.title}`}>
        <Image src={project.image} alt={duplicate ? "" : `Página inicial do projeto ${project.title}`} fill sizes="(max-width: 720px) 82vw, 760px" priority={!duplicate && project.number === "01"} />
        <span>{project.number}</span>
      </a>
      <div className="carousel-copy">
        <div>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <a href={project.url} target="_blank" rel="noreferrer" tabIndex={duplicate ? -1 : undefined}>
          Acessar <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function BrandLockup() {
  return (
    <span className="brand-lockup" aria-label="PM Developer Systems">
      <strong>PM</strong>
      <span>PM Developer<small>Systems</small></span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#inicio"><BrandLockup /></a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#solucoes">Soluções</a>
          <a href="#empresa">Empresa</a>
        </nav>
        <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          Falar no WhatsApp <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">Tecnologia · Estratégia · Resultados</span>
          <h1>Soluções digitais que fazem o negócio <em>avançar.</em></h1>
          <p>Sites, sistemas e automações desenvolvidos para organizar processos, aumentar produtividade e criar novas oportunidades.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projetos">Conhecer projetos <ArrowDownRight aria-hidden="true" /></a>
            <a className="contact-action" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircleIcon aria-hidden="true" /> Solicitar orçamento
            </a>
          </div>
        </div>
        <div className="hero-strip">
          <span>PM Developer Systems</span>
          <span>Processos</span>
          <span>Produtos</span>
          <span>Performance</span>
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="section-intro">
          <span>Portfólio em movimento</span>
          <h2>Projetos que já estão no mundo.</h2>
          <p>Interfaces profissionais construídas para marcas reais. Passe o cursor pelos cards para acessar cada projeto.</p>
        </div>
        <div className="carousel" role="region" aria-label="Projetos em destaque">
          <div className="carousel-track">
            <div className="carousel-group">{projects.map((project) => <ProjectSlide key={project.title} project={project} />)}</div>
            <div className="carousel-group" aria-hidden="true">{projects.map((project) => <ProjectSlide key={`copy-${project.title}`} project={project} duplicate />)}</div>
          </div>
        </div>
      </section>

      <section className="solutions" id="solucoes">
        <div className="solutions-heading">
          <span>O que fazemos</span>
          <h2>Da presença digital à operação completa.</h2>
        </div>
        <div className="solutions-grid">
          <article><CodeXml aria-hidden="true" /><span>01</span><h3>Sites profissionais</h3><p>Presença digital com design, velocidade e estrutura para gerar confiança.</p></article>
          <article><ChartColumn aria-hidden="true" /><span>02</span><h3>Sistemas sob medida</h3><p>Plataformas e produtos construídos em torno do processo real da empresa.</p></article>
          <article><Workflow aria-hidden="true" /><span>03</span><h3>Automações e integrações</h3><p>Menos trabalho manual, mais controle e produtividade para o time.</p></article>
        </div>
      </section>

      <section className="company" id="empresa">
        <div className="company-mark" aria-hidden="true">PM</div>
        <div className="company-copy">
          <span>PM Developer Systems</span>
          <h2>Estratégia, design e desenvolvimento no mesmo time.</h2>
          <p>Transformamos ideias e processos em soluções digitais claras, escaláveis e preparadas para crescer junto com o negócio.</p>
        </div>
      </section>

      <footer>
        <div className="footer-top"><BrandLockup /><span>Projetos digitais · Sistemas · Automações</span></div>
        <a className="footer-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a PM Developer Systems pelo WhatsApp">
          <p>Vamos transformar sua ideia em solução?</p><ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-bottom"><span>PM Developer Systems</span><a href="#inicio">Voltar ao topo <ArrowUpRight aria-hidden="true" /></a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
