const express = require('express');
const router = express.Router();
const {
    personageSelect,
    personageAdd,
    selectOnePersonage,
    personagePut,
    personageDelete
} = require('../controllers/personage.controllers');

const {
    housesSelect,
    housesAdd,
    selectOneHouse,
    housesPut,
    housesDelete
} = require('../controllers/houses.controllers'); // Assuming you have a similar controller for houses

// Personage Routes
router.get('/personage/select', personageSelect);
router.post('/personage/add', personageAdd);
router.get('/personage/selectOne/:id', selectOnePersonage);
router.put('/personage/update/:id', personagePut);
router.delete('/personage/delete/:id', personageDelete);

// Houses Routes
router.get('/houses/select', housesSelect);
router.post('/houses/add', housesAdd);
router.get('/houses/selectOne/:id', selectOneHouse);
router.put('/houses/update/:id', housesPut);
router.delete('/houses/delete/:id', housesDelete);

module.exports = router;
