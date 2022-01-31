const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const starCtrl = require('../controllers/starControllers');

router.post('/', multer, starCtrl.createStar);
router.get('/', starCtrl.findAllStar);
router.get('/:id', starCtrl.findOneStar);
router.put('/:id', multer, starCtrl.updateStar);
router.delete('/:id', multer, starCtrl.deleteStar);

module.exports = router;