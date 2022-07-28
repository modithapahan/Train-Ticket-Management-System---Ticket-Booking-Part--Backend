const router = require('express').Router();
const location = require('../models/location');

//Add a new location
router.route('/add').post(async (req,res) => {
    const{userId,from,to,date,time,no_of_tickets} = req.body;
    const addDetails = {userId,from,to,date,time,no_of_tickets};
    const addLocation = new location(addDetails);

    await addLocation.save().then(()=>{
        res.status(200).send({status:"New Location Selected!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

//Find all location details
router.route('/').get((req,res) => {
    location.find().then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

//Get location details using ID
router.route('/:id').get((req,res) => {
    const locationID = req.params.id;
    location.findById(locationID).then((data)=>{
        res.status(200).send(data)
    }).catch((error)=>{
        console.log(error);
        res.status(404).send({status:"User Not Found!"});
    })
})

//Update location details
router.route('/update/:id').put(async (req,res) => {
    const locationID = req.params.id;
    const {userId,from,to,date,time,no_of_tickets} = req.body;
    const locationUpdate = {userId,from,to,date,time,no_of_tickets};

    await location.findByIdAndUpdate(locationID,locationUpdate).then(() => {
        res.status(200).send({status:"Destination Details Updated!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })

})

//Delete location details
router.route('/delete/:id').delete(async (req,res) => {
    const locationID = req.params.id;

    await location.findByIdAndDelete(locationID).then(() => {
        res.status(200).send({status:"Location Deleted!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

module.exports = router;