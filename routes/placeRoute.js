var express = require('express');
var placeController = require('../controllers/placeController')

var router = express.Router();

router.get(`/all`, function (req, res) { 
    placeController.getPlace(req, res)
    
})

router.get('/getbyid', function(req, res){
    placeController.getPlaceById(req, res)
}) 

router.delete('/delete', function(req, res){
    placeController.deletePlaceById(req, res)
}) 

router.put('/update', function(req, res){
    placeController.updatePlaceById(req, res)
}) 

router.post('/create', function(req, res){
    placeController.addPlaceById(req, res)
}) 
router.delete('/deleteall', function(req, res){
    placeController.deleteAll(req, res)
}) 



module.exports = router;