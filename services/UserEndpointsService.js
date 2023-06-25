/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Check if user exists
*
* displayName String  (optional)
* username String  (optional)
* returns UserExists
* */
const checkIfUserExists = ({ displayName, username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        displayName,
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
* Create new user
*
* userDto UserDto  (optional)
* returns CreateResponse
* */
const createUser = ({ userDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userDto,
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
* Generate login
*
* fullName String 
* returns String
* */
const generateLogin = ({ fullName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fullName,
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
* Get all users
*
* returns List
* */
const getAllUsers = () => new Promise(
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
* /user/test
*
* tokenValue String  (optional)
* issuedAt String  (optional)
* expiresAt String  (optional)
* headers String  (optional)
* claims String  (optional)
* id String  (optional)
* notBefore String  (optional)
* audience List  (optional)
* issuer String  (optional)
* subject String  (optional)
* returns Map
* */
const getNickname = ({ tokenValue, issuedAt, expiresAt, headers, claims, id, notBefore, audience, issuer, subject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        tokenValue,
        issuedAt,
        expiresAt,
        headers,
        claims,
        id,
        notBefore,
        audience,
        issuer,
        subject,
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
* Get user by username
*
* username String 
* returns User
* */
const getUser = ({ username }) => new Promise(
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
/**
* Get users by aircraft
*
* aircraft String 
* returns List
* */
const getUsersByAircraft = ({ aircraft }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        aircraft,
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
* Get users by business company type
*
* bct String 
* returns List
* */
const getUsersByBCT = ({ bct }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        bct,
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
* Get users by company
*
* embCompanyCode String 
* returns List
* */
const getUsersByCompany = ({ embCompanyCode }) => new Promise(
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
* Get users by market
*
* market String 
* returns List
* */
const getUsersByMarket = ({ market }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Get users by name
*
* displayName String 
* returns List
* */
const getUsersByName = ({ displayName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        displayName,
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
* Get users by object
*
* userCn String  (optional)
* userDisplayName String  (optional)
* userEmbStatus String  (optional)
* userEmbProfile String  (optional)
* userMail String  (optional)
* userMail2 String  (optional)
* userTelephoneNumber String  (optional)
* userExtensionTelephoneNumber String  (optional)
* userSecondaryPhone String  (optional)
* applicationDn String  (optional)
* serviceDn String  (optional)
* companyDisplayName String  (optional)
* companyEmbStatus String  (optional)
* companyAddress String  (optional)
* companyCountry String  (optional)
* companyLocation String  (optional)
* userEmbApprovalName String  (optional)
* userEmbApprovalDate String  (optional)
* creationDate String  (optional)
* lastUpdateDate String  (optional)
* bct String  (optional)
* market String  (optional)
* aircraftType String  (optional)
* returns List
* */
const getUsersByObject = ({ userCn, userDisplayName, userEmbStatus, userEmbProfile, userMail, userMail2, userTelephoneNumber, userExtensionTelephoneNumber, userSecondaryPhone, applicationDn, serviceDn, companyDisplayName, companyEmbStatus, companyAddress, companyCountry, companyLocation, userEmbApprovalName, userEmbApprovalDate, creationDate, lastUpdateDate, bct, market, aircraftType }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userCn,
        userDisplayName,
        userEmbStatus,
        userEmbProfile,
        userMail,
        userMail2,
        userTelephoneNumber,
        userExtensionTelephoneNumber,
        userSecondaryPhone,
        applicationDn,
        serviceDn,
        companyDisplayName,
        companyEmbStatus,
        companyAddress,
        companyCountry,
        companyLocation,
        userEmbApprovalName,
        userEmbApprovalDate,
        creationDate,
        lastUpdateDate,
        bct,
        market,
        aircraftType,
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
* Get users by service
*
* service String 
* returns List
* */
const getUsersByService = ({ service }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        service,
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
* Update user
*
* inlineObject InlineObject  (optional)
* returns String
* */
const updateUser = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
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
  checkIfUserExists,
  createUser,
  generateLogin,
  getAllUsers,
  getNickname,
  getUser,
  getUsersByAircraft,
  getUsersByBCT,
  getUsersByCompany,
  getUsersByMarket,
  getUsersByName,
  getUsersByObject,
  getUsersByService,
  updateUser,
};
