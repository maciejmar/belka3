
const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');


function middleWare1  (req,res,next){
  console.log('now we are in index.js middleware1');
}

router.get('/', PagesController.menu);
router.get('/', PagesController.zginanie);
router.get('/', PagesController.form2);
router.get('/', PagesController.typwyt);
router.get('/', PagesController.klStali);

router.get('/ugiecie',PagesController.ugiecie);
// router.get('/scinanie',PagesController.scinanie);
// router.get('/rysy',PagesController.rysy);
router.post('/api', ApplicationsController.datatoweb);
router.post('/apiform', ApplicationsController.validate, ApplicationsController.store);
router.post('/form2', ApplicationsController.datatoweb2);
router.post('/typwyt',ApplicationsController.datatoweb3);
router.post('/klStali', ApplicationsController.datatoweb4, ApplicationsController.calculate);

module.exports = router;
