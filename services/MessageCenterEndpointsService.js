/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete message
*
* messageId Integer 
* returns Object
* */
const deleteMessage = ({ messageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageId,
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
* Delete message template
*
* messageTemplateId Integer 
* returns Object
* */
const deleteMessageTemplate = ({ messageTemplateId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageTemplateId,
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
* Get message template
*
* messageTemplateId Integer 
* returns MessageTemplate
* */
const getMessageTemplate = ({ messageTemplateId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageTemplateId,
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
* Get message
*
* messageId Integer 
* returns MessageGroupedDto
* */
const getUserMessage = ({ messageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageId,
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
* List all messages by parameters
*
* title String  (optional)
* startDate String  (optional)
* endDate String  (optional)
* page Integer  (optional)
* size Integer  (optional)
* sort List  (optional)
* returns PageMessageGroupedListDto
* */
const listAllMessagesByParameters = ({ title, startDate, endDate, page, size, sort }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        title,
        startDate,
        endDate,
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
/**
* List all messages by user
*
* userCn String 
* page Integer  (optional)
* size Integer  (optional)
* sort List  (optional)
* returns PageMessageUser
* */
const listAllMessagesByUser = ({ userCn, page, size, sort }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userCn,
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
/**
* List all message templates by parameters
*
* name String  (optional)
* startDate String  (optional)
* endDate String  (optional)
* page Integer  (optional)
* size Integer  (optional)
* sort List  (optional)
* returns PageMessageTemplate
* */
const listMessageTemplates = ({ name, startDate, endDate, page, size, sort }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        startDate,
        endDate,
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
/**
* Read user message
*
* messageUserId Integer 
* returns MessageUser
* */
const readUserMessage = ({ messageUserId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageUserId,
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
* Save new message
*
* messageCenterPayload MessageCenterPayload  (optional)
* returns String
* */
const saveMessage = ({ messageCenterPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageCenterPayload,
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
* Save new message template
*
* messageTemplateDto MessageTemplateDto  (optional)
* returns MessageTemplate
* */
const saveMessageTemplate = ({ messageTemplateDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageTemplateDto,
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
* Update message
*
* messageId Integer 
* messageCenterPayload MessageCenterPayload  (optional)
* returns Message
* */
const updateMessage = ({ messageId, messageCenterPayload }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageId,
        messageCenterPayload,
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
* Update message template
*
* messageTemplateId Integer 
* messageTemplateDto MessageTemplateDto  (optional)
* returns MessageTemplate
* */
const updateMessageTemplate = ({ messageTemplateId, messageTemplateDto }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        messageTemplateId,
        messageTemplateDto,
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
