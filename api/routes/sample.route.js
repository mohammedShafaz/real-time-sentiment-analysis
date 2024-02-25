import express from "express";

const router=express.Router();

import {sampleApi} from "../controller/sample.controller.js"

router
    .route('/')
    .get(sampleApi)


export default router;