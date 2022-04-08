/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-04-8 22:45:39
 * @desc Lists Controller
 */

/************************************************************************************************
 *                                      Objects Controller
*************************************************************************************************/
const objectsService = require('../services/objectService');
const logger = require('../utils/logger');

exports.createObject = async (req, res) => {
    try {
        // Create a new object
        logger.debug( colorText("Creating new object") );

        const objectCreated = {"objectCreated":"some objectCreated"};
        logger.info( colorText("Object created"));

        res.json(objectCreated);
    }catch(error) {
        res.status(500).send(`There was an error creating the object: ${error}`);
    }
}

exports.getAllObjects = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects") );

        const objects = {"objects":"some objects"};

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllObjectsByListId = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = {"objects":"some objects"};

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllObjectsByListName = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = {"objects":"some objects"};

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllObjectsByFilters = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List given filter options") );

        const objects = {"objects":"some objects"};

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getObject = async (req, res) => {
    try{
        // Get object
        logger.debug( colorText("Getting object by id") );

        const object = {"object":"some object"};
        logger.info( colorText("Object Found: "));
        
        res.json(object);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.updateObject = async (req, res) => {
    try{
      // Get object
      logger.debug( colorText("Update object information") );

      const result = {"result":"some result"};
      logger.info( colorText("Object Updated: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object information: ${error}`);
  }
}

exports.deleteObject = async (req, res) => {
    try{
      // Deleting object
      logger.debug( colorText("Deleting object") );

      const result = {"result":"some result"}
      logger.info( colorText("Object Deleted: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting object: ${error}`);
  }
}