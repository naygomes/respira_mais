const getAirQualityLevel: (value: number) => string = (value) => {
  if (value < 0 || value > 200) {
    throw new Error('O valor deve estar entre 0 e 200.');
  }

  if (value <= 50) {
    return 'Bom';
  } else if (value <= 100) {
    return 'Moderado';
  } else if (value <= 150) {
    return 'Ruim';
  } else {
    return 'Péssimo';
  }
};

export default getAirQualityLevel;
