var express = require('express');
var router = express.Router();
var businessModel = require('../models/businessModels');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { msg: '' });
});

router.post('/', function(req, res) {
    console.log(req);
    var business = new businessModel({
	      name: req.body.name,
	      location: {
	        address: req.body.address,
	        locality:req.body.locality,
	        region: req.body.region,
    		country: req.body.country,
	        lat: req.body.latitude,
	        lng: req.body.longitude,
	        neighborhood: req.body.neighborhood
	      },
	      pricelevel: req.body.pricelevel,
	      website:req.body.website,
	      email:req.body.email
      });
    business.save();
    res.render('index.ejs', { msg: 'saved successfully' });
    console.log("save successfully")
});



module.exports = router;
