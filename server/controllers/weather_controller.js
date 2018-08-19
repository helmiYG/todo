const axios = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    getWeather: (req, res) => {
       let decode = jwt.verify(req.params.token, 'secret-key')
       axios.get(`https://api.weatherbit.io/v2.0/current?city=${decode.city}&key=${process.env.weatherKey}`)
       .then((result) => {
           res.status(200).json({
               temp : result.data.data[0].temp,
               loc : decode.city,
               desc :result.data.data[0].weather.description
           })
       }).catch((err) => {
           console.log(err);
       });
       
    }
};
