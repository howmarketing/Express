/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Expire token
*
* token String 
* returns Boolean
* */
const expireToken = ({ token }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        token,
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
* Forgot password
*
* passwordPayload PasswordPayload  (optional)
* returns String
* */
const forgotPassword = ({ passwordPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        passwordPayload,
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
* Get users to set password
*
* cn String  (optional)
* dn String  (optional)
* email String  (optional)
* password String  (optional)
* username String  (optional)
* returns List
* */
const getUsersToSetPassword = ({ cn, dn, email, password, username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        cn,
        dn,
        email,
        password,
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
/**
* Set user password
*
* passwordPayload PasswordPayload  (optional)
* returns CreateResponse
* */
const setUserPassword = ({ passwordPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        passwordPayload,
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
* Verify token
*
* token String 
* returns UrlExpireToken
* */
const verifyToken = ({ token }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        token,
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
  expireToken,
  forgotPassword,
  getUsersToSetPassword,
  setUserPassword,
  verifyToken,
};
