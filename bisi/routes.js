import express from 'express'
import { deleteCon, queryControl, userNameCont } from './controller.js'

const router = express.Router()

router.get('/login',userNameCont)
router.get('/signup',queryControl)

router.delete('/user',deleteCon)

export default router