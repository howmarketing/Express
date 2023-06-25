/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get profile
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
* returns User
* */
const getProfile = ({ tokenValue, issuedAt, expiresAt, headers, claims, id, notBefore, audience, issuer, subject }) => new Promise(
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
* Get profiles code
*
* returns List
* */
const getProfilesCode = () => new Promise(
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
  getProfile,
  getProfilesCode,
};
