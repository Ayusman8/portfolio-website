const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('Routes loaded');

router.get('/', homeController.home);
router.get('/feedback', homeController.feedback);
router.post('/create', homeController.create);
// router.get('/projects', homeController.projects);

module.exports = router;