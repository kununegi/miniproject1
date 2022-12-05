var DBServices = require('../services/dbservice.js') 
const middleware = require('../middleware/placeMiddleware')

const getPlace = async (req, res) => {  

    //fetch the api data
    let resp = await middleware.fetchData(req, res)
    await DBServices.loadData(resp)
       
    res.send(resp)
}

var getPlaceById = async (req,res)=>{
    let  place = await DBServices.fetchPlaceById(req, res)
    res.send(place)
}

var deletePlaceById = async (req,res)=>{
    let  place = await DBServices.fetchPlaceByIdThenDelete(req, res)
    res.send("deleted successfully")
}

var updatePlaceById = async (req,res)=>{
    let place = await DBServices.fetchupdatPlaceById(req, res)
    res.send(place)
}

var addPlaceById = async (req,res)=>{
    let  place = await DBServices.fetchaddPlaceById(req, res)
    res.send("Add successfully")
}

var deleteAll = async (req,res)=>{
    let  place = await DBServices.fetchDeleteAll(req, res)
    res.send("Delete Succesfully")
}

module.exports = {
    getPlace,updatePlaceById,addPlaceById,deletePlaceById,getPlaceById,deleteAll
}



