/**
 * The UserEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UserEndpointsService');
const checkIfUserExists = async (request, response) => {
  await Controller.handleRequest(request, response, service.checkIfUserExists);
};

const createUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUser);
};

const generateLogin = async (request, response) => {
  await Controller.handleRequest(request, response, service.generateLogin);
};

const getAllUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllUsers);
};

const getNickname = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNickname);
};

const getUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUser);
};

const getUsersByAircraft = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByAircraft);
};

const getUsersByBCT = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByBCT);
};

const getUsersByCompany = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByCompany);
};

const getUsersByMarket = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByMarket);
};

const getUsersByName = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByName);
};

const getUsersByObject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByObject);
};

const getUsersByService = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUsersByService);
};

const updateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUser);
};


module.exports = {
  checkIfUserExists,
  createUser,
  generateLogin,
  getAllUsers,
  getNickname,
  getUser,
  getUsersByAircraft,
  getUsersByBCT,
  getUsersByCompany,
  getUsersByMarket,
  getUsersByName,
  getUsersByObject,
  getUsersByService,
  updateUser,
};
