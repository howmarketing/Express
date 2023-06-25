/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create company
*
* companyDto CompanyDto  (optional)
* returns CreateResponse
* */
const createCompany = ({ companyDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyDto,
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
* Get companies by application
*
* embCompanyResource String 
* returns List
* */
const getCompaniesByApplication = ({ embCompanyResource }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        embCompanyResource,
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
* Get companies by name
*
* displayName String 
* returns CompanyExistsDto
* */
const getCompaniesByName = ({ displayName }) => new Promise(
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
* Get companies by object
*
* embCompanyCode String  (optional)
* displayName String  (optional)
* embStatus String  (optional)
* streetAddress String  (optional)
* location String  (optional)
* country String  (optional)
* postalCode String  (optional)
* applicationDm String  (optional)
* serviceDn String  (optional)
* bct String  (optional)
* market String  (optional)
* aircraftType String  (optional)
* adminDisplayName String  (optional)
* adminEmbStatus String  (optional)
* adminEmail String  (optional)
* adminEmail2 String  (optional)
* adminTelephoneNumber String  (optional)
* adminExtensionTelephone String  (optional)
* approvalName String  (optional)
* approvalDate String  (optional)
* creationDate String  (optional)
* lastDateStatus String  (optional)
* returns List
* */
const getCompaniesByObject = ({ embCompanyCode, displayName, embStatus, streetAddress, location, country, postalCode, applicationDm, serviceDn, bct, market, aircraftType, adminDisplayName, adminEmbStatus, adminEmail, adminEmail2, adminTelephoneNumber, adminExtensionTelephone, approvalName, approvalDate, creationDate, lastDateStatus }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        embCompanyCode,
        displayName,
        embStatus,
        streetAddress,
        location,
        country,
        postalCode,
        applicationDm,
        serviceDn,
        bct,
        market,
        aircraftType,
        adminDisplayName,
        adminEmbStatus,
        adminEmail,
        adminEmail2,
        adminTelephoneNumber,
        adminExtensionTelephone,
        approvalName,
        approvalDate,
        creationDate,
        lastDateStatus,
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
* Get company
*
* embCompanyCode String 
* returns Company
* */
const getCompany = ({ embCompanyCode }) => new Promise(
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
* Get company admin from company
*
* embCompanyCode String 
* returns User
* */
const getCompanyAdminFromCompany = ({ embCompanyCode }) => new Promise(
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
* Get companies from user
*
* username String 
* returns List
* */
const getCompanyFromUser = ({ username }) => new Promise(
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
* Update company
*
* inlineObject2 InlineObject2  (optional)
* returns String
* */
const updateCompany = ({ inlineObject2 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject2,
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
  createCompany,
  getCompaniesByApplication,
  getCompaniesByName,
  getCompaniesByObject,
  getCompany,
  getCompanyAdminFromCompany,
  getCompanyFromUser,
  updateCompany,
};
