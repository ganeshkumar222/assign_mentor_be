import MANAGEMENTCONTROLLER from '../controller/management.js'
import express  from 'express'

let router = express.Router()

router.post("/createstudent",MANAGEMENTCONTROLLER.createStudent)
router.post("/creatementor",MANAGEMENTCONTROLLER.createMentor)
router.put("/assignmentor",MANAGEMENTCONTROLLER.assignMentor)
router.get("/getstudents",MANAGEMENTCONTROLLER.getStudents)
router.get("/getmentors",MANAGEMENTCONTROLLER.getMentors)
router.get("/getmentors/:id",MANAGEMENTCONTROLLER.getmentorbyid)
router.put("/assignstudent",MANAGEMENTCONTROLLER.assignStudent)
router.get("/getstudents/:id",MANAGEMENTCONTROLLER.getstudentbyid)
router.post("/assignmentor",MANAGEMENTCONTROLLER.assignMentor)


export default router