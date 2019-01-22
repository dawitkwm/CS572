const express = require('express');

const GradesService = require('../services/grades');

const gradesRouter = express.Router();

const gradesService = new GradesService();

/* GET: retrieve all existing grade entities. */
gradesRouter.get('/', function (req, res, next) {
  res.send(
    gradesService.getAll()
  );
});

/* GET: retrieve an existing grade entity with the given id. */
gradesRouter.get('/:id', (req, res, next) => {
  res.send(
    gradesService.get(req.params.id)
  );
});

/* POST: add a new grade entity.*/
gradesRouter.post('/', function (req, res, next) {
  if (!Object.keys(req.body).length) { // if empty obj or {}
    console.log(req.body);
    next({
      status: 400,
      message: "Error: Empty JSON Input."
    });
  } else {
    const postSuccessful = gradesService.add(req.body);
    if (postSuccessful) {
      res.send("Added Successfully.")
    } else {
      next({
        status: 304,
        message: "POST Error."
      });
    }
  }
});

/* PUT: update an existing grade entity.*/
gradesRouter.put('/:id', (req, res, next) => {
  if (!Object.keys(req.body).length) { // if empty obj or {}
    next({
      status: 400,
      message: "Error: Empty JSON Input."
    });
  } else {
    const putSuccessful = gradesService.update(req.params.id, req.body);
    if (putSuccessful) {
      res.send("Updated Successfully.");
    } else {
      next({
        status: 304,
        message: "PUT Error."
      });
    }
  }
});

/* DELETE: delete an existing grade entity*/
gradesRouter.delete('/:id', (req, res, next) => {
  const deleteSuccessful = gradesService.delete(req.params.id);
  if (deleteSuccessful) {
    res.send("Deleted Successfully.");
  } else {
    next({
      status: 304,
      message: "DELETE Error."
    });
  }
});

module.exports = gradesRouter;