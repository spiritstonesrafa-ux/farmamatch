/**
 * FarmaMatch - Jogo da Memória Farmacêutico
 * JavaScript Vanilla ES6+ Modular
 */

'use strict';

/* ==========================================================================
   1. BANCO DE DADOS TEMÁTICO DE FARMÁCIA & SAÚDE (12 Ícones SVG Vetoriais)
   ========================================================================== */
const PHARMACY_ITEMS = [
  {
    id: 'capsule',
    name: 'Cápsula',
    color: '#10b981', // Verde menta
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cap-grad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stop-color="#10b981"/>
            <stop offset="1" stop-color="#059669"/>
          </linearGradient>
          <linearGradient id="cap-grad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0284c7"/>
            <stop offset="1" stop-color="#0369a1"/>
          </linearGradient>
        </defs>
        <g transform="rotate(-45 32 32)">
          <!-- Metade Superior (Azul) -->
          <path d="M22 28V16C22 10.477 26.477 6 32 6C37.523 6 42 10.477 42 16V28H22Z" fill="url(#cap-grad2)"/>
          <!-- Metade Inferior (Verde Menta) -->
          <path d="M22 28V44C22 49.523 26.477 54 32 54C37.523 54 42 49.523 42 44V28H22Z" fill="url(#cap-grad1)"/>
          <!-- Anel Central Separador -->
          <line x1="22" y1="28" x2="42" y2="28" stroke="#ffffff" stroke-width="2.5"/>
          <!-- Brilho / Reflexo -->
          <path d="M26 12C26 9.79 27.79 8 30 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          <path d="M26 32V44" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
        </g>
      </svg>`
  },
  {
    id: 'syrup',
    name: 'Xarope',
    color: '#0284c7', // Azul Clínico
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="syr-grad" x1="16" y1="20" x2="48" y2="58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#38bdf8"/>
            <stop offset="1" stop-color="#0284c7"/>
          </linearGradient>
        </defs>
        <!-- Tampa do Frasco -->
        <rect x="25" y="8" width="14" height="6" rx="2" fill="#64748b"/>
        <!-- Gargalo -->
        <rect x="27" y="14" width="10" height="6" fill="#94a3b8"/>
        <!-- Corpo do Frasco -->
        <rect x="18" y="20" width="28" height="38" rx="7" fill="url(#syr-grad)"/>
        <!-- Rótulo Branco com Cruz -->
        <rect x="21" y="30" width="22" height="18" rx="3" fill="#ffffff"/>
        <path d="M32 34V44M27 39H37" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Linhas de Medição Lateral -->
        <line x1="43" y1="25" x2="40" y2="25" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        <line x1="43" y1="31" x2="39" y2="31" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        <line x1="43" y1="37" x2="40" y2="37" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
      </svg>`
  },
  {
    id: 'syringe',
    name: 'Seringa',
    color: '#0d9488', // Verde Petróleo
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 32 32)">
          <!-- Agulha -->
          <line x1="32" y1="4" x2="32" y2="16" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
          <!-- Corpo da Seringa -->
          <rect x="24" y="16" width="16" height="30" rx="3" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
          <!-- Líquido Medicação -->
          <rect x="26" y="24" width="12" height="20" fill="#14b8a6"/>
          <!-- Marcadores de ml -->
          <line x1="34" y1="20" x2="38" y2="20" stroke="#0f766e" stroke-width="1.5"/>
          <line x1="33" y1="26" x2="38" y2="26" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="34" y1="32" x2="38" y2="32" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="33" y1="38" x2="38" y2="38" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Êmbolo / Haste -->
          <rect x="30" y="46" width="4" height="12" fill="#0d9488"/>
          <rect x="22" y="58" width="20" height="4" rx="1.5" fill="#0d9488"/>
        </g>
      </svg>`
  },
  {
    id: 'stethoscope',
    name: 'Estetoscópio',
    color: '#0284c7', // Azul Royal
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Olivas e Tubo Superior -->
        <circle cx="20" cy="14" r="3" fill="#0284c7"/>
        <circle cx="44" cy="14" r="3" fill="#0284c7"/>
        <path d="M20 17V24C20 30.627 25.373 36 32 36C38.627 36 44 30.627 44 24V17" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/>
        <!-- Tubo Principal Curvado -->
        <path d="M32 36V43C32 49 37 54 43 54C48 54 51 50 51 45V41" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Diafragma / Campânula -->
        <circle cx="51" cy="36" r="7" fill="#e2e8f0" stroke="#0284c7" stroke-width="3"/>
        <circle cx="51" cy="36" r="3" fill="#0284c7"/>
      </svg>`
  },
  {
    id: 'firstaid',
    name: 'Primeiros Socorros',
    color: '#f43f5e', // Coral / Vermelho
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fa-grad" x1="12" y1="18" x2="52" y2="56" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fb7185"/>
            <stop offset="1" stop-color="#e11d48"/>
          </linearGradient>
        </defs>
        <!-- Alça da Maleta -->
        <path d="M24 18V13C24 10.79 25.79 9 28 9H36C38.21 9 40 10.79 40 13V18" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Maleta Principal -->
        <rect x="10" y="18" width="44" height="38" rx="8" fill="url(#fa-grad)"/>
        <!-- Cruz Branca Central -->
        <path d="M32 26V48M21 37H43" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
  },
  {
    id: 'ointment',
    name: 'Pomada',
    color: '#f59e0b', // Âmbar / Dourado
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-30 32 32)">
          <!-- Tampa Rosqueada -->
          <rect x="18" y="10" width="10" height="6" rx="1.5" fill="#64748b"/>
          <!-- Gargalo do Tubo -->
          <path d="M21 16H25L28 22H18L21 16Z" fill="#cbd5e1"/>
          <!-- Corpo do Tubo -->
          <path d="M17 22H29L33 50C33 52 31 54 29 54H17C15 54 13 52 13 50L17 22Z" fill="#fbbf24"/>
          <!-- Faixa Decorativa com Cruz -->
          <path d="M15.5 32H30.5L31.5 42H14.5L15.5 32Z" fill="#ffffff"/>
          <path d="M23 34V40M20 37H26" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
          <!-- Dobra Inferior Selada -->
          <rect x="13" y="52" width="20" height="3" rx="1" fill="#d97706"/>
        </g>
      </svg>`
  },
  {
    id: 'thermometer',
    name: 'Termômetro',
    color: '#06b6d4', // Ciano
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 32 32)">
          <!-- Haste do Termômetro Digital -->
          <path d="M28 8C28 5.79 29.79 4 32 4C34.21 4 36 5.79 36 8V44C38.5 46 40 49 40 52C40 56.42 36.42 60 32 60C27.58 60 24 56.42 24 52C24 49 25.5 46 28 44V8Z" fill="#f1f5f9" stroke="#0891b2" stroke-width="2"/>
          <!-- Ponta Metálica -->
          <path d="M28 8C28 5.79 29.79 4 32 4C34.21 4 36 5.79 36 8V14H28V8Z" fill="#94a3b8"/>
          <!-- Visor LCD Digital -->
          <rect x="29" y="24" width="6" height="14" rx="1" fill="#0f172a"/>
          <line x1="32" y1="26" x2="32" y2="36" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Bulbo com Mercúrio / Sensor -->
          <circle cx="32" cy="52" r="6" fill="#06b6d4"/>
        </g>
      </svg>`
  },
  {
    id: 'mortar',
    name: 'Almofariz',
    color: '#10b981', // Verde Farmácia
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Pilão Inclinado -->
        <g transform="rotate(-25 36 20)">
          <path d="M34 8H38L37 32H35L34 8Z" fill="#64748b"/>
          <circle cx="36" cy="8" r="3" fill="#475569"/>
        </g>
        <!-- Tigela / Almofariz -->
        <path d="M12 28C12 28 14 52 32 52C50 52 52 28 52 28H12Z" fill="#10b981"/>
        <!-- Borda Superior da Tigela -->
        <ellipse cx="32" cy="28" rx="20" ry="5" fill="#34d399"/>
        <!-- Base de Apoio -->
        <path d="M22 52H42V56C42 57.1 41.1 58 40 58H24C22.9 58 22 57.1 22 56V52Z" fill="#059669"/>
        <!-- Folha / Erva Medicinal -->
        <path d="M32 35C32 35 38 35 40 41C36 43 32 41 32 35Z" fill="#ecfdf5"/>
        <path d="M32 35C32 35 26 35 24 41C28 43 32 41 32 35Z" fill="#ecfdf5"/>
      </svg>`
  },
  {
    id: 'dropper',
    name: 'Conta-gotas',
    color: '#8b5cf6', // Roxo / Lavanda
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 32 26)">
          <!-- Bulbo de Borracha -->
          <path d="M27 8C27 5.24 29.24 3 32 3C34.76 3 37 5.24 37 8V12H27V8Z" fill="#8b5cf6"/>
          <!-- Anel de Vedação -->
          <rect x="25" y="12" width="14" height="3" rx="1.5" fill="#6d28d9"/>
          <!-- Tubo de Vidro -->
          <path d="M28 15V36L32 44L36 36V15H28Z" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
          <!-- Líquido Farmacêutico Interno -->
          <path d="M29 25V35L32 41L35 35V25H29Z" fill="#a78bfa"/>
        </g>
        <!-- Gota Caindo -->
        <path d="M48 48C48 48 53 54 53 56.5C53 59 50.8 61 48 61C45.2 61 43 59 43 56.5C43 54 48 48 48 48Z" fill="#8b5cf6"/>
      </svg>`
  },
  {
    id: 'molecule',
    name: 'Molécula',
    color: '#0284c7', // Azul Bioquímica
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Ligações Químicas -->
        <line x1="32" y1="20" x2="48" y2="28" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="48" y1="28" x2="48" y2="44" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="48" y1="44" x2="32" y2="52" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="32" y1="52" x2="16" y2="44" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="16" y1="44" x2="16" y2="28" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <line x1="16" y1="28" x2="32" y2="20" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <!-- Átomo Central Ligado -->
        <line x1="32" y1="20" x2="32" y2="36" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
        <!-- Átomos / Nós Esferas -->
        <circle cx="32" cy="20" r="5" fill="#f43f5e"/>
        <circle cx="48" cy="28" r="5" fill="#0284c7"/>
        <circle cx="48" cy="44" r="5" fill="#10b981"/>
        <circle cx="32" cy="52" r="5" fill="#0284c7"/>
        <circle cx="16" cy="44" r="5" fill="#10b981"/>
        <circle cx="16" cy="28" r="5" fill="#0284c7"/>
        <circle cx="32" cy="36" r="6" fill="#f59e0b"/>
      </svg>`
  },
  {
    id: 'scale',
    name: 'Balança',
    color: '#6366f1', // Índigo / Precisão
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Base da Balança Analítica -->
        <rect x="12" y="42" width="40" height="14" rx="4" fill="#e2e8f0" stroke="#6366f1" stroke-width="2"/>
        <!-- Display LCD -->
        <rect x="22" y="46" width="20" height="6" rx="1.5" fill="#0f172a"/>
        <line x1="25" y1="49" x2="32" y2="49" stroke="#34d399" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Suporte do Prato -->
        <path d="M32 42V26" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
        <!-- Prato de Pesagem -->
        <line x1="16" y1="26" x2="48" y2="26" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Substância em Pesagem -->
        <path d="M26 26C26 22 30 20 32 20C34 20 38 22 38 26H26Z" fill="#a5b4fc"/>
      </svg>`
  },
  {
    id: 'bandage',
    name: 'Curativo',
    color: '#ec4899', // Rosa Curativo
    svg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(45 32 32)">
          <!-- Adesivo Principal -->
          <rect x="10" y="22" width="44" height="20" rx="10" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
          <!-- Almofada Central de Gaze -->
          <rect x="24" y="22" width="16" height="20" fill="#ffedd5"/>
          <!-- Furinhos de Ventilação -->
          <circle cx="16" cy="28" r="1.5" fill="#ea580c" opacity="0.6"/>
          <circle cx="16" cy="36" r="1.5" fill="#ea580c" opacity="0.6"/>
          <circle cx="48" cy="28" r="1.5" fill="#ea580c" opacity="0.6"/>
          <circle cx="48" cy="36" r="1.5" fill="#ea580c" opacity="0.6"/>
          <!-- Cruz Médica na Gaze -->
          <path d="M32 28V36M28 32H36" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>`
  }
];

/* ==========================================================================
   2. GERENCIADOR DE ÁUDIO NATIVO (Web Audio API Synthesizer)
   ========================================================================== */
class AudioController {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('farmamatch_muted') === 'true';
  }

  // Inicializa o contexto sob demanda após primeiro clique do usuário
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Som suave de virar a carta (Flip)
  playFlip() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.warn('Erro ao reproduzir áudio flip:', e);
    }
  }

  // Som agradável e alegre de Par Encontrado (Match Chime)
  playMatch() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99]; // Acorde Maior C5, E5, G5
      notes.forEach((freq, i) => {
        const startTime = this.ctx.currentTime + (i * 0.08);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {
      console.warn('Erro ao reproduzir som match:', e);
    }
  }

  // Som sutil de erro / cartas não combinam (Mismatch Dull Tone)
  playMismatch() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn('Erro ao reproduzir som mismatch:', e);
    }
  }

  // Fanfarra de Vitória (Celebration Fanfare)
  playVictory() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const fanfare = [
        { f: 523.25, d: 0.12 }, // C5
        { f: 659.25, d: 0.12 }, // E5
        { f: 783.99, d: 0.12 }, // G5
        { f: 1046.50, d: 0.4 }  // C6
      ];

      let delay = 0;
      fanfare.forEach(note => {
        const startTime = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, startTime);

        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d);

        delay += note.d * 0.75;
      });
    } catch (e) {
      console.warn('Erro ao reproduzir som de vitória:', e);
    }
  }

  // Som de clique de botão
  playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      // Ignora silenciosamente
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('farmamatch_muted', this.isMuted);
    return this.isMuted;
  }
}

/* ==========================================================================
   3. GERENCIADOR DE RECORDES LOCAIS (LocalStorage)
   ========================================================================== */
class RecordsManager {
  constructor() {
    this.storageKey = 'farmamatch_highscores';
    this.records = this.load();
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {
        easy: { time: null, moves: null },
        medium: { time: null, moves: null },
        hard: { time: null, moves: null }
      };
    } catch (e) {
      return {
        easy: { time: null, moves: null },
        medium: { time: null, moves: null },
        hard: { time: null, moves: null }
      };
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.records));
    } catch (e) {
      console.warn('Erro ao salvar recordes no localStorage:', e);
    }
  }

  getRecord(diff) {
    return this.records[diff] || { time: null, moves: null };
  }

  // Verifica e salva se a pontuação atual é recorde
  checkAndSaveRecord(diff, timeInSeconds, moves) {
    const current = this.records[diff] || { time: null, moves: null };
    let isNewRecord = false;

    // Novo recorde de tempo?
    if (current.time === null || timeInSeconds < current.time) {
      current.time = timeInSeconds;
      isNewRecord = true;
    }

    // Novo recorde de menor número de movimentos?
    if (current.moves === null || moves < current.moves) {
      current.moves = moves;
      isNewRecord = true;
    }

    if (isNewRecord) {
      this.records[diff] = current;
      this.save();
    }

    return isNewRecord;
  }

  clear() {
    this.records = {
      easy: { time: null, moves: null },
      medium: { time: null, moves: null },
      hard: { time: null, moves: null }
    };
    this.save();
  }
}

/* ==========================================================================
   4. CONTROLADOR PRINCIPAL DO JOGO (Game Controller)
   ========================================================================== */
class GameController {
  constructor() {
    // Componentes de Áudio e Recordes
    this.audio = new AudioController();
    this.records = new RecordsManager();

    // Configurações de Dificuldade
    this.difficultyConfigs = {
      easy: { pairs: 6, gridClass: 'easy-grid', label: 'Fácil' },
      medium: { pairs: 8, gridClass: 'medium-grid', label: 'Médio' },
      hard: { pairs: 12, gridClass: 'hard-grid', label: 'Difícil' }
    };
    this.currentDifficulty = 'medium';

    // Estados da Partida
    this.cardsData = [];
    this.flippedCards = [];
    this.matchedPairsCount = 0;
    this.movesCount = 0;
    this.isLocked = false;
    this.timerInterval = null;
    this.secondsElapsed = 0;
    this.gameStarted = false;

    // Cache de Elementos do DOM
    this.dom = {
      board: document.getElementById('game-board'),
      timerDisplay: document.getElementById('timer-display'),
      movesDisplay: document.getElementById('moves-display'),
      pairsDisplay: document.getElementById('pairs-display'),
      hudBestRecord: document.getElementById('hud-best-record'),
      resetBtn: document.getElementById('reset-btn'),
      muteBtn: document.getElementById('mute-btn'),
      muteIcon: document.getElementById('mute-icon'),
      recordsBtn: document.getElementById('records-btn'),
      howToPlayBtn: document.getElementById('how-to-play-btn'),
      diffPills: document.querySelectorAll('.pill-btn'),
      // Modais
      victoryModal: document.getElementById('victory-modal'),
      recordsModal: document.getElementById('records-modal'),
      instructionsModal: document.getElementById('instructions-modal'),
      victoryRestartBtn: document.getElementById('victory-restart-btn'),
      victoryShareBtn: document.getElementById('victory-share-btn'),
      clearRecordsBtn: document.getElementById('clear-records-btn'),
      toast: document.getElementById('toast')
    };

    this.init();
  }

  // Inicialização geral do sistema
  init() {
    this.setupEventListeners();
    this.updateMuteButtonUI();
    this.startNewGame();
    this.renderRecordsModal();
    this.updateHUDRecord();

    // Inicializa ícones Lucide
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Vinculação de eventos do usuário
  setupEventListeners() {
    // Botão Novo Jogo
    this.dom.resetBtn.addEventListener('click', () => {
      this.audio.playClick();
      this.startNewGame();
    });

    // Seletor de Dificuldades (Pills)
    this.dom.diffPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        const targetDiff = pill.dataset.difficulty;
        if (targetDiff === this.currentDifficulty) return;

        this.audio.playClick();
        this.dom.diffPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        this.currentDifficulty = targetDiff;
        this.startNewGame();
      });
    });

    // Botão de Áudio / Mute
    this.dom.muteBtn.addEventListener('click', () => {
      const isMuted = this.audio.toggleMute();
      this.updateMuteButtonUI();
      this.showToast(isMuted ? 'Áudio desativado 🔇' : 'Áudio ativado 🔊');
    });

    // Botão de Recordes
    this.dom.recordsBtn.addEventListener('click', () => {
      this.audio.playClick();
      this.renderRecordsModal();
      this.openModal(this.dom.recordsModal);
    });

    // Botão de Ajuda / Instruções
    this.dom.howToPlayBtn.addEventListener('click', () => {
      this.audio.playClick();
      this.openModal(this.dom.instructionsModal);
    });

    // Botões para fechar modais
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        const modalId = btn.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        if (modal) this.closeModal(modal);
      });
    });

    // Fechar ao clicar no overlay escuro do modal
    [this.dom.recordsModal, this.dom.instructionsModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });

    // Botão Limpar Recordes
    this.dom.clearRecordsBtn.addEventListener('click', () => {
      if (confirm('Deseja realmente apagar todos os seus recordes salvos?')) {
        this.records.clear();
        this.renderRecordsModal();
        this.updateHUDRecord();
        this.showToast('Recordes apagados com sucesso!');
      }
    });

    // Botão Jogar Novamente no Modal de Vitória
    this.dom.victoryRestartBtn.addEventListener('click', () => {
      this.audio.playClick();
      this.closeModal(this.dom.victoryModal);
      this.startNewGame();
    });

    // Botão Compartilhar Vitória
    this.dom.victoryShareBtn.addEventListener('click', () => {
      this.shareVictoryResult();
    });

    // Fechar modais com tecla ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => this.closeModal(m));
      }
    });
  }

  // Atualiza visual do botão de áudio
  updateMuteButtonUI() {
    const isMuted = this.audio.isMuted;
    this.dom.muteBtn.setAttribute('title', isMuted ? 'Ativar Som' : 'Desativar Som');
    this.dom.muteBtn.setAttribute('aria-label', isMuted ? 'Ativar Som' : 'Desativar Som');

    // Substitui ícone Lucide
    this.dom.muteBtn.innerHTML = `
      <i data-lucide="${isMuted ? 'volume-x' : 'volume-2'}"></i>
      <span class="btn-tooltip">Som</span>
    `;
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Iniciar / Reiniciar Nova Partida
  startNewGame() {
    this.stopTimer();
    this.secondsElapsed = 0;
    this.movesCount = 0;
    this.matchedPairsCount = 0;
    this.flippedCards = [];
    this.isLocked = false;
    this.gameStarted = false;

    const config = this.difficultyConfigs[this.currentDifficulty];

    // Atualiza contadores HUD
    this.dom.timerDisplay.textContent = '00:00';
    this.dom.movesDisplay.textContent = '0';
    this.dom.pairsDisplay.textContent = `0 / ${config.pairs}`;
    this.updateHUDRecord();

    // Configura classes do grid
    this.dom.board.className = `game-board ${config.gridClass}`;

    // Prepara baralho e renderiza
    this.generateCardsDeck(config.pairs);
    this.renderBoard();
  }

  // Gera e embaralha os pares de cartas
  generateCardsDeck(pairsCount) {
    // Embaralha itens do banco de farmácia e seleciona N pares
    const shuffledItems = [...PHARMACY_ITEMS].sort(() => Math.random() - 0.5);
    const selectedItems = shuffledItems.slice(0, pairsCount);

    // Duplica para formar pares idênticos
    const deck = [];
    selectedItems.forEach(item => {
      deck.push({ ...item, uid: `${item.id}-a` });
      deck.push({ ...item, uid: `${item.id}-b` });
    });

    // Algoritmo Fisher-Yates para embaralhamento perfeito
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    this.cardsData = deck;
  }

  // Renderiza as cartas no DOM com estrutura 3D
  renderBoard() {
    this.dom.board.innerHTML = '';

    const fragment = document.createDocumentFragment();

    this.cardsData.forEach((card, index) => {
      const cardEl = document.createElement('button');
      cardEl.className = 'card';
      cardEl.dataset.id = card.id;
      cardEl.dataset.uid = card.uid;
      cardEl.dataset.index = index;
      cardEl.setAttribute('role', 'gridcell');
      cardEl.setAttribute('aria-label', `Carta fechada ${index + 1}`);

      cardEl.innerHTML = `
        <div class="card-inner">
          <!-- Verso da Carta (Face Down) -->
          <div class="card-face card-back">
            <div class="card-back-emblem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </div>
          </div>
          <!-- Frente da Carta (Face Up) -->
          <div class="card-face card-front">
            <span class="matched-badge" aria-hidden="true">✓</span>
            <div class="card-icon-container">
              ${card.svg}
            </div>
            <span class="card-label">${card.name}</span>
          </div>
        </div>
      `;

      // Evento de clique
      cardEl.addEventListener('click', () => this.handleCardClick(cardEl, card));

      // Acessibilidade por Teclado (Enter ou Espaço)
      cardEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleCardClick(cardEl, card);
        }
      });

      fragment.appendChild(cardEl);
    });

    this.dom.board.appendChild(fragment);
  }

  // Manipulador de clique em uma carta
  handleCardClick(cardEl, cardData) {
    // Se o tabuleiro estiver travado ou a carta já estiver virada/combinada, ignora
    if (this.isLocked) return;
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    // Inicia o cronômetro no primeiro clique da partida
    if (!this.gameStarted) {
      this.startTimer();
      this.gameStarted = true;
    }

    // Vira a carta
    cardEl.classList.add('flipped');
    cardEl.setAttribute('aria-label', `Carta revelada: ${cardData.name}`);
    this.audio.playFlip();

    this.flippedCards.push({ el: cardEl, data: cardData });

    // Se duas cartas foram viradas, avalia combinação
    if (this.flippedCards.length === 2) {
      this.movesCount++;
      this.dom.movesDisplay.textContent = this.movesCount;
      this.evaluatePair();
    }
  }

  // Avaliação do par de cartas viradas
  evaluatePair() {
    const [card1, card2] = this.flippedCards;
    this.isLocked = true;

    const isMatch = card1.data.id === card2.data.id;

    if (isMatch) {
      // SUCESSO: Par Correto
      setTimeout(() => {
        card1.el.classList.add('matched');
        card2.el.classList.add('matched');
        card1.el.setAttribute('aria-label', `Par encontrado: ${card1.data.name}`);
        card2.el.setAttribute('aria-label', `Par encontrado: ${card2.data.name}`);

        this.audio.playMatch();
        this.matchedPairsCount++;

        const totalPairs = this.difficultyConfigs[this.currentDifficulty].pairs;
        this.dom.pairsDisplay.textContent = `${this.matchedPairsCount} / ${totalPairs}`;

        this.flippedCards = [];
        this.isLocked = false;

        // Verifica condição de vitória
        if (this.matchedPairsCount === totalPairs) {
          this.handleVictory();
        }
      }, 350);
    } else {
      // ERRO: Cartas Diferentes
      setTimeout(() => {
        card1.el.classList.add('mismatch');
        card2.el.classList.add('mismatch');
        this.audio.playMismatch();

        setTimeout(() => {
          card1.el.classList.remove('flipped', 'mismatch');
          card2.el.classList.remove('flipped', 'mismatch');
          card1.el.setAttribute('aria-label', `Carta fechada`);
          card2.el.setAttribute('aria-label', `Carta fechada`);

          this.flippedCards = [];
          this.isLocked = false;
        }, 850);
      }, 400);
    }
  }

  // Sequência e Celebração de Vitória
  handleVictory() {
    this.stopTimer();
    this.audio.playVictory();

    const totalPairs = this.difficultyConfigs[this.currentDifficulty].pairs;
    const finalSeconds = this.secondsElapsed;
    const finalMoves = this.movesCount;

    // Cálculo da taxa de precisão
    const accuracy = Math.min(100, Math.round((totalPairs / finalMoves) * 100));

    // Classificação por estrelas (1 a 3 estrelas)
    let stars = 1;
    if (finalMoves <= totalPairs * 1.5) {
      stars = 3;
    } else if (finalMoves <= totalPairs * 2.2) {
      stars = 2;
    }

    // Salva e checa se é um novo recorde pessoal
    const isNewRecord = this.records.checkAndSaveRecord(this.currentDifficulty, finalSeconds, finalMoves);

    // Preenche dados no modal de vitória
    document.getElementById('victory-time').textContent = this.formatTime(finalSeconds);
    document.getElementById('victory-moves').textContent = finalMoves;
    document.getElementById('victory-accuracy').textContent = `${accuracy}%`;
    document.getElementById('victory-difficulty').textContent = this.difficultyConfigs[this.currentDifficulty].label;

    const recordBanner = document.getElementById('new-record-alert');
    if (isNewRecord) {
      recordBanner.classList.remove('hidden');
    } else {
      recordBanner.classList.add('hidden');
    }

    // Renderiza as estrelas conquistadas
    const starItems = document.querySelectorAll('#victory-stars .star-item');
    starItems.forEach((item, idx) => {
      item.classList.remove('active');
      if (idx < stars) {
        item.classList.add('active');
      }
    });

    this.updateHUDRecord();

    // Dispara animação de confetes festivos
    this.triggerConfetti();

    // Abre modal após breve delay
    setTimeout(() => {
      this.openModal(this.dom.victoryModal);
    }, 600);
  }

  // Efeito de Confetes com canvas-confetti
  triggerConfetti() {
    if (typeof confetti !== 'function') return;

    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#10b981', '#0284c7', '#f43f5e', '#f59e0b', '#38bdf8']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#10b981', '#0284c7', '#f43f5e', '#f59e0b', '#38bdf8']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  // Compartilhar Resultado
  shareVictoryResult() {
    const diffLabel = this.difficultyConfigs[this.currentDifficulty].label;
    const timeFormatted = this.formatTime(this.secondsElapsed);
    const moves = this.movesCount;

    const textToShare = `💊 FarmaMatch - Jogo da Memória Farmacêutico!\n` +
      `Concluí o nível ${diffLabel} em ${timeFormatted} com ${moves} movimentos!\n` +
      `Será que você consegue superar o meu plantão? 🩺✨\n` +
      `Jogue agora: ${window.location.href}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToShare).then(() => {
        this.showToast('Resultado copiado para a área de transferência! 📋');
      }).catch(() => {
        this.showToast('Copie o texto para compartilhar!');
      });
    } else {
      this.showToast('Resultado gerado com sucesso!');
    }
  }

  // Cronômetro
  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      this.dom.timerDisplay.textContent = this.formatTime(this.secondsElapsed);
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds) {
    if (seconds === null || isNaN(seconds)) return '--:--';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Atualiza Recorde exibido no HUD
  updateHUDRecord() {
    const record = this.records.getRecord(this.currentDifficulty);
    if (record && record.time !== null) {
      this.dom.hudBestRecord.textContent = `${this.formatTime(record.time)} (${record.moves}m)`;
    } else {
      this.dom.hudBestRecord.textContent = '--:--';
    }
  }

  // Preenche dados do Modal de Recordes
  renderRecordsModal() {
    ['easy', 'medium', 'hard'].forEach(diff => {
      const rec = this.records.getRecord(diff);
      const timeEl = document.getElementById(`record-time-${diff}`);
      const movesEl = document.getElementById(`record-moves-${diff}`);

      if (timeEl && movesEl) {
        timeEl.textContent = rec.time !== null ? this.formatTime(rec.time) : '--:--';
        movesEl.textContent = rec.moves !== null ? `${rec.moves} jogadas` : '--';
      }
    });
  }

  // Gerenciamento de Abertura / Fechamento de Modais
  openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  // Exibição de Toast / Notificação Rápida
  showToast(message) {
    if (!this.dom.toast) return;
    this.dom.toast.textContent = message;
    this.dom.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.dom.toast.classList.remove('show');
    }, 3200);
  }
}

// Inicializa a aplicação assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.farmaMatchGame = new GameController();
});
