export async function getMorrisonWeather() {
  try {
    // Coordinates for Morrison, CO
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=39.65&longitude=-105.19&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph", { next: { revalidate: 300 } });
    const data = await res.json();
    return data.current;
  } catch (e) {
    return null;
  }
}
