import carData from './carData';
import cityData from './cityData';

class DataAccessor {
    constructor() {
      this.brandsAndModels = carData.brandsAndModels;
      this.regionsAndCities = cityData.regionsAndCities;
    }
  
    getModelsByBrand(brand) {
      return this.brandsAndModels[brand] || [];
    }
  
    getCitiesByRegion(region) {
      return this.regionsAndCities[region] || [];
    }
  }
  
  export default DataAccessor;