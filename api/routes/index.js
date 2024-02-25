import express from 'express';
import { sampleApi } from "../controller/sample.controller.js";
const router = express.Router();

router.route('/').get((req, res) => {
    res.json("Welcome")
})
router.route('/sample').get(sampleApi);


export default router;