/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Export user records
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
* returns Object
* */
const exportUserRecords = ({ userCn, userDisplayName, userEmbStatus, userEmbProfile, userMail, userMail2, userTelephoneNumber, userExtensionTelephoneNumber, userSecondaryPhone, applicationDn, serviceDn, companyDisplayName, companyEmbStatus, companyAddress, companyCountry, companyLocation, userEmbApprovalName, userEmbApprovalDate, creationDate, lastUpdateDate, bct, market, aircraftType }) => new Promise(
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
* Export company records
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
* returns Object
* */
const getReportCompaniesByObject = ({ embCompanyCode, displayName, embStatus, streetAddress, location, country, postalCode, applicationDm, serviceDn, bct, market, aircraftType, adminDisplayName, adminEmbStatus, adminEmail, adminEmail2, adminTelephoneNumber, adminExtensionTelephone, approvalName, approvalDate, creationDate, lastDateStatus }) => new Promise(
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

module.exports = {
  exportUserRecords,
  getReportCompaniesByObject,
};
