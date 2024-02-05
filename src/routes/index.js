import express from 'express'
import INDEXCONTROLLER from '../controller/index.js'
import MANAGEMENTROUTES from './management.js'
let router = express.Router()
router.get("/",INDEXCONTROLLER.homepage)
router.use("/school",MANAGEMENTROUTES)


export default router