import Snoowrap from "snoowrap";
import dotenv from"dotenv";
dotenv.config();
const userAgent =process.env.REDDIT_USER_AGENT;
const redditClientId=process.env.REDDIT_CLIENT_ID;
const redditClientSecret=process.env.REDDIT_CLIENT_SECRET;
const redditUsername=process.env.REDDIT_USERNAME;
const redditPassword=process.env.REDDIT_PASSWORD;

const redditClient= new Snoowrap({
    userAgent:userAgent,
    clientId:redditClientId,
    clientSecret:redditClientSecret,
    username:redditUsername,
    password:redditPassword
});

export const redditPost= async (req,res)=>{
    try {
        const subredditName = 'AskReddit';
        const posts = await redditClient.getHot(subredditName, { limit: 10 });
        if(!posts){
            res.status(404).json({message:"Post not found...!"})
        }
        res.status(200).json({
            message:"Successful",
            posts:posts
        })
    } catch (error) {
        res.status(500).send("Something went wrong")
        console.error(error);
    }
}