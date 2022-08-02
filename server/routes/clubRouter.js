const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const clubRouter = express.Router();

const connection = require("../database/connection");

clubRouter
    .route("/")
    .get(async (req, res) => {
        let database = connection.getDatabase();

        const clubsCollection = database.collection("clubs");

        const clubs = await clubsCollection.find({}).toArray();
        
        res.json(clubs);
    })
    .post(async (req, res) => {
        let database = connection.getDatabase();

        const clubsCollection = database.collection("clubs");

        const newClub = {
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            members: req.body.members
        };

        const result = await clubsCollection.insertOne(newClub);
        
        res.status(201).json(result);
    });

clubRouter
    .route("/:id")
    .get(async (req, res) => {
        let database = connection.getDatabase();

        const query = { _id: ObjectId(req.params.id) };

        const clubsCollection = database.collection("clubs");

        const club = await clubsCollection.findOne(query);

        res.json(club);
    })
    .put(async (req, res) => {
        let database = connection.getDatabase();

        const filter = { _id: ObjectId(req.params.id) };

        const clubsCollection = database.collection("clubs");

        const updatedClub = {
            $set: {
                name: req.body.name,
                description: req.body.description,
                location: req.body.location,
                members: req.body.members
            },
        };

        const options = { upsert: false };

        const club = await clubsCollection.updateOne(filter, updatedClub, options);

        res.status(204).json(club);
    });

module.exports = clubRouter;