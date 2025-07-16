import React, { useEffect, useState } from 'react';
import type { CityResponse } from '../models';
import { fetchCities } from '../services/cityService';

type CitiesSelectorProps = {
  onSelectionChange: (
    departure: CityResponse | null,
    arrival: CityResponse | null,
  ) => void;
};

export default function CitiesSelector({
  onSelectionChange,
}: CitiesSelectorProps) {
  const [cities, setCities] = useState<CityResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [departureCity, setDepartureCity] = useState<string | ''>('');
  const [arrivalCity, setArrivalCity] = useState<string | ''>('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setDepartureCity(value || '');
  };

  const handleArrivalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setArrivalCity(value || '');
  };

  useEffect(() => {
    const loadCities = async () => {
      setLoading(true);
      try {
        const data = await fetchCities();
        setCities(data);
      } catch {
        setError('Failed to load cities');
      } finally {
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  useEffect(() => {
    const departure = cities.find((c) => c.name === departureCity) || null;
    const arrival = cities.find((c) => c.name === arrivalCity) || null;
    onSelectionChange(departure, arrival);
  }, [departureCity, arrivalCity, cities, onSelectionChange]);

  useEffect(() => {
    if (departureCity && arrivalCity && departureCity === arrivalCity) {
      setValidationError('Departure and arrival cannot be the same city.');
    } else {
      setValidationError(null);
    }
  }, [departureCity, arrivalCity]);

  if (loading) return <p>Loading cities…</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {validationError && (
        <p style={{ color: 'red', marginTop: '10px' }}>{validationError}</p>
      )}
      <label>
        Departure city:
        <select value={departureCity ?? ''} onChange={handleDepartureChange}>
          <option value="">-- Select departure --</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: 20 }}>
        Arrival city:
        <select value={arrivalCity ?? ''} onChange={handleArrivalChange}>
          <option value="">-- Select arrival --</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
