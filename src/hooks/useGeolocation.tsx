// hooks/useGeolocation.js
import { Coordinates } from '@/interfaces';
import { useState, useEffect } from 'react';

const DEFAULT_LOCATION = { lat: -22.911112, lng: -43.205996 };

const useGeolocation = () => {
  const [location, setLocation] = useState<Coordinates>(DEFAULT_LOCATION);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      const success = (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setLoading(false);
      };

      const failure = (error: GeolocationPositionError) => {
        console.error('Erro ao obter a localização:', error);
        setError(error.message);
        setLoading(false);
      };

      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      setError('Geolocalização não é suportada pelo navegador.');
      setLoading(false);
    }
  }, []);

  return { location, error, loading };
};

export default useGeolocation;
