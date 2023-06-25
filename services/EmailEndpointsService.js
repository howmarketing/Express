/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get email template
*
* templateCode String 
* returns Email
* */
const getEmailTemplate = ({ templateCode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        templateCode,
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
* Send email
*
* emailPayload EmailPayload  (optional)
* returns String
* */
const sendMessage = ({ emailPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        emailPayload,
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
  getEmailTemplate,
  sendMessage,
};
