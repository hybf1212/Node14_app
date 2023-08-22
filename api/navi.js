const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("navi.js 입니다 .나중에 sql에서 navi DB 가져올것")
})
router.get('sub', (req, res)=>{
    res.send("하위 라우터에요. 주소창에서 요청해야합니다 부모라우터/sub")
})


module.exports = router ;