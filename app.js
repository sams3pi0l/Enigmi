(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const storageKey = 'enigmi.web.progress.v1';
  let saved = [];
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (data?.version === 1 && Array.isArray(data.solved)) saved = data.solved;
  } catch { $('storage-warning').hidden = false; }
  const game = new EnigmiGame(ENIGMI_LEVELS, saved);
  const defaultFeedback = 'Puoi usare anche la tastiera: numeri, Invio e Backspace.';
  let feedbackTimer;
  const lock = '<svg class="lock" viewBox="0 0 16 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 7V5a4 4 0 0 1 8 0v2"/><rect x="1" y="7" width="14" height="10" rx="2"/><path d="M8 11v3"/></svg>';
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify({version: 1, solved: game.solved})); $('storage-warning').hidden = true; }
    catch { $('storage-warning').hidden = false; }
  }
  function feedback(message = defaultFeedback, kind = '') {
    clearTimeout(feedbackTimer);
    const element = $('feedback');
    const repeatedError = kind === 'error' && element.classList.contains('error');
    element.className = 'feedback ' + kind;
    element.textContent = repeatedError ? '' : message;
    if (repeatedError) {
      feedbackTimer = setTimeout(() => { element.textContent = message; }, 160);
    }
  }
  function renderNavigation() {
    $('levels').replaceChildren();
    for (let i = game.page * 10; i < Math.min(game.page * 10 + 10, ENIGMI_LEVELS.length); i++) {
      const button = document.createElement('button');
      button.className = 'level-button' + (i === game.level ? ' active' : '');
      button.disabled = !game.canSelect(i);
      button.innerHTML = '<span>Enigma ' + (i + 1) + '</span><span class="state">' + (game.solved[i] ? '✓' : button.disabled ? lock : '') + '</span>';
      button.setAttribute('aria-label', 'Enigma ' + (i + 1) + (game.solved[i] ? ', risolto' : button.disabled ? ', bloccato' : ', da risolvere'));
      if (i === game.level) button.setAttribute('aria-current', 'step');
      button.onclick = () => select(i);
      $('levels').append(button);
    }
    const start = Math.floor(game.page / 2) * 2;
    $('ranges').replaceChildren();
    for (let p = start; p < Math.min(start + 2, 10); p++) {
      const button = document.createElement('button');
      button.textContent = (p * 10 + 1) + '–' + (p * 10 + 10);
      button.className = p === game.page ? 'active' : '';
      button.setAttribute('aria-label', 'Livelli ' + button.textContent);
      button.setAttribute('aria-pressed', String(p === game.page));
      button.onclick = () => { game.page = p; renderNavigation(); };
      $('ranges').append(button);
    }
    $('group-prev').disabled = start === 0;
    $('group-next').disabled = start === 8;
    $('previous').disabled = !game.canSelect(game.level - 1);
    $('next').disabled = !game.canSelect(game.level + 1);
    $('next').classList.toggle('primary', game.solved[game.level]);
    $('progress-label').textContent = game.count() + ' / 100 completati';
    $('progress').value = game.count();
  }
  function renderHelp() {
    const level = ENIGMI_LEVELS[game.level];
    $('help-panel').hidden = !game.help;
    for (const [id, kind] of [['hint', 1], ['solution', 2]]) {
      $(id).classList.toggle('active', game.help === kind);
      $(id).setAttribute('aria-expanded', String(game.help === kind));
    }
    if (!game.help) return;
    $('help-title').textContent = game.help === 1 ? 'Indizio' : 'Soluzione';
    $('help-image').src = game.help === 1 ? level.hint : level.solution;
    $('help-image').alt = (game.help === 1 ? 'Indizio' : 'Soluzione') + ' per l’enigma ' + level.id;
    $('help-caption').textContent = game.help === 1 ? 'Un suggerimento per cambiare prospettiva.' : 'Risposta: ' + level.answer;
  }
  function renderLevel() {
    const level = ENIGMI_LEVELS[game.level];
    $('title').textContent = level.title;
    $('instruction').textContent = [11, 21, 51, 52, 85].includes(level.id) ? 'Inserisci le quattro cifre da sinistra a destra.' : 'Osserva l’enigma e trova il numero mancante.';
    $('level-number').textContent = String(level.id).padStart(2, '0') + ' / 100';
    $('puzzle').src = level.puzzle;
    $('puzzle').alt = 'Enigma ' + level.id + ': ' + level.title + '. Trova il numero mancante nella figura.';
    $('answer').value = game.input;
    feedback(); renderNavigation(); renderHelp();
  }
  function select(i) { if (game.select(i)) renderLevel(); }
  function setInput(value) { game.setInput(value); $('answer').value = game.input; }
  function submit() {
    const result = game.submit();
    if (result.kind === 'ignored') return;
    feedback(result.message, result.kind);
    if (result.kind === 'success') { save(); renderNavigation(); }
    if (game.ending) { $('game').hidden = true; $('ending').hidden = false; $('ending-title').focus(); }
  }
  $('answer').addEventListener('input', e => setInput(e.target.value));
  $('answer-form').onsubmit = e => { e.preventDefault(); submit(); };
  for (let i = 0; i < 10; i++) {
    const button = document.createElement('button'); button.textContent = i;
    button.onclick = () => setInput(game.input + i); $('keypad').append(button);
  }
  const back = document.createElement('button'); back.textContent = 'Canc.'; back.setAttribute('aria-label', 'Cancella ultima cifra');
  back.onclick = () => setInput(game.input.slice(0, -1)); $('keypad').append(back);
  $('hint').onclick = () => { game.help = game.help === 1 ? 0 : 1; renderHelp(); };
  $('solution').onclick = () => { game.help = game.help === 2 ? 0 : 2; renderHelp(); };
  $('help-close').onclick = () => { const origin = game.help === 1 ? 'hint' : 'solution'; game.help = 0; renderHelp(); $(origin).focus(); };
  $('previous').onclick = () => select(game.level - 1);
  $('next').onclick = () => select(game.level + 1);
  $('group-prev').onclick = () => { game.page = Math.max(0, Math.floor(game.page / 2) * 2 - 2); renderNavigation(); };
  $('group-next').onclick = () => { game.page = Math.min(8, Math.floor(game.page / 2) * 2 + 2); renderNavigation(); };
  $('reset').onclick = () => $('reset-dialog').showModal();
  $('reset-cancel').onclick = () => $('reset-dialog').close();
  $('reset-confirm').onclick = () => { game.reset(); save(); renderLevel(); $('reset-dialog').close(); };
  $('return').onclick = () => { game.ending = false; $('ending').hidden = true; $('game').hidden = false; select(0); $('reset').focus(); };
  document.addEventListener('keydown', e => {
    if ($('reset-dialog').open || game.ending || e.ctrlKey || e.metaKey || e.altKey) return;
    const inAnswer = e.target === $('answer');
    if (e.key === 'Delete') { e.preventDefault(); setInput(''); }
    else if (!inAnswer && /^[0-9]$/.test(e.key)) { e.preventDefault(); setInput(game.input + e.key); }
    else if (!inAnswer && e.key === 'Backspace') { e.preventDefault(); setInput(game.input.slice(0, -1)); }
    else if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { e.preventDefault(); submit(); }
  });
  // Capture before navigation handlers replace the clicked button.
  document.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button || button.disabled || !e.isTrusted) return;
    const touch = e.pointerType === 'touch' ||
      (e.pointerType == null && e.detail > 0 && matchMedia('(pointer: coarse)').matches);
    if (touch && typeof navigator.vibrate === 'function') {
      try { navigator.vibrate(12); } catch { /* Optional device feedback. */ }
    }
  }, true);
  const fullscreenDisplay = matchMedia('(display-mode: fullscreen)');
  function updateFullscreenButton() {
    const active = Boolean(document.fullscreenElement);
    $('fullscreen').hidden = !document.fullscreenEnabled || (fullscreenDisplay.matches && !active);
    $('fullscreen').textContent = active ? 'Esci da schermo intero' : 'Schermo intero';
    $('fullscreen').setAttribute('aria-pressed', String(active));
  }
  $('fullscreen').onclick = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
    } catch {
      feedback('Il browser non consente lo schermo intero in questo momento.');
    }
    updateFullscreenButton();
  };
  document.addEventListener('fullscreenchange', updateFullscreenButton);
  fullscreenDisplay.addEventListener('change', updateFullscreenButton);
  updateFullscreenButton();
  renderLevel();
})();
