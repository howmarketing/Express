/**
 * The CompanyEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CompanyEndpointsService');
const createCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCompany);
};

const getCompaniesByApplication = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompaniesByApplication);
};

const getCompaniesByName = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompaniesByName);
};

const getCompaniesByObject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompaniesByObject);
};

const getCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompany);
};

const getCompanyAdminFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyAdminFromCompany);
};

const getCompanyFromUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyFromUser);
};

const updateCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateCompany);
};


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
