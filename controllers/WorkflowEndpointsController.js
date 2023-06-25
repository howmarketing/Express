/**
 * The WorkflowEndpointsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WorkflowEndpointsService');
const createWorkflow = async (request, response) => {
  await Controller.handleRequest(request, response, service.createWorkflow);
};

const finishTask = async (request, response) => {
  await Controller.handleRequest(request, response, service.finishTask);
};

const getTasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTasks);
};

const getWorkflows = async (request, response) => {
  await Controller.handleRequest(request, response, service.getWorkflows);
};


module.exports = {
  createWorkflow,
  finishTask,
  getTasks,
  getWorkflows,
};
