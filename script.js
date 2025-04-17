window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
