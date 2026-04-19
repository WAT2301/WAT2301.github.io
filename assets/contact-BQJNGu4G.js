import{i as o,a as s}from"./loadingFx-DyZ0Lih6.js";document.querySelector("#app").innerHTML=`
  <main class="dashboard-shell reveal-up">
    <aside class="left-rail">
      <div class="logo">WAT2301 | NQ ES</div>
      <p class="rail-time">CONTACT</p>
      <nav class="rail-menu">
        <a href="/index.html">Overview</a>
        <a href="/projects.html">Projects</a>
        <a class="is-active" href="/contact.html">Contact</a>
        <a href="/projects.html#lab">Experiments</a>
      </nav>
      <div class="rail-card">
        <p>Response Time</p>
        <strong>&lt; 24h</strong>
        <small>For collaboration requests</small>
      </div>
      <ul class="rail-list">
        <li>watuwu2301@gmail.com</li>
        <li>Discord: wat2301 (ID: 814331065707003924)</li>
        <li>facebook.com/wat.le.649946</li>
      </ul>
    </aside>

    <section class="board contact-board">
      <header class="board-top">
        <div class="tabs quick-tags">
          <button type="button" class="active">NQ</button>
          <button type="button">ES</button>
          <button type="button">Routine</button>
        </div>
        <div class="search" id="contact-status">Choose a topic for quick discussion</div>
      </header>

      <section class="contact-layout">
        <section class="contact-form contact-info" aria-label="Direct contact channels">
          <h2>Direct Contacts</h2>
          <button type="button" class="open-all-btn" id="open-all-contacts">Open all contacts</button>
          <div class="contact-links">
            <div class="contact-row">
              <a href="mailto:watuwu2301@gmail.com" data-link>
                <span class="contact-icon">MAIL</span>
                <span>watuwu2301@gmail.com</span>
              </a>
              <button type="button" class="copy-btn" data-copy="watuwu2301@gmail.com">Copy</button>
            </div>
            <div class="contact-row">
              <a
                href="https://discord.com/users/814331065707003924"
                target="_blank"
                rel="noreferrer"
                data-link
              >
                <span class="contact-icon">DISC</span>
                <span>Discord: wat2301</span>
              </a>
              <button type="button" class="copy-btn" data-copy="wat2301">Copy</button>
            </div>
            <div class="contact-row">
              <a href="https://www.facebook.com/wat.le.649946" target="_blank" rel="noreferrer" data-link>
                <span class="contact-icon">FACE</span>
                <span>facebook.com/wat.le.649946</span>
              </a>
              <button
                type="button"
                class="copy-btn"
                data-copy="https://www.facebook.com/wat.le.649946"
              >
                Copy
              </button>
            </div>
          </div>
          <p id="contact-copy-message" aria-live="polite"></p>
        </section>

        <section class="faq" aria-label="Profile snapshot">
          <h2>Profile Snapshot</h2>
          <article class="faq-item">
            <p>Prop trader focused mainly on NQ and ES.</p>
          </article>
          <article class="faq-item">
            <p>Trading methodologies: ICT and Alchemist.</p>
          </article>
          <article class="faq-item">
            <p>First-year medical student at Pham Ngoc Thach University.</p>
          </article>
        </section>
      </section>
    </section>
  </main>
`;const e=Array.from(document.querySelectorAll(".quick-tags button")),n=document.querySelector("#contact-status"),i=Array.from(document.querySelectorAll(".copy-btn")),c=document.querySelector("#contact-copy-message"),l=document.querySelector("#open-all-contacts"),r=Array.from(document.querySelectorAll("[data-link]")),d={NQ:"NQ selected: quick access for NQ discussion.",ES:"ES selected: quick access for ES discussion.",Routine:"Routine selected: discuss study-trading balance."};e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),t.classList.add("active"),n.textContent=d[t.textContent.trim()]||"Ready to connect."})});i.forEach(t=>{t.addEventListener("click",async()=>{const a=t.dataset.copy||"";try{await navigator.clipboard.writeText(a),c.textContent=`Copied: ${a}`}catch{c.textContent="Copy failed. Please copy manually."}})});l.addEventListener("click",()=>{r.forEach(t=>{window.open(t.href,"_blank","noopener,noreferrer")}),c.textContent="Opened all contact links in new tabs."});o();s();
