import { fetchJSON } from "@/lib/safeFetch";

type OpenMeteoResponse = {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
};

export async function getWeather() {
  try {
    const data = await fetchJSON<OpenMeteoResponse>(
      "https://api.open-meteo.com/v1/forecast?latitude=39.6654&longitude=-105.2057&current_weather=true&temperature_unit=fahrenheit",
      { next: { revalidate: 600 } }
    );

    return {
      current: {
        temp: Math.round(data.current_weather.temperature),
        condition: data.current_weather.weathercode,
        wind: data.current_weather.windspeed,
      },
    };
  } catch {
    return null;
  }
}
