const placetModel = require('../models/models.js');


async function loadData(resp) {

  // const response = await placeModel.updateMany();
  for (let i = 0; i < resp.length; i++) {
    const post = new placetModel({
      user_id: resp[i]['userId'],
      id: resp[i]['id'],
      title: resp[i]['title'],
      description: resp[i]['body'],
    })
    post.save();
  }


}

async function fetchPlaceById(req, res) {
  //let obj = {}
  let idNum = req.query.id
  const users = await placetModel.findOne({id:idNum});
  console.log(users)

  try {
    // await findOneres(req, "4")
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }

}

async function fetchPlaceByIdThenDelete(req, res) {
  // let obj = {}
  let idNum = req.query.id
  const users = await placetModel.deleteOne({id:idNum});
  console.log(users)

  try {
    return({ message: "sucscefully delted", object_deleted: users });
  } catch (error) {
    return(error);
  }

}

async function fetchupdatPlaceById(req,res) {   //query params _id to show one result / otherwise show all

  //req.query.num1
  let idNum = req.query.id;
  let userIdNum = req.query.user_id;
  let title = req.query.title;
  let description = req.query.description
  const filter = {idNum};

  console.log("try block here")
  let response = await placetModel.findOneAndUpdate(filter, {user_id: userIdNum, title: title, description: description }, { new: true })
  console.log('Changed')
  return response
}

async function fetchaddPlaceById(req, res) {
  let idNum = req.query.id;
  let userIdNum = req.query.user_id;
  let title = req.query.title;
  let description = req.query.description


  let obj = {
    user_id: userIdNum,
    id: idNum,
    title: title,
    description: description

  }

  const users = await placetModel.create(obj);
  console.log(users)

  try {
    return({ message: "sucscefully Addded", object_deleted: users });
    // res.send(users);
  } catch (error) {
    return(error)
    // res.status(500).send(error);
  }

}

async function fetchDeleteAll(req, res) {
  // let obj = {}
  let idNum = req.query.id
  const users = await placetModel.remove();
  console.log(users)

  // try {
  //   return({ message: "sucscefully delted", object_deleted: users });
  // } catch (error) {
  //   return(error);
  // }

}
module.exports = {
  loadData, fetchPlaceById, fetchPlaceByIdThenDelete, fetchaddPlaceById, fetchupdatPlaceById,fetchDeleteAll
}