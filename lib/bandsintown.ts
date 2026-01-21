export async function getBandsintownData(artistName: string) {
  const appId = process.env.BANDSINTOWN_APP_ID;
  const url = `https://rest.bandsintown.com/artists/${encodeURIComponent(artistName)}?app_id=${appId}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    return await res.json();
  } catch (e) {
    return null;
  }
}
