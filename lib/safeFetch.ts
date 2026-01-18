export async function fetchJSON<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return (await res.json()) as T;
}
