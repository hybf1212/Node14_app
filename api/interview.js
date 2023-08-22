const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("리액트가 나한테 먼저 요청하면 응답할것")
})

module.exports = router ;