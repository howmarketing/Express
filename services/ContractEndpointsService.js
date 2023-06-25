/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* List file
*
* filename String 
* returns File
* */
const getFile = ({ filename }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filename,
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
* List all files
*
* returns List
* */
const getListFiles = () => new Promise(
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
* Upload document
*
* document File 
* returns String
* */
const uploadDocument = ({ document }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        document,
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
  getFile,
  getListFiles,
  uploadDocument,
};
