import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IPlanets } from 'models/Planets';

const PLANET_API = 'https://swapi.dev/api/planets/';

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
