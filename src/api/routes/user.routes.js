const express = require('express');
const router = express.Router();
const { register, login, modifyProfile, registerAdmin } = require('../controllers/user.controller');
const { isAuth } = require("../../middleware/auth")

router.post('/register', register);
router.post("/login", login);
router.put("/update", [isAuth], modifyProfile)
router.post('/register-admin', registerAdmin);


module.exports = router;