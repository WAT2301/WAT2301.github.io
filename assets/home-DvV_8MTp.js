import{i as p,a as h}from"./loadingFx-DyZ0Lih6.js";document.querySelector("#app").innerHTML=`
  <main class="dashboard-shell reveal-up">
    <aside class="left-rail">
      <div class="logo">WAT2301 | PROFILE</div>
      <p class="rail-time" id="live-time">11:23</p>
      <nav class="rail-menu">
        <a class="is-active" href="/index.html">Overview</a>
        <a href="/projects.html">Projects</a>
        <a href="/contact.html">Contact</a>
        <a href="/projects.html#lab">Experiments</a>
      </nav>
      <div class="rail-card">
        <p>Trading Method</p>
        <strong>ICT x Alchemist</strong>
        <small>Process-driven execution on NQ and ES.</small>
        <ul class="method-points">
          <li>Market structure and liquidity mapping</li>
          <li>Session timing with strict invalidation</li>
          <li>Risk-first, outcome-neutral discipline</li>
        </ul>
      </div>
      <ul class="rail-list">
        <li>Process over results</li>
        <li>Risk-discipline oriented</li>
        <li>Year-1 medical student at PNT</li>
      </ul>
    </aside>

    <section class="board">
      <header class="board-top">
        <nav class="tabs board-nav" aria-label="Profile sections">
          <a href="#profile" class="active" data-view="profile">Profile</a>
          <a href="#method" data-view="method">Method</a>
          <a href="#contact" data-view="contact">Contact</a>
        </nav>
        <div class="search" id="view-status">Personal profile overview</div>
      </header>

      <section class="hero-panel">
        <div class="hero-copy">
          <p class="kicker">WAT2301 PERSONAL PROFILE</p>
          <h1>Method and Identity</h1>
          <p id="hero-description">
            I use ICT and Alchemist frameworks for NQ and ES while maintaining a disciplined
            routine to balance trading and first-year medical studies.
          </p>
          <div class="metrics-row">
            <article>
              <span>Core Method</span>
              <strong>ICT x Alchemist</strong>
            </article>
            <article>
              <span>Primary Markets</span>
              <strong>NQ, ES</strong>
            </article>
            <article>
              <span>Current Role</span>
              <strong>Year-1 Medical Student</strong>
            </article>
          </div>
        </div>
        <div class="chart-panel profile-panel" aria-label="profile summary">
          <h3>Personal Notes</h3>
          <ul>
            <li>Focus on process over visible results.</li>
            <li>Build consistency through routine.</li>
            <li>Keep study and trading in balance.</li>
          </ul>
        </div>
      </section>

      <section class="widget-grid profile-cards">
        <article class="widget ring widget--feature" data-widget="focus">
          <h3>Method</h3>
          <div class="ring-meter"><span>ICT</span></div>
          <p>Main framework for context, liquidity, and timing.</p>
        </article>

        <article class="widget bars" data-widget="traffic">
          <h3>Preferred Markets</h3>
          <div class="bar-row"><b>NQ (Nasdaq Futures)</b><i style="--w: 65%"></i></div>
          <div class="bar-row"><b>ES (S&P Futures)</b><i style="--w: 55%"></i></div>
          <div class="bar-row"><b>Risk discipline</b><i style="--w: 75%"></i></div>
        </article>

        <article class="widget table" data-widget="bio">
          <h3>Personal Info</h3>
          <p><span>Current role</span><strong>Student</strong></p>
          <p><span>University</span><strong>PNT University</strong></p>
          <p><span>Direction</span><strong>Long-term consistency</strong></p>
        </article>

        <article class="widget contact widget--about" data-widget="contact">
          <h3>About Me</h3>
          <p>Prop trader focused on NQ and ES.</p>
          <p>Methods: ICT + Alchemist.</p>
          <p>Year-1 medical student at Pham Ngoc Thach University.</p>
          <p>Email: watuwu2301@gmail.com</p>
          <button type="button">View profile</button>
        </article>
      </section>
    </section>
  </main>
`;const a=document.querySelector(".board"),c=Array.from(document.querySelectorAll(".board-nav a")),u=document.querySelector("#view-status"),l=Array.from(document.querySelectorAll(".widget")),m=document.querySelector("#live-time"),v=document.querySelector("#hero-description"),n={profile:"Personal profile overview",method:"Method focus: ICT + Alchemist",contact:"Direct contact information"},f={profile:"This page presents identity and approach without performance display.",method:"The method combines ICT and Alchemist concepts with strict risk discipline.",contact:"Use the Contact page for direct connection via email, Discord, or Facebook."};function o(e){const t=n[e]?e:"profile";u.textContent=n[t],v.textContent=f[t],c.forEach(i=>{const s=i.dataset.view===t;i.classList.toggle("active",s),i.setAttribute("aria-current",s?"page":"false")})}function d(){const e=new Date;m.textContent=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}c.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=e.dataset.view||"profile";history.replaceState(null,"",`#${i}`),o(i)})});window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","")||"profile";o(e)});function r(e){l.forEach(t=>{const i=t===e;t.classList.toggle("active",i),t.setAttribute("aria-pressed",String(i))})}l.forEach((e,t)=>{e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-pressed","false"),e.addEventListener("click",()=>r(e)),e.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),r(e))}),t===0&&r(e)});a.addEventListener("pointermove",e=>{const t=a.getBoundingClientRect(),i=(e.clientX-t.left)/t.width-.5,s=(e.clientY-t.top)/t.height-.5;a.style.setProperty("--mx",`${i*20}px`),a.style.setProperty("--my",`${s*14}px`),a.classList.add("is-interacting")});a.addEventListener("pointerleave",()=>{a.style.setProperty("--mx","0px"),a.style.setProperty("--my","0px"),a.classList.remove("is-interacting")});const g=window.location.hash.replace("#","")||"profile";o(g);d();setInterval(d,1e3);p();h();
