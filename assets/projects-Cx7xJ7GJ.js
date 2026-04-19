import{i,a as l}from"./loadingFx-DyZ0Lih6.js";document.querySelector("#app").innerHTML=`
  <main class="dashboard-shell reveal-up">
    <aside class="left-rail">
      <div class="logo">WAT2301 | LOGS</div>
      <p class="rail-time">PROJECTS</p>
      <nav class="rail-menu">
        <a href="/index.html">Overview</a>
        <a class="is-active" href="/projects.html">Projects</a>
        <a href="/contact.html">Contact</a>
        <a href="#lab">Experiments</a>
      </nav>
      <div class="rail-card">
        <p>Saved Content</p>
        <strong id="project-count">0</strong>
        <small>Reserved blocks</small>
      </div>
      <ul class="rail-list">
        <li>ICT model library</li>
        <li>Alchemist notes</li>
        <li>Execution journal</li>
      </ul>
    </aside>

    <section class="board projects-board">
      <header class="board-top">
        <div class="tabs filter-tabs">
          <button type="button" class="active" data-filter="all">All</button>
          <button type="button" data-filter="ict">ICT</button>
          <button type="button" data-filter="alchemist">Alchemist</button>
          <button type="button" data-filter="routine">Routine</button>
        </div>
        <div class="search" id="filter-status">Reserved for updates</div>
      </header>

      <section class="empty-panel" id="lab"></section>
    </section>
  </main>
`;const e=Array.from(document.querySelectorAll(".filter-tabs button")),o=document.querySelector("#filter-status"),r=document.querySelector("#project-count");function a(){r.textContent="0",o.textContent="Reserved for updates"}e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active"),a()})});a();i();l();
