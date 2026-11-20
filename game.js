/* Pure game rules, shared by the browser and the Node tests. */
(function (root) {
  'use strict';
  class EnigmiGame {
    constructor(levels, saved = []) {
      this.levels = levels;
      this.solved = levels.map((_, i) => saved[i] === true);
      this.level = 0; this.page = 0; this.input = ''; this.help = 0; this.ending = false;
      this.select(this.nextUnsolved() < levels.length ? this.nextUnsolved() : 0);
    }
    count() { return this.solved.filter(Boolean).length; }
    nextUnsolved() { const i = this.solved.indexOf(false); return i < 0 ? this.levels.length : i; }
    canSelect(i) { return i >= 0 && i < this.levels.length && (this.solved[i] || i === this.nextUnsolved()); }
    select(i) {
      if (!this.canSelect(i)) return false;
      this.level = i; this.page = Math.floor(i / 10); this.input = ''; this.help = 0;
      return true;
    }
    setInput(value) { this.input = String(value).replace(/[^0-9]/g, '').slice(0, 8); }
    submit() {
      if (this.ending) return {kind: 'ignored'};
      if (!this.input) return {kind: 'error', message: 'Inserisci un numero per continuare.'};
      if (Number(this.input) !== this.levels[this.level].answer) return {kind: 'error', message: 'Non ancora. Osserva la regola e riprova.'};
      this.solved[this.level] = true;
      this.ending = this.level === this.levels.length - 1 && this.count() === this.levels.length;
      if (this.ending) this.help = 0;
      return {kind: 'success', message: this.count() === this.levels.length ? 'Hai risolto tutti i 100 enigmi!' : 'Esatto! Puoi passare al prossimo enigma.'};
    }
    reset() { this.solved.fill(false); this.ending = false; this.select(0); }
  }
  root.EnigmiGame = EnigmiGame;
  if (typeof module !== 'undefined') module.exports = EnigmiGame;
})(globalThis);
