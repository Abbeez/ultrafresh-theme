document.addEventListener("DOMContentLoaded", function () {
  // Select all product titles you want to affect
  document
    .querySelectorAll(".product__title h1, .product__title h2.h1")
    .forEach(function (title) {
      // List the words you want to accent
      const keywords = ["Tape", "Pull Up"];
      let html = title.innerHTML;
      keywords.forEach(function (word) {
        // RegExp: match whole word, case-insensitive
        html = html.replace(
          new RegExp(`\\b(${word})\\b`, "gi"),
          '<span class="product__title-accent">$1</span>'
        );
      });
      title.innerHTML = html;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle smooth scrolling with offset
  function smoothScrollToAnchor(targetId, offset = -100) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return false;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    return true;
  }

  // Handle all anchor link clicks
  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    const targetId = href.substring(1); // Remove the #

    // Only prevent default if target exists
    if (document.getElementById(targetId)) {
      e.preventDefault();
      smoothScrollToAnchor(targetId, -100);

      // Update URL without jumping
      history.pushState(null, null, href);
    }
  });

  // Handle direct URL access (e.g., yoursite.com#section3)
  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.substring(1);
      smoothScrollToAnchor(targetId, -150);
    }, 100);
  }
});
