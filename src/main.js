import './style.css';
import { GUIDE_DATA } from './data/guideData.js';

const getSpriteUrls = (slug) => ({
    anim: `https://img.pokemondb.net/sprites/black-white/anim/normal/${slug}.gif`,
    static: `https://img.pokemondb.net/sprites/black-white/normal/${slug}.png`
});

window.handleSpriteFallback = function(img) {
    if (img.dataset.fallbackApplied === 'true') {
        img.style.display = 'none';
        return;
    }
    img.dataset.fallbackApplied = 'true';
    if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
    }
};

function renderSpriteImg(slug, alt, sizeClass = 'w-12 h-12 sm:w-14 sm:h-14 scale-125') {
    if (!slug) return '';
    const urls = getSpriteUrls(slug);
    return `
        <img 
            src="${urls.anim}" 
            data-fallback="${urls.static}" 
            alt="${alt}" 
            title="${alt}"
            class="poke-sprite ${sizeClass} shrink-0"
            loading="lazy"
            onerror="handleSpriteFallback(this)"
        >
    `;
}

const MOVE_TYPE_STYLES = {
    fire: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25',
    water: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25',
    electric: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
    fighting: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25',
    psychic: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/25',
    ground: 'bg-yellow-600/10 text-yellow-700 dark:text-yellow-400 border-yellow-600/25',
    fairy: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/25',
    flying: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
    normal: 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/25',
    special: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40 font-extrabold',
    ko: 'bg-rose-600/15 text-rose-600 dark:text-rose-400 border-rose-500/40 font-mono font-extrabold tracking-wider',
    finish: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-mono font-extrabold tracking-wider'
};

function renderCombatTable() {
    const tbody = document.getElementById('turns-tbody');
    const completedTurns = JSON.parse(localStorage.getItem('cobalion_completed_turns') || '[]');

    tbody.innerHTML = GUIDE_DATA.turns.map(row => {
        const isCompleted = completedTurns.includes(row.turn);
        const renderCell = (cell, colIndex) => {
            const cellBg = cell.stateType === 'ko' ? 'bg-rose-500/[0.04]' : '';
            const badgesHtml = cell.moves.map(m => {
                const style = MOVE_TYPE_STYLES[m.type] || MOVE_TYPE_STYLES.normal;
                const icon = m.type === 'ko' ? '<i class="fa-solid fa-skull-crossbones text-[11px]"></i> ' : '';
                return `
                    <span class="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border ${style}">
                        ${icon}${m.name}
                    </span>
                `;
            }).join('');

            return `
                <td class="py-3.5 px-4 border-r last:border-r-0 transition-all ${cellBg}" data-col="${colIndex}" style="border-color: var(--border-subtle);">
                    <div class="flex items-center gap-3">
                        ${cell.sprite ? `<div class="turn-sprite-box">${renderSpriteImg(cell.sprite, cell.sprite, 'w-12 h-12 sm:w-14 sm:h-14 scale-125')}</div>` : ''}
                        <div class="flex flex-wrap items-center gap-1.5">
                            ${badgesHtml}
                        </div>
                    </div>
                </td>
            `;
        };

        return `
            <tr class="turn-row hover:bg-cobalt-500/[0.03] transition-colors ${isCompleted ? 'turn-completed' : ''}" data-turn="${row.turn}">
                <td class="py-3 px-3 text-center border-r font-mono cursor-pointer select-none group" style="border-color: var(--border-subtle);" onclick="toggleTurnComplete(${row.turn})" title="Haz clic para marcar turno como completado">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm transition-all ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 group-hover:bg-cobalt-600 group-hover:text-white'}">
                            ${isCompleted ? '<i class="fa-solid fa-check text-xs"></i>' : row.turn}
                        </span>
                        ${row.badge ? `<span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400">${row.badge}</span>` : ''}
                    </div>
                </td>
                ${renderCell(row.p1, 1)}
                ${renderCell(row.p2, 2)}
                ${renderCell(row.p3, 3)}
                ${renderCell(row.p4, 4)}
            </tr>
        `;
    }).join('') + `
        <tr class="bg-emerald-500/[0.06] border-t-2" style="border-color: var(--border-subtle);">
            <td colspan="5" class="py-3.5 px-4 text-center">
                <span class="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-xl text-sm font-mono font-extrabold tracking-widest uppercase border ${MOVE_TYPE_STYLES.finish}">
                    <i class="fa-solid fa-trophy text-xs"></i> FIN
                </span>
            </td>
        </tr>
    `;
}

function renderPokepastes() {
    const grid = document.getElementById('pokepaste-grid');
    const badgeColors = {
        cobalt: 'bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 border-cobalt-500/30',
        amber: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
        purple: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
        teal: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30'
    };

    grid.innerHTML = GUIDE_DATA.pokepastes.map(item => `
        <div class="surface-card rounded-2xl p-5 flex flex-col justify-between hover:border-cobalt-500/60">
            <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${badgeColors[item.accent]}">
                        ${item.player}
                    </span>
                    <span class="text-[11px] font-mono" style="color: var(--text-muted);">${item.slot}</span>
                </div>
                <p class="text-xs font-mono truncate mb-4 px-2.5 py-2 rounded-lg surface-elevated" style="color: var(--text-secondary);">
                    ${item.url}
                </p>
            </div>
            <div class="flex items-center gap-2">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 px-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button type="button" onclick="copyToClipboard('${item.url}', 'URL de ${item.player} copiada')" class="p-2.5 rounded-xl surface-elevated hover:border-cobalt-500 transition-colors cursor-pointer" style="color: var(--text-secondary);" title="Copiar enlace">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderBuildNotes() {
    const grid = document.getElementById('build-notes-grid');
    grid.innerHTML = GUIDE_DATA.buildNotes.map(note => `
        <div class="surface-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
            <div class="flex items-center gap-1 p-2.5 rounded-2xl surface-elevated shrink-0">
                ${note.sprites.map(slug => renderSpriteImg(slug, slug, 'w-11 h-11')).join('')}
            </div>
            <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-extrabold text-base">${note.title}</h3>
                    <span class="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-cobalt-500/10 text-cobalt-600 dark:text-cobalt-400 border border-cobalt-500/20">
                        ${note.tag}
                    </span>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed" style="color: var(--text-secondary);">
                    ${note.text}
                </p>
            </div>
        </div>
    `).join('');
}

function renderContingencies() {
    const grid = document.getElementById('contingencies-grid');
    const severityConfig = {
        forfeit: {
            border: 'border-l-4 border-l-rose-500',
            badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
            actionText: 'text-rose-600 dark:text-rose-400 font-extrabold',
            icon: 'fa-ban'
        },
        adapt: {
            border: 'border-l-4 border-l-cobalt-500',
            badge: 'bg-cobalt-500/15 text-cobalt-600 dark:text-cobalt-400 border-cobalt-500/30',
            actionText: 'text-cobalt-600 dark:text-cobalt-400 font-bold',
            icon: 'fa-code-branch'
        },
        warning: {
            border: 'border-l-4 border-l-amber-500',
            badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
            actionText: 'text-amber-600 dark:text-amber-400 font-extrabold',
            icon: 'fa-triangle-exclamation'
        }
    };

    grid.innerHTML = GUIDE_DATA.contingencies.map(item => {
        const cfg = severityConfig[item.severity];
        return `
            <div class="surface-card rounded-2xl p-4 sm:p-5 ${cfg.border} flex items-center justify-between gap-4">
                <div class="space-y-1.5 min-w-0">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${cfg.badge}">
                            <i class="fa-solid ${cfg.icon}"></i> ${item.badge}
                        </span>
                        <span class="text-xs sm:text-sm font-bold truncate" title="${item.condition}">
                            ${item.condition}
                        </span>
                    </div>
                    <p class="text-xs sm:text-sm ${cfg.actionText} flex items-center gap-1.5">
                        <span>&rarr;</span>
                        <span>${item.action}</span>
                    </p>
                </div>
                <div class="flex items-center gap-1 p-1.5 rounded-xl surface-elevated shrink-0">
                    ${item.sprites.map(slug => renderSpriteImg(slug, slug, 'w-9 h-9')).join('')}
                </div>
            </div>
        `;
    }).join('');
}

let activePlayerFilter = 'all';

function applyPlayerFilter(playerId) {
    activePlayerFilter = playerId;
    document.querySelectorAll('#player-filters .filter-btn').forEach(btn => {
        const isSelected = btn.dataset.player === playerId;
        if (isSelected) {
            btn.className = 'filter-btn active px-3 py-1.5 rounded-xl text-xs font-bold bg-cobalt-600 text-white shadow-sm transition-all cursor-pointer';
            btn.style.color = '';
        } else {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-cobalt-500/10 transition-all cursor-pointer';
            btn.style.color = 'var(--text-secondary)';
        }
    });

    document.querySelectorAll('#combat-table [data-col]').forEach(cell => {
        const col = cell.dataset.col;
        cell.classList.remove('col-dimmed', 'col-focused');
        if (playerId !== 'all') {
            if (col === playerId) {
                cell.classList.add('col-focused');
            } else {
                cell.classList.add('col-dimmed');
            }
        }
    });
}

window.toggleTurnComplete = function(turnNumber) {
    const completedTurns = JSON.parse(localStorage.getItem('cobalion_completed_turns') || '[]');
    const idx = completedTurns.indexOf(turnNumber);
    if (idx > -1) {
        completedTurns.splice(idx, 1);
    } else {
        completedTurns.push(turnNumber);
    }
    localStorage.setItem('cobalion_completed_turns', JSON.stringify(completedTurns));
    renderCombatTable();
    applyPlayerFilter(activePlayerFilter);
};

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-cobalt-500/30 transition-all duration-300 translate-y-3 opacity-0';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 dark:text-emerald-600"></i> <span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-3', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-3', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 2600);
}

window.copyToClipboard = function(text, msg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(msg);
    } catch (err) {
        showToast('No se pudo copiar el enlace');
    }
    document.body.removeChild(textArea);
};

function initTheme() {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('cobalion_theme', theme);
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
            if (label) label.textContent = 'Modo Claro';
        } else {
            icon.className = 'fa-solid fa-moon text-cobalt-600 text-sm';
            if (label) label.textContent = 'Modo Oscuro';
        }
    };

    const savedTheme = localStorage.getItem('cobalion_theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCombatTable();
    renderPokepastes();
    renderBuildNotes();
    renderContingencies();

    document.querySelectorAll('#player-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyPlayerFilter(btn.dataset.player));
    });

    document.getElementById('reset-turns-btn').addEventListener('click', () => {
        localStorage.removeItem('cobalion_completed_turns');
        renderCombatTable();
        applyPlayerFilter(activePlayerFilter);
        showToast('Marcadores de turno reiniciados');
    });
});
