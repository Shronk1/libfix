function modifyHref() {
  // Znajdź oczekiwany znacznik <a> 
  const link = document.querySelector('a[href^="javascript:otworz_w_nowym_oknie"]');
  // Podmienia link na nie wymagający js
  link.href = '/przegladaj_plan_lekcji';
}

// Wywołaj funkcję po załadowaniu strony
window.addEventListener('load', modifyHref);
