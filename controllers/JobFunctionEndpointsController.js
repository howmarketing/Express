/**
 * The JobFunctionEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/JobFunctionEndpointsService');
const addAndRemoveServiceToUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.addAndRemoveServiceToUser);
};

const addApplicationToCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.addApplicationToCompany);
};

const addServiceToCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.addServiceToCategory);
};

const addServiceToCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.addServiceToCompany);
};

const addServiceToUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.addServiceToUser);
};

const associateContentAdminToApplication = async (request, response) => {
  await Controller.handleRequest(request, response, service.associateContentAdminToApplication);
};

const createService = async (request, response) => {
  await Controller.handleRequest(request, response, service.createService);
};

const deleteContentAdminFromApplication = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteContentAdminFromApplication);
};

const deleteService = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteService);
};

const getAllApplications = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllApplications);
};

const getAllGroupAccessApplications = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllGroupAccessApplications);
};

const getAllServices = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllServices);
};

const getApplicationsFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getApplicationsFromCompany);
};

const getApplicationsFromUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getApplicationsFromUser);
};

const getContentAdminApplications = async (request, response) => {
  await Controller.handleRequest(request, response, service.getContentAdminApplications);
};

const getLinksApplicationsFromUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getLinksApplicationsFromUser);
};

const getServicesFromApplication = async (request, response) => {
  await Controller.handleRequest(request, response, service.getServicesFromApplication);
};

const getServicesFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getServicesFromCompany);
};

const getServicesFromUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getServicesFromUser);
};

const removeApplicationFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeApplicationFromCompany);
};

const removeServiceFromCategory = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeServiceFromCategory);
};

const removeServiceFromCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeServiceFromCompany);
};

const removeServiceFromUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeServiceFromUser);
};

const updateService = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateService);
};


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
