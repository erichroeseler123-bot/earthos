export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Serve the EarthOS DCC Console on the Homepage
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const response = await fetch("https://partyatredrocks.pages.dev/index.html");
      return new Response(response.body, {
        headers: { "Content-Type": "text/html" }
      });
    }

    // 2. FOR ALL OTHER LINKS (like /faq or /schedule): 
    // Proxy back to your main Pages site so they don't 404
    return fetch(`https://partyatredrocks.pages.dev${url.pathname}`);
  }
};
