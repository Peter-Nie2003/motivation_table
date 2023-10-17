import express, { Request, Response } from "express";
import tasksObject from "./models/Tasks";
const router = express.Router();


// |------------------------------|
// | write your API methods below!|
// |------------------------------|


router.get("/tasks", (req: Request, res: Response) => {
  tasksObject.find({id:req.body}).then((tasks) => (res.send(tasks)));
})
router.post("/newTasks", (req: Request, res: Response) => {
  const date = new Date();
  const calcualteValue = () => {
    const nomiator: number = req.body.interest * req.body.confident;
    const denominator: number = (req.body.time - date.getTime()) / (1000 * 3600 * 24);
    return nomiator / denominator;
  }
  const motivationValue: number = calcualteValue();
  console.log(motivationValue)
  const newTasks = new tasksObject({
    name: req.body.name,
    confident: req.body.confident,
    interest: req.body.interest,
    due_dy: req.body.dueDate,
    value: motivationValue,
    done: req.body.done,
  }
  )
  newTasks.save().then((task) => res.send(task));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
