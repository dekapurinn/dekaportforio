const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-in, .work').forEach(el => {
  observer.observe(el);
});
