// lib/weather.ts
/**
 * PARR v1.6 Weather Intelligence
 * Fetches 24-hour tactical forecast for Red Rocks.
 */

export async function fetchRedRocksWeather() {
  const LAT = 39.6654;
  const LON = -105.2054;
  
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=temperature_2m,precipitation_probability,weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver`
    );
    const data = await res.json();
    
    return {
      current: {
        temp: Math.round(data.current_weather.temperature),
        condition: data.current_weather.weathercode,
        wind: data.current_weather.windspeed
      },
      tonight: {
        low: Math.round(Math.min(...data.hourly.temperature_2m.slice(18, 24))),
        precip: Math.max(...data.hourly.precipitation_probability.slice(18, 24))
      }
    };
  } catch (err) {
    console.error("WEATHER_RECON_FAILURE:", err);
    return null;
  }
}
