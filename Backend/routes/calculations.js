const router = require('express').Router();
const calculation = require('../models/calculation');


router.route('/:id').get(async (req,res) => {
    const userID = req.params.id;

    await calculation.findById(userID).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

router.route('/delete/:id').delete(async (req,res) => {
    const userID = req.params.id;

    await calculation.findByIdAndDelete(userID).then(() => {
        res.status(200).send({status:"Calculation removed!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

module.exports = router;