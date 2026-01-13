export async function getMorrisonWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=39.6654&longitude=-105.2057&current_weather=true&temperature_unit=fahrenheit",
      { next: { revalidate: 600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.current_weather;
  } catch (e) {
    return null;
  }
}
