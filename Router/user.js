const express=require("express")
const router=express.Router()
const courses=require("../controller/user")


router.get('/course',courses.get_method)
router.get('/course/:id',courses.get_id_method)
router.put('/course/updata/:id',courses.updata)
router.delete("/course/delete/:id",courses.delete_data)
router.post('/course/post/:id',courses.postdata)

module.exports=router