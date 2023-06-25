/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create workflow
*
* workflowPayload WorkflowPayload  (optional)
* returns WorkflowProcess
* */
const createWorkflow = ({ workflowPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workflowPayload,
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
* Finish task - approve or reject
*
* inlineObject1 InlineObject1  (optional)
* returns WorkflowTask
* */
const finishTask = ({ inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject1,
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
* List tasks from workflow
*
* workflowId Integer 
* applicationDn String 
* returns WorkflowTaskDto
* */
const getTasks = ({ workflowId, applicationDn }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        workflowId,
        applicationDn,
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
* List workflows
*
* companyName String  (optional)
* companyAdminName String  (optional)
* applicationName String  (optional)
* username String  (optional)
* statusTask String  (optional)
* statusWorkflow String  (optional)
* startTask String  (optional)
* endTask String  (optional)
* startWorkflow String  (optional)
* endWorkflow String  (optional)
* page Integer  (optional)
* size Integer  (optional)
* sort List  (optional)
* returns PageWorkflowDto
* */
const getWorkflows = ({ companyName, companyAdminName, applicationName, username, statusTask, statusWorkflow, startTask, endTask, startWorkflow, endWorkflow, page, size, sort }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyName,
        companyAdminName,
        applicationName,
        username,
        statusTask,
        statusWorkflow,
        startTask,
        endTask,
        startWorkflow,
        endWorkflow,
        page,
        size,
        sort,
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
  createWorkflow,
  finishTask,
  getTasks,
  getWorkflows,
};
