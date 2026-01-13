(async function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    document.getElementById("title").textContent = "Show not found";
    return;
  }

  try {
    const res = await fetch("/api/calendar?year=2026");
    const data = await res.json();

    if (!data.events) throw new Error("No events");

    const show = data.events.find(
      e =>
        e.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") === slug
    );

    if (!show) {
      document.getElementById("title").textContent = "Show not found";
      return;
    }

    // Format date → "June 23rd"
    const d = new Date(show.date);
    const day = d.getDate();
    const suffix =
      day % 10 === 1 && day !== 11 ? "st" :
      day % 10 === 2 && day !== 12 ? "nd" :
      day % 10 === 3 && day !== 13 ? "rd" : "th";

    const formatted =
      d.toLocaleString("en-US", { month: "long" }) +
      " " +
      day +
      suffix;

    document.getElementById("date").textContent = formatted;
    document.getElementById("title").textContent = show.title;

  } catch (err) {
    console.error(err);
    document.getElementById("title").textContent = "Error loading show";
  }
})();
