const express = require('express');
const router = express.Router(); // create a new router object
const fruits = require('../controllers/fruits')


router.get('/', fruits.index )
router.get('/:name', fruits.show )
router.post('/', fruits.create) // add a new route for creating a fruit
router.patch('/:name', fruits.update)
router.delete('/:name', fruits.destroy)

module.exports = router; // export the router object so it can be used in other files
