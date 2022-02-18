// Types
import { Weather } from '../App.js';
import { Geoloc } from '../components/ui/SideBar.js';

const apiKey = '60eb3e8bdb2d085deb038fde4091c6d9';

export const getWeather = async (lat: number, lng: number): Promise<Weather> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=${apiKey}`
  );

  const data = await res.json();

  data.daily.splice(-3);
  return data;
};

export const getLocation = async (lat: number, lng: number): Promise<Geoloc> => {
  const res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=${apiKey}`);

  const data = await res.json();

  return data[0];
};

export const getGeoLoc = async (place: string): Promise<Geoloc> => {
  const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=${apiKey}`);

  const data = await res.json();

  return data[0];
};
