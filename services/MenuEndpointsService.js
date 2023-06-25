/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all menus
*
* username String 
* returns List
* */
const getMenus = ({ username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        username,
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
  getMenus,
};
