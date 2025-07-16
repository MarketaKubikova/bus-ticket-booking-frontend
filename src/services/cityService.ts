import { CityManagementApi } from '../apis';
import type { CityResponse } from '../models';

const api = new CityManagementApi();

export async function fetchCities(): Promise<CityResponse[]> {
  const cities = await api.getAllCities();
  return cities.sort((a: { name: string }, b: { name: any }) =>
    a.name.localeCompare(b.name),
  );
}
