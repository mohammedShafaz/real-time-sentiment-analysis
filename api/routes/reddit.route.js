import express from "express";
import {redditPost} from "../controller/reddit.controller.js"
const router=express.Router();

router
.route('/posts')
.get(redditPost)


export default router;