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

  // Close the lightbox when the backdrop is clicked.
  lightbox.addEventListener("click", function (event) {
    const lightboxBounds = lightbox.getBoundingClientRect();

    const clickedInside =
      event.clientX >= lightboxBounds.left &&
      event.clientX <= lightboxBounds.right &&
      event.clientY >= lightboxBounds.top &&
      event.clientY <= lightboxBounds.bottom;

    if (!clickedInside) {
      lightbox.close();
    }
  });

  // Clear the enlarged image after the dialog closes.
  lightbox.addEventListener("close", function () {
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
  });
})();
