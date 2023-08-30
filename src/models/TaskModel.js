import {Schema, model} from "mongoose"

const taskSchema = new Schema(
{
    Unit: {
        type: Number,
        require: true
    },
    Name: {
        type: String,
        require: true,
        trim: true
    },
    Description: {
        type: String,
        require: true,
        trim: true
    },
    Grade: {
        type: Number,
        require: true,
    },
}, {
        versionKey: false,
        timestamps: true
    }
);

export default model('Task',taskSchema)