// Miss Swiss — mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.nav__burger');
  var links = document.querySelector('.nav__links');
  if (!burger || !links) return;

  burger.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the menu after tapping a link
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});