import express, { Request, Response } from "express";
import tasksObject, { taskSchema } from "./models/Tasks";
import listObject from "./models/Lists";
import { database } from "./server";
const router = express.Router();


router.get("/getLists", (req: Request, res: Response) => {
  listObject.find({}).then((listObject) => (res.send(listObject)));

})
router.get("/tasks", (req: Request, res: Response) => {
  tasksObject.find({}).then((tasks) => (res.send(tasks)));
})
interface foo {
  name: string;
}

router.get("/task", async (req: Request<{}, {}, {}, foo>, res: Response) => {
  function compareFun(a: taskSchema, b: taskSchema) {
    if (a.value > b.value) {
      return 1;
    }
    else if (b.value > a.value) {
      return -1;
    }
    return 0;
  }
  const { query } = req;
  const q = { workSpace: query.name }
  const tasks = await tasksObject.find(
    q
  );
  tasks.sort(compareFun);
  res.send(tasks);
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


router.post("/addNewList", (req: Request, res: Response) => {
  const newLists = new listObject({
    name: req.body.name,
  });
  newLists.save().then((list) => res.send(list));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  const msg = `Api route not found: ${req.method} ${req.url}`;
  res.status(404).send({ msg });
});

export default router;
