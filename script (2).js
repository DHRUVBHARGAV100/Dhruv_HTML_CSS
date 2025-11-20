// Toggle active class for layout
document.querySelectorAll('.layout').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.layout').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Toggle active class for color buttons
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Toggle active preset
document.querySelectorAll('.preset').forEach(preset => {
  preset.addEventListener('click', () => {
    document.querySelectorAll('.preset').forEach(p => p.classList.remove('active'));
    preset.classList.add('active');
  });
});

// Toggle active font
document.querySelectorAll('.font').forEach(font => {
  font.addEventListener('click', () => {
    document.querySelectorAll('.font').forEach(f => f.classList.remove('active'));
    font.classList.add('active');
  });
});

// Font size slider
const slider = document.getElementById('sizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
slider.addEventListener('input', () => {
  fontSizeValue.textContent = slider.value + "px";
});
