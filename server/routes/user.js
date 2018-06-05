const router = require("express").Router();
const controllers = require("../controllers");
const passport = require('../scripts/passportConfig');


//  Routes regarding sign ups and logins
router.post("/finishSignUp", controllers.user.finishSignUp);
router.get('/user/:_id', controllers.user.getUser);



module.exports = router; 