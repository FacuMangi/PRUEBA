const express = require("express");
const resourceSchema = require("../models/resources");
const users = require("../models/users");

const router = express.Router();

// get one resource (id) everyone
router.get('/resources/:id', (req, res) => {
    const { id } = req.params;
    resourceSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// create resource common, premium
router.post('/resources', (req, res) => {
    if (roll === 'common' || roll === 'premium') {
        const resource = resourceSchema(req.body);

        resource
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        res.send("No tiene permitida esa accion")
    }
});

// update one resource common, premium
router.put('/resources/:id', (req, res) => {
    if (roll === 'common' || roll === 'premium') {
        const { id } = req.params;
        const { type, title, description, price } = req.body;
        resourceSchema
            .updateOne({ _id: id }, { $set: { type, title, description, price } })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        res.send("No tiene permitida esa accion")
    }
});

// delete one resource premium
router.delete('/resources/:id', (req, res) => {
    if (roll === 'premium') {
        const { id } = req.params;
        resourceSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        res.send("No tiene permitida esa accion")
    }

});



module.exports = router;
