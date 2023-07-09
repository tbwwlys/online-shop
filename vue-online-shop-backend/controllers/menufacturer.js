const Model = require('../model'); // 模型
const { Menufacturer } = Model;


const menufacturerController = {
    all(req, res, next) {
        Menufacturer.find({})
            .exec((err, menufacturers) => {
                if (err) {
                    next(err);
                } else {
                    res.json(menufacturers)
                }
            })
    },
    byId (req, res) {
        const idParams = req.params.id;
        Menufacturer
            .findOne({ _id: idParams })
            .exec((err, menufacturer) => res.json(menufacturer))
    },
    create (req, res) {
        const requestBody = req.body;  
        // res.json(requestBody)
        const newMenufacturer = new Menufacturer(requestBody);
        newMenufacturer.save((err, saved) => {
            Menufacturer
                .findOne({_id: newMenufacturer._id})
                .exec((err, menufacturer) => res.json(menufacturer))
        })

    },
    update (req, res) {
        const idParams = req.params.id;
        let menufacturer = req.body;
        Menufacturer
            .updateOne({ _id: idParams }, { ...menufacturer }, (err, updated) => {
                res.json(updated);
            })
    },
    remove (req, res) {
        const idParams = req.params.id;
        Menufacturer
            .findOne({ _id: idParams }).remove((err, removed) => {
                return res.json(idParams)
            })
    }

}

module.exports = menufacturerController