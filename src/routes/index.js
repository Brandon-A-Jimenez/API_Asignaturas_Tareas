import { Router } from "express";
const router = Router();
import TaskModel from "../models/TaskModel";

router.get('/task', (req,res)=>{
    TaskModel
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

router.get('/task/:id', (req,res)=>{
    const {id} = req.params;
    TaskModel
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

router.post('/task', (req,res)=> {
    const newTask = TaskModel(req.body);
    newTask
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
})

router.put("/task/:id", (req, res)=>{
    const {id} = req.params;
    const {Unit,Name, Description,Grade} = req.body;
    TaskModel
    .updateOne({_id:id},{$set: {Unit,Name, Description,Grade}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

router.delete("/task/:id", (req, res) => {
    const {id} = req.params;
    TaskModel
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });

export default router;
