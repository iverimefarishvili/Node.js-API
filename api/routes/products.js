const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hndling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hndling POST requests to /products'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the special id',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed and ID'
        })
    }
})

module.exports = router;