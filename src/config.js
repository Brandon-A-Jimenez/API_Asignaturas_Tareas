import {config} from 'dotenv'
config();

export default{
    mongodbURL: process.env.MONGODB_URI || "mongodb+srv://brandon:9aZiLrFJQiD9dZKf@cluster0.wfkzvoe.mongodb.net/"
}