(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const i={turns:[{turn:1,badge:null,p1:{sprite:"typhlosion",moves:[{name:"Estallido",type:"fire"}]},p2:{sprite:"whimsicott",moves:[{name:"Encanto",type:"fairy"}]},p3:{sprite:"ninetales",moves:[{name:"Fuego fatuo",type:"fire"}]},p4:{sprite:"jirachi",moves:[{name:"Pantalla luz",type:"psychic"}]}},{turn:2,badge:null,p1:{sprite:"typhlosion",moves:[{name:"Estallido",type:"fire"}]},p2:{sprite:"whimsicott",moves:[{name:"Viento afín",type:"flying"}]},p3:{sprite:"heatran",moves:[{name:"Estallido",type:"fire"}]},p4:{sprite:"jirachi",moves:[{name:"Reflejo",type:"psychic"}]}},{turn:3,badge:null,p1:{sprite:"rotom-wash",moves:[{name:"Chispazo",type:"electric"}]},p2:{sprite:"typhlosion",moves:[{name:"Estallido",type:"fire"}]},p3:{sprite:"heatran",moves:[{name:"Lanzallamas",type:"fire"}]},p4:{sprite:"jirachi",moves:[{name:"Conjuro",type:"normal"}]}},{turn:4,badge:null,p1:{sprite:"rotom-wash",moves:[{name:"Hidrobomba",type:"water"}]},p2:{sprite:"nidoking",moves:[{name:"Tierra viva",type:"ground"}]},p3:{sprite:"heatran",moves:[{name:"Gravedad",type:"psychic"}]},p4:{sprite:"jirachi",moves:[{name:"Truco",type:"psychic"}]}},{turn:5,badge:null,p1:{sprite:"reuniclus",moves:[{name:"Espacio raro",type:"psychic"}]},p2:{sprite:"nidoking",moves:[{name:"Onda certera",type:"fighting"}]},p3:{sprite:"ampharos",moves:[{name:"Trueno",type:"electric"}]},p4:{sprite:"jirachi",moves:[{name:"Último lugar",type:"special"}]}},{turn:6,badge:null,p1:{sprite:"ampharos",moves:[{name:"Onda certera",type:"fighting"}]},p2:{sprite:"nidoking",moves:[{name:"Onda certera",type:"fighting"}]},p3:{sprite:"ampharos",moves:[{name:"Onda certera",type:"fighting"}]},p4:{sprite:"reuniclus",moves:[{name:"Onda certera",type:"fighting"}]}},{turn:7,badge:null,p1:{sprite:"ampharos",moves:[{name:"Onda certera",type:"fighting"}]},p2:{sprite:"lucario",moves:[{name:"Onda certera",type:"fighting"}]},p3:{sprite:"nidoking",moves:[{name:"Tierra viva",type:"ground"}]},p4:{sprite:"reuniclus",moves:[{name:"Tierra viva",type:"ground"}]}},{turn:8,badge:null,p1:{sprite:"ampharos",moves:[{name:"Onda certera",type:"fighting"}]},p2:{sprite:"lucario",moves:[{name:"Onda certera",type:"fighting"}]},p3:{sprite:"lucario",moves:[{name:"Onda certera",type:"fighting"}]},p4:{sprite:"reuniclus",moves:[{name:"Onda certera",type:"fighting"}]}},{turn:9,badge:null,p1:{sprite:"reuniclus",moves:[{name:"Gravedad",type:"psychic"}]},p2:{sprite:"lucario",moves:[{name:"Onda certera",type:"fighting"}]},p3:{sprite:"lucario",moves:[{name:"Onda certera",type:"fighting"}]},p4:{sprite:"reuniclus",moves:[{name:"Onda certera",type:"fighting"}]}},{turn:10,badge:null,p1:{sprite:"lucario",moves:[{name:"Onda vacío",type:"fighting"}]},p2:{stateType:"ko",moves:[{name:"KO",type:"ko"}]},p3:{stateType:"ko",moves:[{name:"KO",type:"ko"}]},p4:{sprite:"lucario",moves:[{name:"Onda vacío",type:"fighting"}]}}],pokepastes:[{player:"Player 1",slot:"Posición 1º en combate",url:"https://pokepast.es/681c2e0fc33809ab",accent:"cobalt"},{player:"Player 2",slot:"Posición 4º en combate",url:"https://pokepast.es/a42eabbfe4ba2ff5",accent:"amber"},{player:"Player 3",slot:"Posición 2º en combate",url:"https://pokepast.es/ea8eaa70f1407a8b",accent:"purple"},{player:"Player 4",slot:"Posición 3º en combate",url:"https://pokepast.es/8856e404f1cd5ec8",accent:"teal"}],buildNotes:[{title:"Ampharos y Reuniclus",tag:"Prioridad de Crianza (Bulk)",sprites:["ampharos","reuniclus"],text:'Deben criarse priorizando el aguante/durabilidad (<strong class="text-cobalt-600 dark:text-cobalt-400">bulk</strong>); <strong class="text-rose-600 dark:text-rose-400 uppercase">NO escatimes en esto</strong>.'},{title:"Rotom-W (vs Jirachi)",tag:"Control de Aggro / Velocidad",sprites:["rotom-wash","jirachi"],text:'Si no es lo suficientemente robusto (<strong class="text-cobalt-600 dark:text-cobalt-400">bulky</strong>) y lo atacan a él en lugar de a Jirachi, redúcele un poco la <strong>Velocidad</strong> a favor de la <strong>Defensa</strong> hasta que deje de ser el objetivo.'},{title:"Ninetales",tag:"Fragilidad & Fuego Fatuo",sprites:["ninetales"],text:'Necesita ser lo suficientemente frágil (<strong class="text-amber-600 dark:text-amber-400">squishy</strong>) como para caer derrotado de un solo <strong>Roca Afilada (Stone Edge)</strong>. Un Ninetales más lento puede funcionar con Pañuelo Elegido (Choice Scarf), pero fallará <strong>Fuego Fatuo (Will-O-Wisp)</strong>.'},{title:"Nidoking (Acceso Raid)",tag:"Surf / Ocarina / Battle Box",sprites:["nidoking"],text:"Puede aprender <strong>Surf</strong> para llegar a la guarida de la raid (raid den); el <strong>Jugador 1 (P1)</strong> necesitará la ocarina o tendrá que usar la nueva función de la <strong>Caja de Combate (Battle Box)</strong>."}],contingencies:[{severity:"forfeit",badge:"FORFEIT",condition:"Fuego Fatuo (Will-O-Wisp) falla",action:"ABANDONAR / RENUNCIAR (FORFEIT)",sprites:["ninetales"]},{severity:"forfeit",badge:"FORFEIT",condition:"Whimsicott muere en el Turno 1 (T1)",action:"ABANDONAR / RENUNCIAR (FORFEIT)",sprites:["whimsicott"]},{severity:"forfeit",badge:"FORFEIT",condition:"El Heatran del Jugador 3 (P3) no recibe daño en el Turno 2 (T2)",action:"ABANDONAR / RENUNCIAR (FORFEIT)",sprites:["heatran"]},{severity:"forfeit",badge:"FORFEIT",condition:"El Heatran del Jugador 3 (P3) muere en el Turno 2 (T2)",action:"ABANDONAR / RENUNCIAR (FORFEIT)",sprites:["heatran"]},{severity:"adapt",badge:"ADAPTAR",condition:"Nidoking sobrevive al Turno 4 (T4)",action:"Continuar de forma normal y guardar a Lucario para el final",sprites:["nidoking","lucario"]},{severity:"adapt",badge:"TURNO 8",condition:"El Ampharos del Jugador 1 (P1) muere en el Turno 7 (T7)",action:"Onda Certera (Focus Blast) con Lucario en el Turno 8 (T8)",sprites:["ampharos","lucario"]},{severity:"adapt",badge:"TURNO 9",condition:"El Reuniclus del Jugador 4 (P4) muere en el Turno 8 (T8)",action:"Onda Certera (Focus Blast) con Lucario en el Turno 9 (T9)",sprites:["reuniclus","lucario"]},{severity:"warning",badge:"REGLA DE ORO",condition:"Daño insuficiente para debilitar / limpiar",action:"NADA DE APOSTAR CON ONDA CERTERA (FOCUS BLAST) SIN GRAVEDAD (GRAVITY)",sprites:["lucario","ampharos"]}]},h=t=>({anim:`https://img.pokemondb.net/sprites/black-white/anim/normal/${t}.gif`,static:`https://img.pokemondb.net/sprites/black-white/normal/${t}.png`});window.handleSpriteFallback=function(t){if(t.dataset.fallbackApplied==="true"){t.style.display="none";return}t.dataset.fallbackApplied="true",t.dataset.fallback&&(t.src=t.dataset.fallback)};function u(t,a,e="w-12 h-12 sm:w-14 sm:h-14 scale-125"){if(!t)return"";const o=h(t);return`
        <img 
            src="${o.anim}" 
            data-fallback="${o.static}" 
            alt="${a}" 
            title="${a}"
            class="poke-sprite ${e} shrink-0"
            loading="lazy"
            onerror="handleSpriteFallback(this)"
        >
    `}const c={fire:"bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25",water:"bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25",electric:"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25",fighting:"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25",psychic:"bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/25",ground:"bg-yellow-600/10 text-yellow-700 dark:text-yellow-400 border-yellow-600/25",fairy:"bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/25",flying:"bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25",normal:"bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/25",special:"bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40 font-extrabold",ko:"bg-rose-600/15 text-rose-600 dark:text-rose-400 border-rose-500/40 font-mono font-extrabold tracking-wider",finish:"bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-mono font-extrabold tracking-wider"};function d(){const t=document.getElementById("turns-tbody"),a=JSON.parse(localStorage.getItem("cobalion_completed_turns")||"[]");t.innerHTML=i.turns.map(e=>{const o=a.includes(e.turn),r=(s,n)=>{const g=s.stateType==="ko"?"bg-rose-500/[0.04]":"",f=s.moves.map(l=>{const x=c[l.type]||c.normal,y=l.type==="ko"?'<i class="fa-solid fa-skull-crossbones text-[11px]"></i> ':"";return`
                    <span class="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border ${x}">
                        ${y}${l.name}
                    </span>
                `}).join("");return`
                <td class="py-3.5 px-4 border-r last:border-r-0 transition-all ${g}" data-col="${n}" style="border-color: var(--border-subtle);">
                    <div class="flex items-center gap-3">
                        ${s.sprite?`<div class="turn-sprite-box">${u(s.sprite,s.sprite,"w-12 h-12 sm:w-14 sm:h-14 scale-125")}</div>`:""}
                        <div class="flex flex-wrap items-center gap-1.5">
                            ${f}
                        </div>
                    </div>
                </td>
            `};return`
            <tr class="turn-row hover:bg-cobalt-500/[0.03] transition-colors ${o?"turn-completed":""}" data-turn="${e.turn}">
                <td class="py-3 px-3 text-center border-r font-mono cursor-pointer select-none group" style="border-color: var(--border-subtle);" onclick="toggleTurnComplete(${e.turn})" title="Haz clic para marcar turno como completado">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm transition-all ${o?"bg-emerald-500 text-white":"bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 group-hover:bg-cobalt-600 group-hover:text-white"}">
                            ${o?'<i class="fa-solid fa-check text-xs"></i>':e.turn}
                        </span>
                        ${e.badge?`<span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400">${e.badge}</span>`:""}
                    </div>
                </td>
                ${r(e.p1,1)}
                ${r(e.p2,2)}
                ${r(e.p3,3)}
                ${r(e.p4,4)}
            </tr>
        `}).join("")+`
        <tr class="bg-emerald-500/[0.06] border-t-2" style="border-color: var(--border-subtle);">
            <td colspan="5" class="py-3.5 px-4 text-center">
                <span class="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-xl text-sm font-mono font-extrabold tracking-widest uppercase border ${c.finish}">
                    <i class="fa-solid fa-trophy text-xs"></i> FIN
                </span>
            </td>
        </tr>
    `}function v(){const t=document.getElementById("pokepaste-grid"),a={cobalt:"bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 border-cobalt-500/30",amber:"bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",purple:"bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",teal:"bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30"};t.innerHTML=i.pokepastes.map(e=>`
        <div class="surface-card rounded-2xl p-5 flex flex-col justify-between hover:border-cobalt-500/60">
            <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${a[e.accent]}">
                        ${e.player}
                    </span>
                    <span class="text-[11px] font-mono" style="color: var(--text-muted);">${e.slot}</span>
                </div>
                <p class="text-xs font-mono truncate mb-4 px-2.5 py-2 rounded-lg surface-elevated" style="color: var(--text-secondary);">
                    ${e.url}
                </p>
            </div>
            <div class="flex items-center gap-2">
                <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 px-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button type="button" onclick="copyToClipboard('${e.url}', 'URL de ${e.player} copiada')" class="p-2.5 rounded-xl surface-elevated hover:border-cobalt-500 transition-colors cursor-pointer" style="color: var(--text-secondary);" title="Copiar enlace">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join("")}function k(){const t=document.getElementById("build-notes-grid");t.innerHTML=i.buildNotes.map(a=>`
        <div class="surface-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
            <div class="flex items-center gap-1 p-2.5 rounded-2xl surface-elevated shrink-0">
                ${a.sprites.map(e=>u(e,e,"w-11 h-11")).join("")}
            </div>
            <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-extrabold text-base">${a.title}</h3>
                    <span class="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-cobalt-500/10 text-cobalt-600 dark:text-cobalt-400 border border-cobalt-500/20">
                        ${a.tag}
                    </span>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed" style="color: var(--text-secondary);">
                    ${a.text}
                </p>
            </div>
        </div>
    `).join("")}function T(){const t=document.getElementById("contingencies-grid"),a={forfeit:{border:"border-l-4 border-l-rose-500",badge:"bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30",actionText:"text-rose-600 dark:text-rose-400 font-extrabold",icon:"fa-ban"},adapt:{border:"border-l-4 border-l-cobalt-500",badge:"bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 border-cobalt-500/30",actionText:"text-cobalt-600 dark:text-cobalt-400 font-bold",icon:"fa-code-branch"},warning:{border:"border-l-4 border-l-amber-500",badge:"bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",actionText:"text-amber-600 dark:text-amber-400 font-extrabold",icon:"fa-triangle-exclamation"}};t.innerHTML=i.contingencies.map(e=>{const o=a[e.severity];return`
            <div class="surface-card rounded-2xl p-4 sm:p-5 ${o.border} flex items-center justify-between gap-4">
                <div class="space-y-1.5 min-w-0">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${o.badge}">
                            <i class="fa-solid ${o.icon}"></i> ${e.badge}
                        </span>
                        <span class="text-xs sm:text-sm font-bold truncate" title="${e.condition}">
                            ${e.condition}
                        </span>
                    </div>
                    <p class="text-xs sm:text-sm ${o.actionText} flex items-center gap-1.5">
                        <span>&rarr;</span>
                        <span>${e.action}</span>
                    </p>
                </div>
                <div class="flex items-center gap-1 p-1.5 rounded-xl surface-elevated shrink-0">
                    ${e.sprites.map(r=>u(r,r,"w-9 h-9")).join("")}
                </div>
            </div>
        `}).join("")}let b="all";function p(t){b=t,document.querySelectorAll("#player-filters .filter-btn").forEach(a=>{a.dataset.player===t?(a.className="filter-btn active px-3 py-1.5 rounded-xl text-xs font-bold bg-cobalt-600 text-white shadow-sm transition-all cursor-pointer",a.style.color=""):(a.className="filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-cobalt-500/10 transition-all cursor-pointer",a.style.color="var(--text-secondary)")}),document.querySelectorAll("#combat-table [data-col]").forEach(a=>{const e=a.dataset.col;a.classList.remove("col-dimmed","col-focused"),t!=="all"&&(e===t?a.classList.add("col-focused"):a.classList.add("col-dimmed"))})}window.toggleTurnComplete=function(t){const a=JSON.parse(localStorage.getItem("cobalion_completed_turns")||"[]"),e=a.indexOf(t);e>-1?a.splice(e,1):a.push(t),localStorage.setItem("cobalion_completed_turns",JSON.stringify(a)),d(),p(b)};function m(t){const a=document.getElementById("toast-container"),e=document.createElement("div");e.className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-cobalt-500/30 transition-all duration-300 translate-y-3 opacity-0",e.innerHTML=`<i class="fa-solid fa-circle-check text-emerald-400 dark:text-emerald-600"></i> <span>${t}</span>`,a.appendChild(e),requestAnimationFrame(()=>{e.classList.remove("translate-y-3","opacity-0")}),setTimeout(()=>{e.classList.add("translate-y-3","opacity-0"),setTimeout(()=>e.remove(),300)},2600)}window.copyToClipboard=function(t,a){const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy"),m(a)}catch{m("No se pudo copiar el enlace")}document.body.removeChild(e)};function O(){const t=document.documentElement,a=document.getElementById("theme-toggle"),e=document.getElementById("theme-icon"),o=document.getElementById("theme-label"),r=n=>{t.setAttribute("data-theme",n),localStorage.setItem("cobalion_theme",n),n==="dark"?(e.className="fa-solid fa-sun text-amber-400 text-sm",o&&(o.textContent="Modo Claro")):(e.className="fa-solid fa-moon text-cobalt-600 text-sm",o&&(o.textContent="Modo Oscuro"))},s=localStorage.getItem("cobalion_theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");r(s),a.addEventListener("click",()=>{const n=t.getAttribute("data-theme")==="dark"?"light":"dark";r(n)})}document.addEventListener("DOMContentLoaded",()=>{O(),d(),v(),k(),T(),document.querySelectorAll("#player-filters .filter-btn").forEach(t=>{t.addEventListener("click",()=>p(t.dataset.player))}),document.getElementById("reset-turns-btn").addEventListener("click",()=>{localStorage.removeItem("cobalion_completed_turns"),d(),p(b),m("Marcadores de turno reiniciados")})});
