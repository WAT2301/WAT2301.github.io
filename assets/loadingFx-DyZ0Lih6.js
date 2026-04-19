(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function d(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=d(r);fetch(r.href,n)}})();const Y="global-music-player",q=[{name:"Random YouTube A",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{name:"Random YouTube B",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk"},{name:"Random YouTube C",url:"https://www.youtube.com/watch?v=kXYiU_JCYtU"},{name:"Random YouTube D",url:"https://www.youtube.com/watch?v=3tmd-ClpJxA"},{name:"Random YouTube E",url:"https://www.youtube.com/watch?v=rs9Ko4zozqc&t=52s"}];function N(){const t=Math.floor(Math.random()*q.length);return q[t]}function I(t){let e;try{e=new URL(t)}catch{return null}const d=e.hostname.replace(/^www\./,"");if(d==="youtu.be")return e.pathname.slice(1)||null;if(d==="youtube.com"||d==="m.youtube.com"){if(e.pathname==="/watch")return e.searchParams.get("v");const a=e.pathname.split("/").filter(Boolean);if(a[0]==="embed"||a[0]==="shorts"||a[0]==="live")return a[1]||null}return null}function J(){if(document.getElementById(Y))return;const t=N(),e=document.createElement("div");e.id=Y,e.className="music-hud",e.innerHTML=`
    <button class="music-fab" type="button" aria-haspopup="dialog" aria-controls="music-popup">
      <span class="music-fab-dot" aria-hidden="true"></span>
      <span class="music-fab-label">Music</span>
    </button>

    <div class="music-popup" id="music-popup" role="dialog" aria-modal="false" hidden>
      <div class="music-card">
        <div class="music-head">
          <strong>Background Music</strong>
          <button class="music-close" type="button" aria-label="Close music popup">&times;</button>
        </div>

        <p class="music-track" id="music-track-label">Track: ${t.name}</p>

        <audio class="music-audio" preload="none"></audio>

        <iframe
          class="music-youtube"
          title="YouTube player"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture"
          hidden
        ></iframe>

        <div class="music-controls">
          <button class="music-play" type="button">Play</button>
          <span class="music-time">00:00 / 00:00</span>
        </div>

        <div class="music-audio-controls">
          <input class="music-progress" type="range" min="0" max="100" value="0" step="0.1" />

          <label class="music-volume-wrap">
            <span>Volume</span>
            <input class="music-volume" type="range" min="0" max="1" value="0.45" step="0.01" />
          </label>
        </div>

        <div class="music-url-wrap">
          <input
            class="music-url"
            type="url"
            placeholder="Paste YouTube URL or direct audio URL"
          />
          <button class="music-load" type="button">Load URL</button>
        </div>

        <p class="music-status">Random YouTube track loaded. Reload for another one, or paste your own URL.</p>
      </div>
    </div>
  `,document.body.appendChild(e);const d=e.querySelector(".music-fab"),a=e.querySelector(".music-popup"),r=e.querySelector(".music-close"),n=e.querySelector(".music-play"),y=e.querySelector(".music-audio-controls"),b=e.querySelector(".music-progress"),m=e.querySelector(".music-volume"),L=e.querySelector(".music-url"),_=e.querySelector(".music-load"),f=e.querySelector("#music-track-label"),E=e.querySelector(".music-time"),l=e.querySelector(".music-status"),s=e.querySelector(".music-audio"),P=e.querySelector(".music-youtube");let R="audio",w=!1,u=!1,v=null;function g(i){if(!Number.isFinite(i))return"00:00";const h=Math.floor(i/60).toString().padStart(2,"0"),x=Math.floor(i%60).toString().padStart(2,"0");return`${h}:${x}`}function p(){const i=s.currentTime||0,h=s.duration||0;E.textContent=`${g(i)} / ${g(h)}`,h>0?b.value=String(i/h*100):b.value="0"}function o(i){v&&(window.clearTimeout(v),v=null),i?(a.hidden=!1,requestAnimationFrame(()=>{a.classList.add("is-visible")}),e.classList.add("is-open")):(a.classList.remove("is-visible"),e.classList.remove("is-open"),v=window.setTimeout(()=>{a.hidden=!0},220)),d.setAttribute("aria-expanded",String(i))}function c(){if(R==="youtube"){n.textContent=w?"Pause":"Play",e.classList.toggle("is-playing",w);return}n.textContent=s.paused?"Play":"Pause",e.classList.toggle("is-playing",!s.paused)}function C(i){P.contentWindow&&P.contentWindow.postMessage(JSON.stringify({event:"command",func:i,args:[]}),"*")}function S(i,h){R="audio",e.classList.remove("is-youtube"),P.hidden=!0,P.src="",y.hidden=!1,s.src=i,s.currentTime=0,f.textContent=`Track: ${h}`,w=!1,c(),p()}function U(i,h,x){R="youtube",e.classList.add("is-youtube"),s.pause(),s.removeAttribute("src"),s.load(),y.hidden=!0,b.value="0",E.textContent="YouTube mode";const k=x?1:0;P.src=`https://www.youtube.com/embed/${i}?autoplay=${k}&rel=0&modestbranding=1&enablejsapi=1`,P.hidden=!1,f.textContent=`Track: ${h}`,w=x,c()}async function M(i,{autoplay:h=!1}={}){const x=(i||"").trim();if(!x){l.textContent="Please paste a URL first.";return}const k=I(x);if(k){U(k,x,h),l.textContent=h?"YouTube URL loaded. Autoplay started (or waiting for browser permission).":"YouTube URL loaded.";return}if(S(x,x),!h){l.textContent="Audio URL loaded. Press Play.";return}try{await s.play(),l.textContent="Custom audio URL loaded and playing.",c(),p()}catch{l.textContent="Audio URL loaded but playback failed. Check format/CORS or use a YouTube URL.",c(),u=h}}function $(){if(R==="youtube"){w||(C("playVideo"),w=!0,c()),u=!1;return}if(!s.paused){u=!1;return}s.play().then(()=>{u=!1,l.textContent="Autoplay resumed after interaction.",c()}).catch(()=>{u=!0})}d.addEventListener("click",()=>{o(a.hidden)}),r.addEventListener("click",()=>o(!1)),n.addEventListener("click",async()=>{if(R==="youtube"){w?(C("pauseVideo"),w=!1,l.textContent="YouTube playback paused."):(C("playVideo"),w=!0,l.textContent="YouTube playback started."),c();return}try{s.paused?(await s.play(),l.textContent="Now playing."):(s.pause(),l.textContent="Playback paused."),c()}catch{l.textContent="Cannot play this track. Try another URL or use YouTube URL."}}),_.addEventListener("click",async()=>{await M(L.value,{autoplay:!0})}),b.addEventListener("input",()=>{if(!s.duration)return;const i=Number(b.value)/100*s.duration;s.currentTime=i,p()}),m.addEventListener("input",()=>{s.volume=Number(m.value)}),s.addEventListener("timeupdate",p),s.addEventListener("loadedmetadata",p),s.addEventListener("play",c),s.addEventListener("pause",c),s.addEventListener("ended",c),s.addEventListener("error",()=>{l.textContent="Audio URL failed. Try another URL or use YouTube URL."}),document.addEventListener("keydown",i=>{i.key==="Escape"&&o(!1)}),document.addEventListener("click",i=>{a.hidden||e.contains(i.target)||o(!1)});const T=()=>{u&&$()};document.addEventListener("pointerdown",T,{passive:!0}),document.addEventListener("keydown",T),s.volume=Number(m.value),u=!0,M(t.url,{autoplay:!0}),l.textContent="Random YouTube URL loaded. Autoplay requested; if blocked, tap anywhere once to start.",c(),p()}const z="page-loader",A=[{name:"Mercury",distanceAU:.39,sizeRelEarth:.38,duration:1.6,color:"#f1d1a6"},{name:"Venus",distanceAU:.72,sizeRelEarth:.95,duration:2.2,color:"#f2d79c"},{name:"Earth",distanceAU:1,sizeRelEarth:1,duration:2.8,color:"#b0f0d8"},{name:"Mars",distanceAU:1.52,sizeRelEarth:.53,duration:3.5,color:"#f6b18d"},{name:"Jupiter",distanceAU:5.2,sizeRelEarth:11.2,duration:5.4,color:"#f7d8a7"},{name:"Saturn",distanceAU:9.58,sizeRelEarth:9.45,duration:6.4,color:"#f5e0ad"},{name:"Uranus",distanceAU:19.2,sizeRelEarth:4.01,duration:7.4,color:"#b7e8ef"},{name:"Neptune",distanceAU:30.05,sizeRelEarth:3.88,duration:8.2,color:"#9ec7ff"}];function O(){const t=window.innerWidth,e=window.innerHeight,d=t/Math.max(e,1);return{width:t,height:e,aspect:d,isMobile:t<640,isTablet:t>=640&&t<1024,isPortrait:e>t,isUltrawide:d>=1.9,isShort:e<720}}function F(t,e,d){const a=A[0].distanceAU,r=A[A.length-1].distanceAU,n=Math.log(t/a)/Math.log(r/a),{width:y,height:b}=e,m=y*.5,L=b*d,_=Math.max(Math.hypot(m,L),Math.hypot(y-m,L),Math.hypot(m,b-L),Math.hypot(y-m,b-L)),f=Math.min(y,b),E=Math.max(e.isMobile?44:56,f*(e.isMobile?.06:.08)),l=e.isUltrawide?.82:e.isPortrait?.96:.9,s=Math.max(180,_*l);return Math.round(E+n*(s-E))}function D(t,e){const d=Math.max(.35,Math.min(11.2,t));let a=4+Math.pow(d,.48)*2.1;return e.isMobile?a*=.82:e.isUltrawide&&(a*=1.08),a.toFixed(2)}function B(t){return t.isUltrawide||t.isShort?.49:.5}function V(t,e){t.classList.toggle("is-mobile",e.isMobile),t.classList.toggle("is-tablet",e.isTablet),t.classList.toggle("is-ultrawide",e.isUltrawide),e.isMobile?(t.style.setProperty("--loader-place-items","center"),t.style.setProperty("--loader-bottom-gap","0"),t.style.setProperty("--loader-card-max-width","520px"),t.style.setProperty("--loader-card-gutter","0.8rem"),t.style.setProperty("--loader-card-padding","0.9rem 0.75rem"),t.style.setProperty("--loader-card-radius","14px")):e.isTablet?(t.style.setProperty("--loader-place-items","center"),t.style.setProperty("--loader-bottom-gap","0"),t.style.setProperty("--loader-card-max-width","420px"),t.style.setProperty("--loader-card-gutter","1.2rem"),t.style.setProperty("--loader-card-padding","1.04rem 0.9rem"),t.style.setProperty("--loader-card-radius","18px")):(t.style.setProperty("--loader-place-items","center"),t.style.setProperty("--loader-bottom-gap","0"),t.style.setProperty("--loader-card-max-width","406px"),t.style.setProperty("--loader-card-gutter","2rem"),t.style.setProperty("--loader-card-padding","1.28rem 1.08rem"),t.style.setProperty("--loader-card-radius","22px"))}function K(){const t=document.body;if(!t||document.getElementById(z))return;t.classList.add("is-loading"),t.classList.remove("page-ready");const e=[".left-rail",".board-top",".hero-panel",".widget-grid",".empty-panel",".contact-layout"];let d=40;e.forEach(u=>{document.querySelectorAll(u).forEach(v=>{v.dataset.loadStagger="",v.style.setProperty("--delay",`${d}ms`),d+=85})});const a=document.createElement("div");a.id=z,a.className="page-loader",a.innerHTML=`
    <div class="page-loader__halo" aria-hidden="true">
      <span class="page-loader__sun"></span>
    </div>
    <div class="page-loader__inner" role="status" aria-live="polite">
      <p class="page-loader__title">WAT2301 Loading</p>
      <p class="page-loader__sub">Preparing dashboard ambience and modules...</p>
      <p class="page-loader__meta">Please wait a moment</p>
      <div class="page-loader__metrics" aria-live="polite">
        <span class="page-loader__stage">Initializing</span>
        <span class="page-loader__percent">0%</span>
      </div>
      <div class="page-loader__dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="page-loader__track" aria-hidden="true">
        <div class="page-loader__bar"></div>
      </div>
    </div>
  `,t.appendChild(a);const r=a.querySelector(".page-loader__halo"),n=a.querySelector(".page-loader__stage"),y=a.querySelector(".page-loader__percent"),b=a.querySelector(".page-loader__bar");let m=null,L=null;function _(){if(!r)return;const u=O();V(a,u);const v=B(u);r.style.setProperty("--solar-x","50%"),r.style.setProperty("--solar-y",`${v*100}%`),r.querySelectorAll(".page-loader__ring, .page-loader__orbit-dot").forEach(g=>{g.remove()}),A.forEach((g,p)=>{const o=document.createElement("span");o.className="page-loader__ring";const c=F(g.distanceAU,u,v);o.style.setProperty("--ring-size",`${c*2}px`),o.style.setProperty("--ring-opacity",`${(.15+p*.042).toFixed(3)}`),o.style.setProperty("--ring-delay",`${(p*.14).toFixed(2)}s`),o.style.setProperty("--ring-rot-duration",`${(8.4+p*1.1).toFixed(2)}s`),o.style.setProperty("--ring-pulse-duration",`${(2.1+p*.22).toFixed(2)}s`),o.style.setProperty("--ring-stroke",`${(.8+p*.08).toFixed(2)}px`),r.appendChild(o)}),A.forEach((g,p)=>{const o=document.createElement("span");o.className="page-loader__orbit-dot";const c=g.name.toLowerCase(),C=(p*44+12)%360,S=F(g.distanceAU,u,v),U=D(g.sizeRelEarth,u),M=g.duration,$=-(p*.32);if(o.style.setProperty("--orbit-angle",`${C}deg`),o.style.setProperty("--orbit-radius",`${S}px`),o.style.setProperty("--orbit-size",`${U}px`),o.style.setProperty("--orbit-duration",`${M}s`),o.style.setProperty("--orbit-color",g.color),o.setAttribute("aria-label",g.name),o.dataset.planet=c,o.style.animationDelay=`${$}s`,g.sizeRelEarth>=3.5&&o.classList.add("is-giant"),c==="saturn"&&o.classList.add("is-ringed"),c==="earth"||c==="mars"){o.classList.add("has-moon");const T=document.createElement("span");T.className="page-loader__moon",T.style.setProperty("--moon-size",`${(Number(U)*.38).toFixed(2)}px`),T.style.setProperty("--moon-radius",`${Math.round(S*.08+8)}px`),T.style.setProperty("--moon-duration",`${(M*.42).toFixed(2)}s`),o.appendChild(T)}p%2===1&&o.classList.add("is-reverse"),r.appendChild(o)})}r&&(_(),L=()=>{m&&window.cancelAnimationFrame(m),m=window.requestAnimationFrame(()=>{_()})},window.addEventListener("resize",L));let f=0;const E=Date.now();let l=null,s=!1;function P(u){f=Math.max(f,Math.min(100,u)),b&&b.style.setProperty("--loader-progress",`${f}%`),y&&(y.textContent=`${Math.round(f)}%`),n&&(f<35?n.textContent="Initializing":f<70?n.textContent="Building interface":f<95?n.textContent="Finalizing":n.textContent="Ready")}function R(){l&&(window.clearInterval(l),l=null)}l=window.setInterval(()=>{if(f>=92){R();return}P(f+6+Math.random()*8)},150),P(8);const w=()=>{if(s)return;s=!0,R(),P(100),a.classList.add("is-complete");const u=Date.now()-E,v=Math.max(0,520-u);window.setTimeout(()=>{a.classList.add("is-leaving"),t.classList.remove("is-loading"),t.classList.add("page-ready"),window.setTimeout(()=>{m&&(window.cancelAnimationFrame(m),m=null),L&&(window.removeEventListener("resize",L),L=null),a.remove()},420)},v)};document.readyState==="complete"?window.setTimeout(w,220):(window.addEventListener("load",w,{once:!0}),window.setTimeout(w,3200))}export{K as a,J as i};
