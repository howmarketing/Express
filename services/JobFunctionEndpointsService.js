/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add and remove service to user
*
* userServiceAddRemovePayload UserServiceAddRemovePayload  (optional)
* returns Object
* */
const addAndRemoveServiceToUser = ({ userServiceAddRemovePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userServiceAddRemovePayload,
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
* Add application to company
*
* companyApplicationPayload CompanyApplicationPayload  (optional)
* returns String
* */
const addApplicationToCompany = ({ companyApplicationPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyApplicationPayload,
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
* Add service to category
*
* categoryPayload CategoryPayload  (optional)
* returns String
* */
const addServiceToCategory = ({ categoryPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryPayload,
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
* Add service to company
*
* companyServicePayload CompanyServicePayload  (optional)
* returns String
* */
const addServiceToCompany = ({ companyServicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyServicePayload,
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
* Add service to user
*
* userServicePayload UserServicePayload  (optional)
* returns String
* */
const addServiceToUser = ({ userServicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userServicePayload,
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
* Associate content admin to application
*
* contentAdminAppPayload ContentAdminAppPayload  (optional)
* returns ContentAdminApp
* */
const associateContentAdminToApplication = ({ contentAdminAppPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contentAdminAppPayload,
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
* Create service
*
* servicePayload ServicePayload  (optional)
* returns CreateResponse
* */
const createService = ({ servicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        servicePayload,
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
* Delete content admin from application
*
* contentAdminAppPayload ContentAdminAppPayload  (optional)
* returns Object
* */
const deleteContentAdminFromApplication = ({ contentAdminAppPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contentAdminAppPayload,
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
* Delete service
*
* servicePayload ServicePayload  (optional)
* returns Object
* */
const deleteService = ({ servicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        servicePayload,
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
* Get all applications
*
* returns List
* */
const getAllApplications = () => new Promise(
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
* Get all group access applications
*
* returns List
* */
const getAllGroupAccessApplications = () => new Promise(
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
* Get all services
*
* returns List
* */
const getAllServices = () => new Promise(
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
* Get applications from company
*
* embCompanyCode String 
* returns List
* */
const getApplicationsFromCompany = ({ embCompanyCode }) => new Promise(
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
* Get applications from user
*
* userDn String 
* returns List
* */
const getApplicationsFromUser = ({ userDn }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userDn,
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
* Get content admin applications
*
* returns List
* */
const getContentAdminApplications = () => new Promise(
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
* Get links applications from user
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
* returns List
* */
const getLinksApplicationsFromUser = ({ tokenValue, issuedAt, expiresAt, headers, claims, id, notBefore, audience, issuer, subject }) => new Promise(
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
* Get services from application
*
* applicationDn String 
* returns List
* */
const getServicesFromApplication = ({ applicationDn }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        applicationDn,
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
* Get services from company
*
* embCompanyCode String 
* returns List
* */
const getServicesFromCompany = ({ embCompanyCode }) => new Promise(
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
* Get services from user
*
* userDn String 
* returns List
* */
const getServicesFromUser = ({ userDn }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userDn,
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
* Remove application from company
*
* companyApplicationPayload CompanyApplicationPayload  (optional)
* returns Object
* */
const removeApplicationFromCompany = ({ companyApplicationPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyApplicationPayload,
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
* Remove service from category
*
* categoryPayload CategoryPayload  (optional)
* returns Object
* */
const removeServiceFromCategory = ({ categoryPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryPayload,
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
* Remove service from company
*
* companyServicePayload CompanyServicePayload  (optional)
* returns Object
* */
const removeServiceFromCompany = ({ companyServicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyServicePayload,
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
* Remove service from user
*
* userServicePayload UserServicePayload  (optional)
* returns Object
* */
const removeServiceFromUser = ({ userServicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userServicePayload,
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
* Update service
*
* servicePayload ServicePayload  (optional)
* returns String
* */
const updateService = ({ servicePayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        servicePayload,
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
  addAndRemoveServiceToUser,
  addApplicationToCompany,
  addServiceToCategory,
  addServiceToCompany,
  addServiceToUser,
  associateContentAdminToApplication,
  createService,
  deleteContentAdminFromApplication,
  deleteService,
  getAllApplications,
  getAllGroupAccessApplications,
  getAllServices,
  getApplicationsFromCompany,
  getApplicationsFromUser,
  getContentAdminApplications,
  getLinksApplicationsFromUser,
  getServicesFromApplication,
  getServicesFromCompany,
  getServicesFromUser,
  removeApplicationFromCompany,
  removeServiceFromCategory,
  removeServiceFromCompany,
  removeServiceFromUser,
  updateService,
};
