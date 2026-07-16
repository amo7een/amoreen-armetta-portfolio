// Reveal sections as they scroll into view.
// If IntersectionObserver is unavailable or reduced motion is enabled,
// all content is shown immediately.

(function () {
  const targets = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    prefersReducedMotion ||
    !("IntersectionObserver" in window) ||
    targets.length === 0
  ) {
    targets.forEach(function (element) {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  targets.forEach(function (element) {
    observer.observe(element);
  });
})();


// Open UX-writing examples in an accessible image lightbox.

(function () {
  const lightbox = document.querySelector("#image-lightbox");
  const lightboxImage = document.querySelector("#image-lightbox-image");
  const lightboxCaption = document.querySelector("#image-lightbox-caption");
  const closeButton = document.querySelector(".image-lightbox__close");
  const imageButtons = document.querySelectorAll(".ux-example__button");

  let lastTrigger = null;
  let savedScrollPosition = 0;

  if (
    !lightbox ||
    !lightboxImage ||
    !lightboxCaption ||
    !closeButton ||
    imageButtons.length === 0
  ) {
    return;
  }

  imageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const figure = button.closest(".ux-example");
      const image = button.querySelector(".ux-example__image");
      const caption = figure
        ? figure.querySelector("figcaption")
        : null;

      if (!image) {
        return;
      }

      lastTrigger = button;
      savedScrollPosition = window.scrollY;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = caption
        ? caption.textContent.trim()
        : "";

      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", function () {
    lightbox.close();
  });

  lightbox.addEventListener("click", function (event) {
    const bounds = lightbox.getBoundingClientRect();

    const clickedInside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!clickedInside) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("close", function () {
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";

    window.scrollTo(0, savedScrollPosition);

    if (lastTrigger) {
      lastTrigger.focus({ preventScroll: true });
    }
  });
})();
