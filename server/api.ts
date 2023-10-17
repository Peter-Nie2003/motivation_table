import express, { Request, Response } from "express";
import tasksObject from "./models/Tasks";
const router = express.Router();


// |------------------------------|
// | write your API methods below!|
// |------------------------------|


router.get("/tasks", (req: Request, res: Response) => {
  tasksObject.find({}).then((tasks) => (res.send(tasks)));
})

router.get("/task", (req: Request, res: Response) => {
  tasksObject.find({ workSpace: req.body.id }).then((tasks) => (res.send(tasks)));
})

function calcualteValue(interest: number, confident: number, time: number) {
  const date = new Date();
  const nomiator: number = interest * confident;
  const denominator: number = (time - date.getTime()) / (1000 * 3600 * 24);
  return nomiator / denominator;
}

async function upToDateTask() {
  const updateTask = await tasksObject.find({});
  updateTask.forEach(async (task) => {
    task.value = calcualteValue(task.interest, task.confident, task.time);
    await task.save();
  })
}
router.post("/newTasks", (req: Request, res: Response) => {
  const motivationValue: number = calcualteValue(req.body.interest, req.body.confident, req.body.time);
  console.log(motivationValue)
  const newTasks = new tasksObject({
    name: req.body.name,
    confident: req.body.confident,
    interest: req.body.interest,
    due_dy: req.body.dueDate,
    value: motivationValue,
    time: req.body.time,
    done: req.body.done,
    workSpace: req.body.workSpace,
  }
  )
  newTasks.save().then((task) => res.send(task));
});
router.post("/upToDateTask", (req: Request, res: Response) => {
  upToDateTask();
})

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
