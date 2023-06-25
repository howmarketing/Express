/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get users to impersonate
*
* displayName String  (optional)
* email String  (optional)
* companyName String  (optional)
* returns List
* */
const getUsersToImpersonate = ({ displayName, email, companyName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        displayName,
        email,
        companyName,
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
* Impersonate a user
*
* inlineObject13 InlineObject13  (optional)
* returns String
* */
const impersonate = ({ inlineObject13 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject13,
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
  getUsersToImpersonate,
  impersonate,
};
