/**
 * The MessageCenterEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MessageCenterEndpointsService');
const deleteMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteMessage);
};

const deleteMessageTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteMessageTemplate);
};

const getMessageTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMessageTemplate);
};

const getUserMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserMessage);
};

const listAllMessagesByParameters = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAllMessagesByParameters);
};

const listAllMessagesByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAllMessagesByUser);
};

const listMessageTemplates = async (request, response) => {
  await Controller.handleRequest(request, response, service.listMessageTemplates);
};

const readUserMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.readUserMessage);
};

const saveMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.saveMessage);
};

const saveMessageTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.saveMessageTemplate);
};

const updateMessage = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateMessage);
};

const updateMessageTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateMessageTemplate);
};


module.exports = {
  deleteMessage,
  deleteMessageTemplate,
  getMessageTemplate,
  getUserMessage,
  listAllMessagesByParameters,
  listAllMessagesByUser,
  listMessageTemplates,
  readUserMessage,
  saveMessage,
  saveMessageTemplate,
  updateMessage,
  updateMessageTemplate,
};
