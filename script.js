

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('demoForm')?.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Form submitted successfully!");
    });

    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    toggleBtn?.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });

