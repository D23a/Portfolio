document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

var menuToggle = document.querySelector('.mobile-menu-toggle');
var primaryNavigation = document.querySelector('#primary-navigation');

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener('click', function () {
    var isOpen = document.body.classList.toggle('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    document.body.classList.remove('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', function (event) {
    if (!document.body.classList.contains('mobile-menu-open')) return;
    if (primaryNavigation.contains(event.target) || menuToggle.contains(event.target)) return;
    document.body.classList.remove('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });

  primaryNavigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('mobile-menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

var navigationLinks = Array.from(document.querySelectorAll('#primary-navigation a'));
var navigationSections = navigationLinks.map(function (link) {
  return document.querySelector(link.getAttribute('href'));
}).filter(Boolean);

function updateActiveNavigation() {
  var currentSection = navigationSections.reduce(function (current, section) {
    if (section.getBoundingClientRect().top <= 150) return section;
    return current;
  }, navigationSections[0]);

  navigationLinks.forEach(function (link) {
    var isActive = currentSection && link.getAttribute('href') === '#' + currentSection.id;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();
