const router = require("express").Router();

const {router: homeRoutes} = require('./web/home');

router.use(homeRoutes)


module.exports = router;