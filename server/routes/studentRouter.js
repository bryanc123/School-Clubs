const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const studentRouter = express.Router();

const connection = require("../database/connection");

studentRouter
    .route("/")
    .get(async (req, res) => {
        let database = connection.getDatabase();

        const studentsCollection = database.collection("students");

        const students = await studentsCollection.find({}).toArray();
        
        res.json(students);
    })
    .post(async (req, res) => {
        let database = connection.getDatabase();

        const studentsCollection = database.collection("students");

        const newStudent = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            grade: req.body.grade
        };

        const result = await studentsCollection.insertOne(newStudent);
        
        res.status(201).json(result);
    });

studentRouter
    .route("/:id")
    .get(async (req, res) => {
        let database = connection.getDatabase();

        const query = { _id: ObjectId(req.params.id) };

        const studentsCollection = database.collection("students");

        const student = await studentsCollection.findOne(query);

        res.json(student);
    })
    .put(async (req, res) => {
        let database = connection.getDatabase();

        const filter = { _id: ObjectId(req.params.id) };

        const studentsCollection = database.collection("students");

        const updatedStudent = {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                grade: req.body.grade
            },
        };

        const options = { upsert: false };

        const student = await studentsCollection.updateOne(filter, updatedStudent, options);

        res.status(204).json(student);
    });

module.exports = studentRouter;