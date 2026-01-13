// tm-images.js
// Inject Ticketmaster images into show cards

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const titleEl = card.querySelector("h3");
    if (!titleEl) return;

    const title = titleEl.textContent.trim();

    const img = document.createElement("img");
    img.src = `/api/tm-image?q=${encodeURIComponent(title)}`;
    img.alt = title;
    img.loading = "lazy";

    img.style.width = "100%";
    img.style.height = "220px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";
    img.style.marginBottom = "14px";
    img.style.background = "#111";

    // insert image at top of card
    card.insertBefore(img, card.firstChild);
  });
});
