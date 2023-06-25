/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Contact Us
*
* companyCode String  (optional)
* displayName String  (optional)
* username String  (optional)
* userDn String  (optional)
* comment String  (optional)
* phone String  (optional)
* email String  (optional)
* returns String
* */
const contactUs = ({ companyCode, displayName, username, userDn, comment, phone, email }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyCode,
        displayName,
        username,
        userDn,
        comment,
        phone,
        email,
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
  contactUs,
};
