/**
 * The CategoryEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CategoryEndpointsService');
const addCategoryToCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.addCategoryToCompany);
};

const createAircraftType = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAircraftType);
};

const createBct = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBct);
};

const createCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCategory);
};

const createMarket = async (request, response) => {
  await Controller.handleRequest(request, response, service.createMarket);
};

const deleteAircraftType = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAircraftType);
};

const deleteBct = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBct);
};

const deleteCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCategory);
};

const deleteMarket = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteMarket);
};

const getAllAircraftTypes = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllAircraftTypes);
};

const getAllBcts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBcts);
};

const getAllCategories = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllCategories);
};

const getAllMarkets = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllMarkets);
};

const getCategoriesFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCategoriesFromCompany);
};

const getCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCategory);
};

const getMarketsAndAircraftByBctAndMarket = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMarketsAndAircraftByBctAndMarket);
};

const removeCategoryToCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeCategoryToCompany);
};

const updateAircraftType = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateAircraftType);
};

const updateBct = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBct);
};

const updateCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateCategory);
};

const updateMarket = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateMarket);
};


module.exports = {
  addCategoryToCompany,
  createAircraftType,
  createBct,
  createCategory,
  createMarket,
  deleteAircraftType,
  deleteBct,
  deleteCategory,
  deleteMarket,
  getAllAircraftTypes,
  getAllBcts,
  getAllCategories,
  getAllMarkets,
  getCategoriesFromCompany,
  getCategory,
  getMarketsAndAircraftByBctAndMarket,
  removeCategoryToCompany,
  updateAircraftType,
  updateBct,
  updateCategory,
  updateMarket,
};
