import carData from './carData';
import cityData from './cityData';
import bodyTypeData from './bodyTypeData';
import categoryData from './categoryData';
import colorData from './colorData';
import driveTypeData from './driveTypeData';
import engineTypeData from './engineTypeData';
import technicalStateData from './technicalStateData';
import transmissionTypeData from './transmissionTypeData';

class DataAccessor {
  constructor() {
    this.brandsAndModels = carData.brandsAndModels;
    this.regionsAndCities = cityData.regionsAndCities;
    this.bodyType = bodyTypeData.bodyType;
    this.category = categoryData.category;
    this.color = colorData.color;
    this.driveType = driveTypeData.driveType;
    this.engineType = engineTypeData.engineType;
    this.technicalState = technicalStateData.technicalState;
    this.transmissionType = transmissionTypeData.transmissionType;
  }

  getModelsByBrand(brand) {
    return this.brandsAndModels[brand] || [];
  }

  getCitiesByRegion(region) {
    return this.regionsAndCities[region] || [];
  }

  getModels() {
    return this.brandsAndModels ;
  }

  getRegion() {
    return this.regionsAndCities ;
  }

 
  getBodyTypes() {
    return this.bodyType || [];
  }

  getCategories() {
    return this.category || [];
  }

  getColors() {
    return this.color || [];
  }

  getDriveTypes() {
    return this.driveType || [];
  }

  getEngineTypes() {
    return this.engineType || [];
  }

  getTechnicalStates() {
    return this.technicalState || [];
  }

  getTransmissionTypes() {
    return this.transmissionType || [];
  }

  getYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 1999;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    return years;
  }
}

export default DataAccessor;
