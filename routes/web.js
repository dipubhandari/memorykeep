import MyController from "../controller/myController.js";
import express from "express";

const router =  express.Router()

router.get('/',MyController.viewIndex)
router.post('/',MyController.insertData)
router.get('/delete/:id',MyController.delete)


export default router