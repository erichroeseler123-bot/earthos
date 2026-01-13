(async function () {
  console.log("[PARR] Loading live events from Worker");

  const API =
    "https://partyatredrocks.com/api/calendar?year=2026";

  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!Array.isArray(data.events)) {
      console.error("[PARR] Invalid payload", data);
      window.redRocks2026Events = [];
      return;
    }

    window.redRocks2026Events = data.events.map(e => ({
      slug: e.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      title: e.title,
      date: e.date,
      prettyDate: new Date(e.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      }),
      image: e.best_image || "",
      ticketsUrl: e.seatgeek_url,
      shuttlePrice: 59,
      suburbanPrice: 499,
    }));

    console.log(`[PARR] Loaded ${window.redRocks2026Events.length} events`);

    if (typeof renderEvents === "function") {
      renderEvents(window.redRocks2026Events);
    } else {
      window.dispatchEvent(new Event("eventsLoaded"));
    }
  } catch (err) {
    console.error("[PARR] Failed to load events", err);
    window.redRocks2026Events = [];
  }
})();
