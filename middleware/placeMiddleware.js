const axios =  require('axios')

const options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
      accept: 'application/json',
      "Accept-Encoding":'*',
    }
  };
async function fetchData(req,res){
    const response = await axios.request(options)
    .then (json => {
        return json.data
    })
    return response
}

module.exports={
     fetchData
}