/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* /login
*
* returns Object
* */
const login = () => new Promise(
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
  login,
};
