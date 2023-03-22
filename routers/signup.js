const express = require('express');
const router = express.Router();
const multer = require('multer');

const signupValidation = require('./../controllers/signupValidation');

router.post('/', multer().single('image'), signupValidation,  );

module.exports = router;