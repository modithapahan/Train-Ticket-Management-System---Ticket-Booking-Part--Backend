const router = require('express').Router();
const user = require('../models/user');

//Add a new user
router.route('/add').post(async (req,res) => {
    const {userId,name,age,NIC,dob} = req.body;
    const addDetails = {userId,name, age, NIC,dob};
    const addUser = new user(addDetails);

    await addUser.save().then(() => {
        res.status(200).send({status:"New User Added!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

//Find all user details
router.route('/').get(async (req,res) => {
    await user.find().then((data)=>{
        res.status(200).send(data);
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

//Find user details using id
router.route('/:id').get(async (req,res) => {
    const userID = req.params.id;

    const details = await user.findById(userID).then((details)=>{
        res.status(200).send(details);
    }).catch((error)=>{
        res.status(404).send({status:"User Not Found!"});
        res.send(error)
    })

})

//update user details
router.route('/update/:id').put(async (req,res) => {
    const userID = req.params.id;
    const {name,age,NIC,dob} = req.body;
    const userUpdate = {name,age,NIC,dob};

    await user.findByIdAndUpdate(userID, userUpdate).then(() => {
        res.status(200).send({status:"User Updated!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

//delete user details
router.route('/delete/:id').delete(async (req,res) => {
    const userID = req.params.id;

    await user.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status:"User Deleted!"});
    }).catch((error) => {
        console.log(error);
        res.status(404).send({status:"Error"});
    })
})

module.exports = router;
