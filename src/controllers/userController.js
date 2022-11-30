var Users = require('../models/users');
const Controller={}

Controller.getUsers = async (req, res) => {
    const response = await Users.findAll().then((data) => {
        const res = { error: false, data: data }
        return res;
    }).catch(error => {
        const res = { error: true, message: error }
        return res;
    });
    res.json(response);
}

Controller.createUser = async (req, res) => {
    try {
        const modelData = {
            username: req.body.username,
            email: req.body.email,
            roll: req.body.roll
        }
        const response = await Users.create(modelData)
            .then((data) => {
                const res = { error: false, data: data, message: "User Create" }
                return res;
            }).catch(error => {
                const res = { error: true, message: error }
                return res;
            });
        res.json(response);
    } catch (e) {
        console.log(e)
    }
}

Controller.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
       
        const response = await Users.destroy({
            where: { id: id }
        }).then((data) => {
            const res = { error: false, data: data,message:"Deleted Successful" }
            return res;
        }).catch(error => {
            const res = { error: true, message: error }
            return res;
        });
        res.json(response);
    } catch (e) {
        console.log(e);
    }
}

module.exports = Controller