/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add category to company
*
* inlineObject11 InlineObject11  (optional)
* returns String
* */
const addCategoryToCompany = ({ inlineObject11 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject11,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create aircraft type
*
* inlineObject10 InlineObject10  (optional)
* returns CreateResponse
* */
const createAircraftType = ({ inlineObject10 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject10,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create business company type
*
* inlineObject8 InlineObject8  (optional)
* returns CreateResponse
* */
const createBct = ({ inlineObject8 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject8,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create category
*
* inlineObject4 InlineObject4  (optional)
* returns CreateResponse
* */
const createCategory = ({ inlineObject4 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject4,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create market
*
* inlineObject6 InlineObject6  (optional)
* returns CreateResponse
* */
const createMarket = ({ inlineObject6 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject6,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete aircraft type
*
* aircraft String 
* jwt Jwt  (optional)
* returns String
* */
const deleteAircraftType = ({ aircraft, jwt }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        aircraft,
        jwt,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete business company type
*
* bct String 
* jwt Jwt  (optional)
* returns String
* */
const deleteBct = ({ bct, jwt }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        bct,
        jwt,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete category
*
* embCategoryId String 
* jwt Jwt  (optional)
* returns String
* */
const deleteCategory = ({ embCategoryId, jwt }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        embCategoryId,
        jwt,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete market
*
* market String 
* jwt Jwt  (optional)
* returns String
* */
const deleteMarket = ({ market, jwt }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        market,
        jwt,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all aircraft types
*
* returns List
* */
const getAllAircraftTypes = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all business company types
*
* returns List
* */
const getAllBcts = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all categories
*
* returns List
* */
const getAllCategories = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all markets
*
* returns List
* */
const getAllMarkets = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get categories from company
*
* embCompanyCode String 
* returns List
* */
const getCategoriesFromCompany = ({ embCompanyCode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        embCompanyCode,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get category
*
* categoryId String 
* returns List
* */
const getCategory = ({ categoryId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get markets and aircrafts by bct and market
*
* bct String 
* market String  (optional)
* returns List
* */
const getMarketsAndAircraftByBctAndMarket = ({ bct, market }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        bct,
        market,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove categories from company
*
* inlineObject12 InlineObject12  (optional)
* returns String
* */
const removeCategoryToCompany = ({ inlineObject12 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject12,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update aircraft type
*
* inlineObject9 InlineObject9  (optional)
* returns String
* */
const updateAircraftType = ({ inlineObject9 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject9,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update business company type
*
* inlineObject7 InlineObject7  (optional)
* returns String
* */
const updateBct = ({ inlineObject7 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject7,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update category
*
* inlineObject3 InlineObject3  (optional)
* returns String
* */
const updateCategory = ({ inlineObject3 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject3,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update market
*
* inlineObject5 InlineObject5  (optional)
* returns String
* */
const updateMarket = ({ inlineObject5 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject5,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addCategoryToCompany,
  createAircraftType,
  createBct,
  createCategory,
  createMarket,
  deleteAircraftType,
  deleteBct,
  deleteCategory,
  deleteMarket,
  getAllAircraftTypes,
  getAllBcts,
  getAllCategories,
  getAllMarkets,
  getCategoriesFromCompany,
  getCategory,
  getMarketsAndAircraftByBctAndMarket,
  removeCategoryToCompany,
  updateAircraftType,
  updateBct,
  updateCategory,
  updateMarket,
};
