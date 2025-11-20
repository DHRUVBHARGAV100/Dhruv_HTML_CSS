  const toggleBtn = document.getElementById('settingsToggle');
  const settingsPanel = document.getElementById('settingsPanel');

  toggleBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('show');
  });