import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PLANET_API = 'https://swapi.dev/api/planets/';

interface IPlanets {
  name?: string;
  population?: string;
  climate?: string;
  terrain?: string;
  films?: [string];
}

async function fetchPlanets() {
  const idPlanet = Math.floor(Math.random() * 60 + 1);
  const response = await axios.get<IPlanets>(`${PLANET_API}${idPlanet}/`);

  return response.data;
}

export const usePlanet = () =>
  useQuery(['planet'], () => fetchPlanets(), {
    onSuccess: data => data,
    refetchOnWindowFocus: false,
  });
