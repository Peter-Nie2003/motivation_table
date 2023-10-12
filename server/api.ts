// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import express, {Request,Response} from "express";
import tasksObject from "./models/Tasks";
const router = express.Router();

// |------------------------------|
// | write your API methods below!|
// |------------------------------|





// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

router.get("./tasks",(req,res) =>{
  
})

router.post("/newTasks", (req:Request, res:Response) => {
  const newTasks = new tasksObject({
    name : req.body.name,
    difficulty:req.body.difficulty,
    interest:req.body.interest,
    due_dy:req.body.due_dy,
    }
  )
  newTasks.save().then((task) =>res.send(task));
});


export default router;
