export const config = { runtime: "edge" };

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const target = "https://earthos-console.denverairportpickup.workers.dev" + url.pathname + url.search;

  return fetch(target, {
    headers: req.headers,
    method: req.method,
    body: req.method === "GET" ? undefined : await req.arrayBuffer()
  });
}
