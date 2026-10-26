// js/main.js - Slide Deck Controller, keyboard shortcuts & responsive interactions

let currentSlideIndex = 0;
let slides = [];
let dotsContainer;
let counterElem;
let prevBtn, nextBtn, fullscreenBtn, restartBtn;

function initDeck() {
  slides = Array.from(document.querySelectorAll('.slide'));
  dotsContainer = document.getElementById('dots-container');
  counterElem = document.getElementById('slide-counter');
  prevBtn = document.getElementById('prev-btn');
  nextBtn = document.getElementById('next-btn');
  fullscreenBtn = document.getElementById('fullscreen-btn');
  restartBtn = document.getElementById('restart-btn');

  if (!slides.length) return;

  // Build dots indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot-indicator ${idx === 0 ? 'active' : ''}`;
      dot.title = `Ir a diapositiva ${idx + 1}`;
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  // Bind Buttons
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullScreen);
  if (restartBtn) restartBtn.addEventListener('click', () => goToSlide(0));

  // Bind Keyboard navigation
  window.addEventListener('keydown', handleKeyNavigation);

  // Bind Touch Gestures
  initTouchGestures();

  // Initial update
  updateDeckState();

  // Bind Flip Cards
  initFlipCards();

  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initFlipCards() {
  // Make cards keyboard accessible
  document.querySelectorAll('.flip-card-container').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Tarjeta interactiva de dos caras. Haz clic para ver contenido.');
  });

  // Click toggle
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.flip-card-container');
    if (card) {
      card.classList.toggle('is-flipped');
    }
  });

  // Keyboard toggle (Enter or Space) when focused on a card
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList.contains('flip-card-container')) {
      e.preventDefault();
      document.activeElement.classList.toggle('is-flipped');
    }
  });
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length || index === currentSlideIndex) return;

  // Reset any flipped cards in previous slide for a fresh return
  slides[currentSlideIndex].querySelectorAll('.flip-card-container.is-flipped').forEach(card => {
    card.classList.remove('is-flipped');
  });

  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = index;
  slides[currentSlideIndex].classList.add('active');

  // Trigger Three.js pulse
  if (typeof triggerSlideParticlePulse === 'function') {
    triggerSlideParticlePulse();
  }

  updateDeckState();
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    goToSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
}

function updateDeckState() {
  // Update Slide visibility class
  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // Update dots
  const dots = document.querySelectorAll('.dot-indicator');
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Update counter
  if (counterElem) {
    counterElem.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  }

  // Update button states
  if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
  if (nextBtn) nextBtn.disabled = currentSlideIndex === slides.length - 1;

  // Refresh lucide icons if changed
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function handleKeyNavigation(e) {
  switch (e.key) {
    case 'ArrowRight':
    case 'PageDown':
    case ' ':
      e.preventDefault();
      nextSlide();
      break;
    case 'ArrowLeft':
    case 'PageUp':
      e.preventDefault();
      prevSlide();
      break;
    case 'Home':
      e.preventDefault();
      goToSlide(0);
      break;
    case 'End':
      e.preventDefault();
      goToSlide(slides.length - 1);
      break;
    case 'f':
    case 'F':
      toggleFullScreen();
      break;
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function initTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  window.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    // Only trigger slide change if horizontal swipe is dominant & significant
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) nextSlide();
      else prevSlide();
    }
  }
}

window.addEventListener('DOMContentLoaded', initDeck);

// ── QR Fullscreen Modal ──────────────────────────────
function initQRModal() {
  const overlay = document.getElementById('qr-modal');
  const closeBtn = document.getElementById('qr-modal-close');
  const triggers = document.querySelectorAll('#qr-trigger, .qr-badge-trigger');

  if (!overlay) return;

  function openModal(e) {
    e.stopPropagation();
    overlay.classList.add('qr-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('qr-open');
    document.body.style.overflow = '';
  }

  triggers.forEach(t => t.addEventListener('click', openModal));

  // Click on backdrop closes
  overlay.addEventListener('click', closeModal);

  // Click on card itself doesn't close
  overlay.querySelector('.qr-modal-card')?.addEventListener('click', e => e.stopPropagation());

  // Close button
  closeBtn?.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });

  // ESC key closes
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('qr-open')) closeModal();
  });
}

window.addEventListener('DOMContentLoaded', initQRModal);
