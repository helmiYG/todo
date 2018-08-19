const router = require('express').Router()
const {getWeather} = require('../controllers/weather_controller');

router.get('/:token',getWeather)

module.exports = router