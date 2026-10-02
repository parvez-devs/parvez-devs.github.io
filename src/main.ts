type Service = { icon: string; title: string; description: string; bestFor: string; reward: string };
type Project = { kind: "ludo" | "telegram"; status: string; title: string; description: string; tags: string[]; href?: string };
type Contact = { label: string; href: string };

const services: Service[] = [
  {
    icon: "🛠️",
    title: "Fix the Website",
    description: "Mobile responsiveness issues, broken layouts, UI cleanup, HTML/CSS/JavaScript bugs and frontend improvements.",
    bestFor: "Existing sites",
    reward: "UI Upgrade"
  },
  {
    icon: "🌾",
    title: "Build the Landing Page",
    description: "A responsive, visually polished page with stronger hierarchy, clear calls to action and a better mobile experience.",
    bestFor: "Businesses",
    reward: "New Build"
  },
  {
    icon: "🤖",
    title: "Automate the Workflow",
    description: "Telegram notifications, action buttons, webhooks and website-to-bot workflows that reduce repetitive manual work.",
    bestFor: "Operations",
    reward: "Automation"
  }
];

const projects: Project[] = [
  {
    kind: "ludo",
    status: "IN DEVELOPMENT · UI PREVIEW",
    title: "PlayLuduHub",
    description: "An HTML5 Ludo platform exploring premium game UI, player flow, admin workflows, matchmaking concepts and Supabase-backed application architecture.",
    tags: ["HTML5", "JavaScript", "Vite", "Supabase"],
    href: "https://github.com/parvez-devs/playluduhub"
  },
  {
    kind: "telegram",
    status: "PROTOTYPE · UI PREVIEW",
    title: "Telegram Bot Automation",
    description: "A workflow concept for receiving website events in Telegram, presenting admin actions, and sending the decision back into the application.",
    tags: ["Telegram Bot API", "Node.js", "Webhooks", "Supabase"]
  }
];

const contacts: Contact[] = [
  { label: "WhatsApp", href: "https://wa.me/8801936700142?text=Hi%20Parvez%2C%20I%20found%20you%20through%20xionhub.me%20and%20want%20to%20discuss%20a%20project." },
  { label: "Telegram", href: "https://t.me/Px0x0o" },
  { label: "Instagram", href: "https://www.instagram.com/xerox_hub/" },
  { label: "Email", href: "mailto:admin@xionhub.me?subject=Project%20Inquiry%20from%20xionhub.me" },
  { label: "GitHub", href: "https://github.com/parvez-devs" }
];

const serviceHtml = services.map((service) => `
  <article class="quest reveal cinematic-card">
    <div class="quest-icon">${service.icon}</div>
    <h3>${service.title}</h3>
    <p>${service.description}</p>
    <div class="quest-foot">
      <span>Best for ${service.bestFor}</span>
      <span class="reward">${service.reward}</span>
    </div>
  </article>
`).join("");

const projectVisual = (project) => project.kind === "ludo"
  ? `
    <div class="scene">
      <div class="field" data-parallax="0.05"></div>
      <div class="barn" data-parallax="-0.04"></div>
      <div class="ludo" data-parallax="0.08">
        <div class="q1"></div><div class="q2"></div><div class="q3"></div><div class="q4"></div>
      </div>
      <div class="scene-card" data-parallax="-0.05">
        <small>GAME BUILD</small>
        <h4>PlayLuduHub</h4>
        <p>Mobile-first Ludo product with game UI, matchmaking concepts and backend planning.</p>
      </div>
    </div>
  `
  : `
    <div class="scene">
      <div class="field" data-parallax="0.04"></div>
      <div class="telegram" data-parallax="0.06">
        <div class="telegram-head">Telegram Approval Workflow</div>
        <div class="telegram-msg">
          <strong>New website event</strong><br>
          Website → Telegram notification → Admin action → App update
        </div>
        <div class="telegram-actions">
          <div class="tg-action approve">Approve</div>
          <div class="tg-action reject">Reject</div>
        </div>
      </div>
    </div>
  `;

const projectHtml = projects.map((project) => `
  <article class="project reveal cinematic-card">
    ${projectVisual(project)}
    <div class="project-body">
      <span class="status">${project.status}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      ${project.href ? `<a class="project-link" href="${project.href}" target="_blank" rel="noreferrer">View repository ↗</a>` : ""}
    </div>
  </article>
`).join("");

const contactHtml = contacts.map((contact) =>
  `<a href="${contact.href}" ${contact.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${contact.label}</a>`
).join("");

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

app.innerHTML = `
  <div class="loader" id="loader" aria-hidden="true">
    <div class="loader-card">
      <div class="loader-logo">P</div>
      <div class="loader-title">Parvez Devs</div>
      <div class="loader-sub">Loading portfolio world</div>
      <div class="loader-track"><span></span></div>
    </div>
  </div>

  <div class="progress" id="progress"></div>
  <div class="cinematic-line" id="cinematicLine"></div>

  <div class="sky-decor">
    <div class="sun" data-parallax="-0.05"></div>
    <div class="cloud c1" data-parallax="0.05"></div>
    <div class="cloud c2" data-parallax="0.08"></div>
    <div class="cloud c3" data-parallax="-0.04"></div>
  </div>

  <div class="nav-wrap" id="navWrap">
    <nav class="nav">
      <a class="brand" href="#top">
        <span class="brand-mark">P</span>
        <div>Parvez <span>Devs</span></div>
      </a>
      <div class="nav-links">
        <a href="#quests" data-nav="quests">Services</a>
        <a href="#builds" data-nav="builds">Projects</a>
        <a href="#about" data-nav="about">About</a>
        <a class="hire" href="${contacts[0].href}" target="_blank" rel="noreferrer">Hire Me</a>
      </div>
    </nav>
  </div>

  <main id="top">
    <section class="hero" data-section="top">
      <div class="container hero-grid">
        <div class="panel hero-copy reveal" data-stagger>
          <div class="ribbon"><span class="ribbon-dot"></span> Available for project quests</div>
          <h1>I build digital products with a <span class="hero-emphasis">game-world level of polish.</span></h1>
          <p class="lead">
            I’m Muhammad Parvez, a web developer focused on responsive interfaces, frontend fixes,
            Telegram automation and Supabase-powered web apps. The visual identity stays playful,
            while the build quality stays professional.
          </p>
          <div class="hero-tags">
            <span class="hero-tag">Responsive Web UI</span>
            <span class="hero-tag">JavaScript / TypeScript</span>
            <span class="hero-tag">Supabase</span>
            <span class="hero-tag">Telegram Bot API</span>
          </div>
          <div class="hero-actions">
            <a class="btn btn-gold" href="${contacts[0].href}" target="_blank" rel="noreferrer">Start a Project ↗</a>
            <a class="btn btn-green" href="#builds">Explore Builds</a>
          </div>
        </div>

        <aside class="gameboard reveal cinematic-tilt">
          <div class="board-head">
            <span>Developer Board</span>
            <span class="xp">XP <span class="xpbar"><span></span></span></span>
          </div>
          <div class="board-grid">
            <div class="tile"><div class="tile-icon">⚒️</div><b>Frontend</b><span>Responsive layouts, UI polish and debugging.</span></div>
            <div class="tile"><div class="tile-icon">🌱</div><b>Build</b><span>Landing pages and focused web experiences.</span></div>
            <div class="tile"><div class="tile-icon">📨</div><b>Automation</b><span>Telegram workflows, actions and notifications.</span></div>
            <div class="tile"><div class="tile-icon">🧭</div><b>Integration</b><span>Supabase, APIs, GitHub and deployment flows.</span></div>
          </div>
          <div class="profile-slot">
            <img src="https://avatars.githubusercontent.com/u/327871675?v=4" alt="Muhammad Parvez">
            <div>
              <strong>Muhammad Parvez</strong>
              <small>@parvez-devs · Web Developer</small>
              <span class="online"><i></i> Open for project inquiries</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <div class="map-strip">
      <div class="container">
        <div class="map reveal">
          <div class="map-label">Current loadout</div>
          <div class="map-items">
            <span><i></i> HTML5</span><span><i></i> CSS3</span><span><i></i> TypeScript</span>
            <span><i></i> Vite</span><span><i></i> Node.js</span><span><i></i> Supabase</span>
            <span><i></i> Telegram Bot API</span><span><i></i> GitHub</span><span><i></i> Railway</span>
          </div>
        </div>
      </div>
    </div>

    <section id="quests" data-section="quests">
      <div class="container">
        <div class="section-head reveal">
          <div class="wood-label">Quest Board / Services</div>
          <p>Same farming-game identity, but with cinematic movement and a clearer client-facing flow.</p>
        </div>
        <div class="quest-grid">${serviceHtml}</div>
      </div>
    </section>

    <section id="builds" data-section="builds">
      <div class="container">
        <div class="section-head reveal">
          <div class="wood-label">World Map / Active Builds</div>
          <p>Projects behave like animated locations on a game map while keeping their real development status visible.</p>
        </div>
        <div class="project-grid">${projectHtml}</div>
      </div>
    </section>

    <section id="about" data-section="about">
      <div class="container info-grid">
        <article class="card reveal cinematic-card">
          <div class="wood-label">Inventory / Skills</div>
          <h2>Fun visual identity. Serious delivery.</h2>
          <p>
            The game-board style stays because it makes the portfolio memorable. TypeScript now controls the content,
            motion and interactions so the project is easier to maintain and expand.
          </p>
          <div class="inventory">
            <span class="item">Responsive Design</span><span class="item">Frontend Debugging</span>
            <span class="item">Mobile-first UI</span><span class="item">Automation</span>
            <span class="item">Supabase Integration</span><span class="item">TypeScript</span>
          </div>
        </article>

        <article class="card reveal cinematic-card">
          <div class="wood-label">Level Path / Workflow</div>
          <div class="steps">
            <div class="step"><div class="num">01</div><div><h4>Understand the objective</h4><p>Define what needs to be built or fixed and what result matters.</p></div></div>
            <div class="step"><div class="num">02</div><div><h4>Build the right system</h4><p>Create the interface, logic, integration or automation needed for the job.</p></div></div>
            <div class="step"><div class="num">03</div><div><h4>Test the player journey</h4><p>Check important flows, mobile behavior and failure points.</p></div></div>
            <div class="step"><div class="num">04</div><div><h4>Ship cleanly</h4><p>Keep the project understandable so future changes remain manageable.</p></div></div>
          </div>
        </article>
      </div>

      <div class="container">
        <div class="contact reveal cinematic-card">
          <h2>Ready to start a new quest?</h2>
          <p>Send your website, problem or project idea. I’ll reply with the clearest next step.</p>
          <div class="contact-links">${contactHtml}</div>
          <div class="contact-meta">
            <span>WhatsApp: 01936700142</span><span>Telegram: @Px0x0o</span>
            <span>Instagram: @xerox_hub</span><span>Email: admin@xionhub.me</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <span>© 2026 Parvez Devs. All rights reserved.</span>
      <span>xionhub.me · TypeScript portfolio · cinematic interactions</span>
    </div>
  </footer>

  <div class="mobile-bar">
    <div class="mobile-bar-inner">
      <a class="mobile-wa" href="${contacts[0].href}" target="_blank" rel="noreferrer">WhatsApp</a>
      <a class="mobile-tg" href="${contacts[1].href}" target="_blank" rel="noreferrer">Telegram</a>
    </div>
  </div>
`;

document.body.classList.add("is-loading");

const loader = document.querySelector("#loader");
window.setTimeout(() => {
  loader?.classList.add("done");
  document.body.classList.remove("is-loading");
}, 760);

const revealItems = document.querySelectorAll(".reveal,[data-stagger]");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("show"));
}

const progress = document.querySelector<HTMLElement>("#progress");
const cinematicLine = document.querySelector<HTMLElement>("#cinematicLine");
const navWrap = document.querySelector<HTMLElement>("#navWrap");
const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
let ticking = false;

const updateScene = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if (progress) progress.style.width = `${ratio * 100}%`;
  if (cinematicLine) cinematicLine.style.setProperty("--cinema", String(Math.min(1, ratio * 1.7)));
  navWrap?.classList.toggle("scrolled", window.scrollY > 18);

  parallaxItems.forEach((element) => {
    const speed = Number(element.getAttribute("data-parallax") || 0);
    const rect = element.getBoundingClientRect();
    const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
    element.style.translate = `0 ${centerOffset * speed}px`;
  });
  ticking = false;
};

const requestSceneUpdate = () => {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(updateScene);
  }
};

updateScene();
window.addEventListener("scroll", requestSceneUpdate, { passive: true });
window.addEventListener("resize", requestSceneUpdate, { passive: true });

const navLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));
const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("data-section");
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("data-nav") === id));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  sections.forEach((section) => navObserver.observe(section));
}

const finePointer = window.matchMedia("(pointer:fine)").matches;
if (finePointer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll<HTMLElement>(".cinematic-tilt,.project").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-py * 4}deg) rotateY(${px * 5}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  document.querySelectorAll<HTMLElement>(".cinematic-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}
