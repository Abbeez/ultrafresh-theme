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
