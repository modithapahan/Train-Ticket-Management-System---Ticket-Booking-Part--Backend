const router = require('express').Router();
const calculation = require('../models/calculation');


router.route('/add').post(async (req,res) => {
    const {userId, total} = req.body;
    const addDetails = {userId,total};
    const addCalculation = new calculation(addDetails);

    await addCalculation.save().then((req,res) => {
        res.status(200).send({status:"Success!"});
    }).catch((req,res) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

router.route('/').get(async (req,res) => {
    await calculation.find().then((data)=>{
        res.status(200).send(data);
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

router.route('/:id').get(async (req,res) => {
    const userID = req.params.id;

    await calculation.findById(userID).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

router.route('/update/:id').put(async (req,res) => {
    const userID = req.params.id;
    const {userId,total} = req.body;
    const updateCalculation = {userId,total};

    calculation.findByIdAndUpdate(userID,updateCalculation).then(() => {
        res.status(200).send({status:"Calculation Details Updated!"});
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