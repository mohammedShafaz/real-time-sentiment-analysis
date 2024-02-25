import express from 'express';
import sampleRoute from "./sample.route.js"
import redditRoute from"./reddit.route.js"
const router = express.Router();

router.route('/').get((req, res) => {
    res.json("Welcome")
})

router.use('/sample',sampleRoute)
router.use('/reddit',redditRoute)

export default router;