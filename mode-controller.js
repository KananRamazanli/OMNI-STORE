/* v9: mode selection and normal login screen; search/returns work in Demo only. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const screens = ['modeWelcome','realLoginScreen','loginScreen','demoWelcome','appShell'];
  const showOnly = id => {
    screens.forEach(x => {
      const el = $(x); if (el) el.classList.toggle('hidden', x !== id);
    });
  };
  const message = (el, text, cls='') => {
    if (!el) return;
    el.className = 'form-message' + (cls ? ' '+cls : '');
    el.textContent = text;
  };
  showOnly('modeWelcome');
  $('chooseDemoModeBtn')?.addEventListener('click', () => showOnly('demoWelcome'));
  $('backDemoModeBtn')?.addEventListener('click', () => showOnly('modeWelcome'));
  $('chooseRealModeBtn')?.addEventListener('click', () => {
    showOnly('realLoginScreen');
    message($('realLoginMessage'), 'Real mode is not connected to shared authentication and inventory yet. This login will work after the one-time backend deployment is completed.', 'error');
  });
  $('backFromRealLoginBtn')?.addEventListener('click', () => showOnly('modeWelcome'));
  $('realLoginForm')?.addEventListener('submit', ev => {
    ev.preventDefault();
    message($('realLoginMessage'), 'Sign-in is intentionally disabled because the shared backend has not been connected and tested. Do not use this build for real stock.', 'error');
  });
})();
