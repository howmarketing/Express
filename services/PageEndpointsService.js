/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create new page
*
* pageDto PageDto  (optional)
* returns Object
* */
const createPage = ({ pageDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        pageDto,
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
* Delete a page by pageId.
*
* pageId Integer 
* returns Object
* */
const deletePage = ({ pageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        pageId,
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
* Get all pages
*
* returns List
* */
const getAllPages = () => new Promise(
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
* Get page by id
*
* pageId Integer 
* returns Object
* */
const getPage = ({ pageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        pageId,
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
* Update a page.
*
* pageId Integer 
* pageDto PageDto  (optional)
* returns Object
* */
const updatePage = ({ pageId, pageDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        pageId,
        pageDto,
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
  createPage,
  deletePage,
  getAllPages,
  getPage,
  updatePage,
};
