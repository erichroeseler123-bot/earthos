export const runtime = "nodejs";

type CurrentWeather = {
  temperature: number;
  windspeed: number;
};

type WeatherResponse = {
  current_weather: CurrentWeather;
};

export async function getWeather(): Promise<CurrentWeather | null> {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=39.6654&longitude=-105.2057&current_weather=true&temperature_unit=fahrenheit",
      { next: { revalidate: 600 } }
    );

    if (!res.ok) return null;

    const data = (await res.json()) as WeatherResponse;
    return data.current_weather;
  } catch {
    return null;
  }
}
