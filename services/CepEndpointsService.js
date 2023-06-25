/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get a list of countries with timezone
*
* returns List
* */
const getCountriesWithTimezone = () => new Promise(
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
* Get ddis
*
* returns List
* */
const getDdis = () => new Promise(
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

module.exports = {
  getCountriesWithTimezone,
  getDdis,
};
