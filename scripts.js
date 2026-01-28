document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  const dots = document.querySelectorAll('.gallery-dots .dot');
  const prev = document.querySelector('.gallery-arrow.prev');
  const next = document.querySelector('.gallery-arrow.next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentSlide = idx;
      showSlide(currentSlide);
    });
  });

  prev?.addEventListener('click', () => changeSlide(-1));
  next?.addEventListener('click', () => changeSlide(1));

  showSlide(currentSlide);
});
